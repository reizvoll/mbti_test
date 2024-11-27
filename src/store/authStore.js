import { create } from "zustand";

const authStore = create((set, get) => ({
  // 사용자 상태 초기화
  user: null, // 현재 사용자 정보 저장
  setUser: (userData) => {
    console.log(userData);
    if (!userData || !userData.userId) {
      console.error("유효하지 않은 사용자 데이터:", userData); // 잘못된 데이터 경고
      return;
    }
    set({ user: userData }); // 사용자 데이터 저장
  },

  // 사용자 로그아웃
  clearUser: () => set({ user: null }),

  // 인증 상태 관리
  isAuthenticated: false, // 기본값: 비인증 상태
  setAuthenticated: (status) => set({ isAuthenticated: status }),

  // 유틸리티 메서드
  getUserId: () => get().user?.userId || null, // userId 가져오기
  getUsername: () => get().user?.username || null, // username 가져오기
  isAdmin: () => get().user?.role === "admin", // admin 여부 확인
}));

export default authStore;