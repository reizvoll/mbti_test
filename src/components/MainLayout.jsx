import { Outlet, useNavigate } from "react-router-dom";

const MainLayout = () => {
  const navigate = useNavigate(); // useNavigate 훅으로 페이지 이동 처리

  return (
    <div>
      {/* 헤더 (NavBar) */}
      <header>
        <nav>
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/profile")}>Profile</button>
          <button onClick={() => navigate("/test")}>Test</button>
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