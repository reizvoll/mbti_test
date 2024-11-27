import axios from "axios";

const API_URL = "https://moneyfulpublicpolicy.co.kr";

// 회원가입
export const register = async (userData) => {
  try {

   //formData로 보내면 인식 몬한다!!!! 안된다!!

    const newUser = {
      id:userData.id,
      password: userData.password,
      nickname: userData.nickname
    } 

    if (userData.profileImage) {
      newUser.append("profileImage", userData.profileImage); // 프로필 이미지 추가
    }

    const response = await axios.post(`${API_URL}/register`, newUser, {
    });
    return response.data;
  } catch (error) {
    console.error("회원가입 요청 실패:", error.response?.data || error.message);
    throw error;
  }
};

// 로그인
export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};

// 회원정보 확인
export const getUserProfile = async (token) => {
  const response = await axios.get(`${API_URL}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// 프로필 변경
export const updateProfile = async (formData, token) => {
  const response = await axios.patch(`${API_URL}/profile`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};