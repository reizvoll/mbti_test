import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/LoginForm';
import Btn from '../../components/Btn';
import authStore from '../../store/authStore';

const Login = () => {
  const nav = useNavigate();
  const handleLogin = authStore((state) => state.handleLogin);

  const onLogin = async (formData) => {
    await handleLogin(formData, nav);
  };

  return (
    <div>
      <h1>로그인</h1>
      <LoginForm onSubmit={onLogin} />
      <div>
        <p>
          계정이 없으신가요?{' '}
          <Btn onClick={() => nav('/signup')}>회원가입</Btn>
        </p>
      </div>
    </div>
  );
};

export default Login;