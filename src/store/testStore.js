import { create } from "zustand";
import { deleteTestResult, getTestResults, updateTestResult } from "../api/testResults";

const testStore = create((set) => ({
  testResults: [], // 테스트 결과 초기 상태
  setTestResults: (results) => set({ testResults: results }), // 테스트 결과 설정

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
        console.log("테스트 결과 추가 성공:", createdResult);
      } catch (error) {
        console.error("테스트 결과 추가 중 오류:", error.response?.data || error.message);
        alert("테스트 결과 추가에 실패했습니다. 다시 시도해주세요.");
      }
    },

  // 공개/비공개 상태 전환
  toggleVisibility: async (id, currentVisibility) => {
    try {
      const updatedResult = await updateTestResult(id, !currentVisibility); // API 호출
      set((state) => ({
        testResults: state.testResults.map((result) =>
          result.id === id ? updatedResult : result
        ),
      }));
    } catch (error) {
      console.error("공개/비공개 전환 중 오류:", error.response?.data || error.message);
      alert("공개/비공개 상태 변경에 실패했습니다.");
    }
  },

  // 테스트 결과 삭제
  deleteTestResult: async (id) => {
    try {
      await deleteTestResult(id); // API 호출
      set((state) => ({
        testResults: state.testResults.filter((result) => result.id !== id),
      }));
    } catch (error) {
      console.error("테스트 결과 삭제 중 오류:", error.response?.data || error.message);
      alert("테스트 결과 삭제에 실패했습니다.");
    }
  },
}));

export default testStore;