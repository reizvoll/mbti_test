import { Outlet, useNavigate } from "react-router-dom";
import authStore from "../store/authStore";

const MainLayout = () => {
  const nav = useNavigate(); // useNavigate 훅으로 페이지 이동 처리
  const clearUser = authStore((state) => state.clearUser);

  const handleLogout = () => {
    clearUser(); // Zustand 상태 초기화
    localStorage.removeItem("token"); // 로컬 스토리지에서 토큰 제거
    nav("/login"); // React Router로 로그인 페이지로 이동
  };

  return (
    <div>
      {/* 헤더 (NavBar) */}
      <header>
        <nav>
          <button onClick={() => nav("/")}>Home</button>
          <button onClick={() => nav("/profile")}>Profile</button>
          <button onClick={() => nav("/test")}>Test</button>
          <button onClick={handleLogout}>로그아웃</button>
        </nav>
      </header>

      {/* 페이지 내용 */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;