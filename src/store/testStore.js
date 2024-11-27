import { create } from "zustand";
import { deleteTestResult, getTestResults, updateTestResult } from "../api/testResults";
import { toast } from "react-toastify";

const testStore = create((set) => ({
  testResults: [], // 테스트 결과 초기 상태

  // 테스트 결과 설정
  setTestResults: (results) => set({ testResults: results }),

  // 테스트 결과 추가
  addTestResult: async (answers) => {
    try {
      const newResult = {
        answers, // 사용자가 선택한 답변
        timestamp: new Date(),
      };
      const createdResult = await getTestResults(newResult); // API 호출

      set((state) => ({
        testResults: [...state.testResults, createdResult], // 새로운 결과 추가
      }));
    } catch (error) {
      console.error("테스트 결과 추가 중 오류:", error.response?.data || error.message);
    }
  },

  // 공개/비공개 상태 전환
  toggleVisibility: async (id, currentVisibility) => {
    try {
      // API 호출 (업데이트된 결과 반환)
      const updatedResult = await updateTestResult(id, !currentVisibility);
      set((state) => ({
        testResults: state.testResults.map((result) =>
          result.id === id ? updatedResult : result
        ),
      }));
      toast.success(`결과가 ${!currentVisibility ? "공개" : "비공개"}로 설정되었습니다.`);
    } catch (error) {
      console.error("공개/비공개 전환 중 오류:", error.response?.data || error.message);
    }
  },

  // 테스트 결과 삭제
  deleteTestResult: async (id) => {
    try {
      // API 호출
      await deleteTestResult(id);
      set((state) => ({
        testResults: state.testResults.filter((result) => result.id !== id),
      }));
      toast.success("테스트 결과가 삭제되었습니다.");
    } catch (error) {
      console.error("테스트 결과 삭제 중 오류:", error.response?.data || error.message);
    }
  },
}));

export default testStore;