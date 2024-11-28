import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Btn from '../components/Btn';

const Intro = () => {
  const nav = useNavigate();

  return (
    <Container>
      <Logo src="/mbti-logo.png" alt="MBTI Logo" />
      <Title>MBTI 테스트</Title>
      <Description>테스트를 통해 성격 유형을 확인해 보아요! ^-^)b</Description>
      <Btn onClick={() => nav('/login')}>로그인하기</Btn>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f9f9f9;
`;

const Logo = styled.img`
  width: 300px;
  height: 300px;
  margin-bottom: 20px;
  transform: translateY(-20px);
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 24px;
  color: #555;
`;

export default Intro;