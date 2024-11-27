import { create } from "zustand";
import { register, login, updateProfile as apiUpdateProfile } from "../api/auth";

const authStore = create((set, get) => ({
  user: null, // 사용자 상태
  accessToken: localStorage.getItem("token") || null, // 초기화 시 로컬 스토리지에서 accessToken 복구

  // 사용자 상태 설정
  setUser: (userData) => set({ user: userData }),

  // 토큰 상태 설정
  setToken: (token) => {
    localStorage.setItem("token", token); // 로컬 스토리지에 저장
    set({ accessToken: token }); // Zustand 상태에 저장
  },

  // 사용자 로그아웃
  clearUser: () => {
    set({ user: null, isAuthenticated: false, token: null });
    localStorage.removeItem("token"); // 로컬 스토리지에서 토큰 제거
  },

  // 인증 상태 관리
  isAuthenticated: false, // 기본값: 비인증 상태
  setAuthenticated: (status) => set({ isAuthenticated: status }),

  // 유틸리티 메서드
  getUserId: () => get().user?.userId || null, // 상태에서 userId 가져오기
  getUsername: () => get().user?.username || null, // 상태에서 username 가져오기

  // 회원가입 요청 처리 (로직 및 에러 처리 모두 포함)
  handleSignup: async (formData, nav) => {
    try {
      // 회원가입 API 호출
      await register(formData);
      alert("회원가입 성공! 로그인 해주세요.");
      nav("/login"); // 성공 시 로그인 페이지로 이동
    } catch (error) {
      console.error("회원가입 실패:", error.response?.data || error.message);
      alert(
        error.response?.data?.message ||
          "회원가입 중 오류가 발생했습니다. 다시 시도해주세요."
      );
    }
  },

  // 로그인 처리
  handleLogin: async (formData, nav) => {
    try {
      const { nickname, userId, accessToken } = await login({
        id: formData.id.trim(),
        password: formData.password,
      });

      set({ user: { userId, nickname } });
      get().setToken(accessToken); // accessToken 저장
      alert(`${nickname}님, 환영합니다!`);
      nav("/home");
    } catch (error) {
      console.error("로그인 실패:", error.response?.data || error.message);
      alert(
        error.response?.data?.message ||
          "로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요."
      );
    }
  },

  // 프로필 업데이트
  updateProfile: async (profileData) => {
    try {
      const accessToken = get().accessToken;
      if (!accessToken) {
        console.error("accessToken이 존재하지 않습니다.");
        throw new Error("사용자 인증이 필요합니다.");
      }

      const updatedProfile = await apiUpdateProfile(profileData, accessToken);

      set((state) => ({
        user: { ...state.user, nickname: updatedProfile.nickname },
      }));
    } catch (error) {
      console.error("프로필 업데이트 중 오류:", error.response?.data || error.message);
      throw error;
    }
  },
}));

export default authStore;