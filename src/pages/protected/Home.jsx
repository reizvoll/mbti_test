import styled from 'styled-components';
import authStore from '../../store/authStore';

const Home = () => {
  const user = authStore((state) => state.user); // 로그인한 사용자 정보 가져오기

  return (
    <Container>
      <Title>MBTI 테스트</Title>
      {user ? (
        <WelcomeMessage>안녕하세요, {user.nickname}님! <br></br>
        MBTI 테스트에 오신 것을 환영합니당( ˶ˆ ᗜ ˆ˵ )</WelcomeMessage>

      ) : (
        <LoadingMessage>사용자 정보를 불러오는 중...</LoadingMessage>
      )}
    <Logo src="/mbti-logo.png" alt="MBTI Logo" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* 화면 전체 높이 */
  background-color: #f9f9f9;
  text-align: center;
  padding: 20px; /* 모바일 환경에서 여백 추가 */
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const WelcomeMessage = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #555;
`;

const Logo = styled.img`
  width: 300px;
  height: 300px;
  margin: 20px auto;
`;

const LoadingMessage = styled.p`
  font-size: 18px;
  color: #888;
`;

export default Home;