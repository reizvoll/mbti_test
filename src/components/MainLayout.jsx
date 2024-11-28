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
    <LayoutContainer>
      <NavBar>
        <NavButton onClick={() => nav('/')}>Home</NavButton>
        {isAuthenticated ? (
          <>
            <NavButton onClick={() => nav('/test')}>Test</NavButton>
            <NavButton onClick={() => nav('/profile')}>Profile</NavButton>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </>
        ) : (
          <NavButton onClick={() => nav('/login')}>Login</NavButton>
        )}
      </NavBar>
      <Content>
        <Outlet />
      </Content>
    </LayoutContainer>
  );
};

// 전체 레이아웃 컨테이너
const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 네비게이션 바
const NavBar = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 12px;
  background-color: rgba(107, 99, 255, 0.5);
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;


  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
    height: auto;
  }
`;

// 콘텐츠 영역
const Content = styled.div`
  margin-top: 70px;
  width: 100%;
  padding: 20px;

  @media (max-width: 768px) {
    margin-top: 90px; /* 작은 화면에서 NavBar 높이를 고려 */
  }
`;

// 네비게이션 버튼 스타일
const NavButton = styled.button`
  background-color: rgba(107, 99, 255, 0.3);
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #4b00cc;
    color: #ffffff;
  }

  @media (max-width: 768px) {
    width: 90%;
    font-size: 14px;
  }
`;

// 로그아웃 버튼 스타일
const LogoutButton = styled(NavButton)`
  background-color: #ff5a5f;

  &:hover {
    background-color: #e63946;
  }
`;

export default MainLayout;