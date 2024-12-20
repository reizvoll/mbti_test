import axiosInstance from "./axiosInstance";

const LOCAL_URL = 'https://chip-past-apparel.glitch.me/testResults';

// 테스트 결과 가져오기
export const getTestResults = async () => {
    try {
        const response = await axiosInstance.get(LOCAL_URL);
        return response.data;
    } catch (error) {
        console.error("테스트 결과 가져오기 중 오류:", error.response?.data || error.message);
        throw error;
    }
};

// 새로운 테스트 결과 생성
export const createTestResult = async (resultData) => {
    try {
        const response = await axiosInstance.post(LOCAL_URL, resultData);
        return response.data;
    } catch (error) {
        console.error("테스트 결과 생성 중 오류:", error.response?.data || error.message);
        throw error;
    }
};

// 테스트 결과 삭제
export const deleteTestResult = async (id) => {
    try {
        const response = await axiosInstance.delete(`${LOCAL_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("테스트 결과 삭제 중 오류:", error.response?.data || error.message);
        throw error;
    }
};

// 테스트 결과 업데이트
export const updateTestResult = async (id, visibility) => {
    try {
        const response = await axiosInstance.patch(`${LOCAL_URL}/${id}`, { visibility });
        return response.data;
    } catch (error) {
        console.error("테스트 결과 업데이트 중 오류:", error.response?.data || error.message);
        throw error;
    }
};