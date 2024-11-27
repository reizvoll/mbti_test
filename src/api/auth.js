import axiosInstance from "./axiosinstance";

// 회원가입
export const register = async (userData) => {
  try {
    const response = await axiosInstance.post("/register", userData);
    return response.data;
  } catch (error) {
    console.error("회원가입 실패:", error.response?.data || error.message);
    throw error; // 에러를 호출한 곳으로 전달
  }
};

// 로그인
export const login = async (userData) => {
  try {
    console.log("로그인 요청 데이터:", userData); // 요청 데이터 확인
    const response = await axiosInstance.post("/login", userData);

    // 서버에서 반환하는 accessToken 사용
    const { accessToken } = response.data;
    if (!accessToken) {
      console.error("로그인 응답에 accessToken이 없습니다.");
      throw new Error("로그인에 실패했습니다. 다시 시도해주세요.");
    }

    localStorage.setItem("token", accessToken); // accessToken을 로컬 스토리지에 저장
    return response.data;
  } catch (error) {
    console.error("로그인 실패:", error.response?.data || error.message);
    throw error;
  }
};

// 회원정보 확인
export const getUserProfile = async () => {
  try {
    const response = await axiosInstance.get("/user");
    return response.data;
  } catch (error) {
    console.error("회원정보 조회 실패:", error.response?.data || error.message);
    throw error; // 에러를 호출한 곳으로 전달
  }
};

// 프로필 변경
export const updateProfile = async (profileData) => {
  try {
    const response = await axiosInstance.patch("/profile", profileData);
    return response.data;
  } catch (error) {
    console.error("프로필 업데이트 실패:", error.response?.data || error.message);
    throw error; // 에러를 호출한 곳으로 전달
  }
};

// 로그아웃
export const logout = (nav) => {
  localStorage.removeItem("token"); // 로컬 스토리지에서 토큰 제거
  nav("/login"); // React Router로 로그인 페이지로 이동
};