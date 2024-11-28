import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LoginForm from '../../components/LoginForm';
import authStore from '../../store/authStore';

const Login = () => {
  const nav = useNavigate();
  const handleLogin = authStore((state) => state.handleLogin);

  const onLogin = async (formData) => {
    await handleLogin(formData, nav);
  };

  return (
    <Container>
      <Title>로그인</Title>
      <LoginForm onSubmit={onLogin} />
      <LoginToSignUp>
        <p>
          계정이 없으신가요?{' '}
          <SignUpBtn onClick={() => nav('/signup')}>회원가입</SignUpBtn>
        </p>
      </LoginToSignUp>
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

const LoginToSignUp = styled.div`
  margin-top: 40px;
`;

const SignUpBtn = styled.button`
  margin-left: 8px;
  color: #6c63ff;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: #4b00cc;
  }
`;

export default Login;