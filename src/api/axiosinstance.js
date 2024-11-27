import axios from "axios";

const API_URL = "https://moneyfulpublicpolicy.co.kr";

// Axios 인스턴스 생성
const axiosInstance = axios.create({
    baseURL: API_URL,
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`; // 헤더에 토큰 추가
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            console.error("인증 실패: 다시 로그인하세요.");
            localStorage.removeItem("token"); // 토큰 제거
            window.location.href = "/login"; // 로그인 페이지로 이동
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;