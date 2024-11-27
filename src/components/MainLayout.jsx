import { Outlet, useNavigate } from 'react-router-dom';
import authStore from '../store/authStore';
import styled from 'styled-components';

const MainLayout = () => {
  const nav = useNavigate();
  const clearUser = authStore((state) => state.clearUser);
  const isAuthenticated = authStore((state) => state.isAuthenticated);

  const handleLogout = () => {
    clearUser(); // 상태 초기화
    localStorage.removeItem("token"); // 토큰 제거
    nav("/login"); // 로그인 페이지로 이동
  };

  return (
    <div>
      <NavBar>
      <NavButton onClick={() => nav('/')}>Home</NavButton>
          {isAuthenticated && (
          <>
            <NavButton onClick={() => nav('/profile')}>Profile</NavButton>
            <NavButton onClick={() => nav('/test')}>Test</NavButton>
            <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
          </>
        )}
        {!isAuthenticated && (
          <NavButton onClick={() => nav('/login')}>로그인</NavButton>
        )}
      </NavBar>
      <Outlet />
    </div>
  );
};

const NavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 12px;
  background-color: #6c63ff;
`;

const NavButton = styled.button`
  background-color: white;
  color: #6c63ff;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #4b00cc;
    color: white;
  }
`;

const LogoutButton = styled(NavButton)`
  background-color: #ff5a5f;

  &:hover {
    background-color: #e63946;
  }
`;

export default MainLayout;