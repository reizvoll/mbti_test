import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SignUpForm from '../../components/SignUpForm';
import authStore from '../../store/authStore';

const SignUp = () => {
  const nav = useNavigate();
  const handleSignup = (formData) => {
    authStore.getState().handleSignup(formData, nav);
  };

  return (
    <Container>
      <Title>회원가입</Title>
      <SignUpForm onSubmit={handleSignup} />
      <SignUpEffects>
        <p>
          이미 계정이 있으신가요?{' '}
          <LoginBtn onClick={() => nav('/login')}>로그인</LoginBtn>
        </p>
      </SignUpEffects>
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
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 40px;
`;

const SignUpEffects = styled.div`
  margin-top: 40px;
`;

const LoginBtn = styled.button`
  margin-left: 8px;
  color: #6c63ff;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: #4b00cc;
  }
`;

export default SignUp;