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
        {isAuthenticated && (
          <>
            <NavButton onClick={() => nav('/test')}>Test</NavButton>
            <ProfileBtn onClick={() => nav('/profile')}>Profile</ProfileBtn>
            <LogoutBtn onClick={handleLogout}>LogOut</LogoutBtn>
          </>
        )}
        {!isAuthenticated && (
          <NavButton onClick={() => nav('/login')}>로그인</NavButton>
        )}
      </NavBar>
      {/* 콘텐츠가 NavBar 아래로 내려가도록 조정 */}
      <Content>
        <Outlet />
      </Content>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavBar = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 80px;
  padding: 17px;
  background-color: rgba(107, 99, 255, 0.5);
  width: 100%;
  height: 65px;
  position: fixed;
  left: 0;
  z-index: 10;

  @media (max-width: 768px) {
    flex-direction: column; /* 작은 화면에서는 버튼을 수직 정렬 */
    gap: 1px; /* 간격 축소 */
  }
`;

const Content = styled.div`
  margin-top: 65px;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 100px; /* 작은 화면에서 NavBar 높이를 고려 */
  }
`;

const NavButton = styled.button`
  background-color: rgba(107, 99, 255, 0.3);
  color: #222;
  font-size: 16px;
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  margin: 0 8px;
  cursor: pointer;

  &:hover {
    background-color: #4b00cc;
  }
`;

const ProfileBtn = styled(NavButton)`
  color: #222;

  &:hover {
    color: #000;
  }
`;

const LogoutBtn = styled.button`
  font-size: 16px;
  padding: 8px 16px;
  margin: 0 8px;
  color: #ff5a5f;

  &:hover {
    color: #e63946;
  }
`;

export default MainLayout;