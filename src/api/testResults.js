import axios from "axios";

const API_URL = 'http://localhost:5000/testResults';

// 테스트 결과 가져오기
export const getTestResults = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("테스트 결과 생성 중 오류:", error.response?.data || error.message);
        throw error;
    }
};

// 새로운 테스트 결과 생성
export const createTestResult = async (resultData) => {
    try {
        const response = await axios.post(API_URL, resultData);
        return response.data;
    } catch (error) {
        console.error("테스트 결과 생성 중 오류:", error.response?.data || error.message);
        throw error;
    }
};

// 테스트 결과 삭제
export const deleteTestResult = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("테스트 결과 생성 중 오류:", error.response?.data || error.message);
        throw error;
    }
};

// 테스트 결과 업데이트
export const updateTestResult = async (id, visibility) => {
    try {
        const response = await axios.patch(`${API_URL}/${id}`, { visibility });
        return response.data;
    } catch (error) {
        console.error("Error updating test result:", error.response?.data || error.message);
        throw error;
    }
};