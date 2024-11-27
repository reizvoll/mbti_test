import { useNavigate } from 'react-router-dom';
import Btn from '../../components/Btn';
import SignUpForm from '../../components/SignUpForm';
import authStore from '../../store/authStore';

const SignUp = () => {
  const nav = useNavigate();
  const handleSignup = (formData) => {
    authStore.getState().handleSignup(formData, nav);
  };

  return (
    <div>
      <h1>회원가입</h1>
      <SignUpForm onSubmit={handleSignup} />
      <div>
        <p>
          이미 계정이 있으신가요? <Btn onClick={() => nav('/login')}>로그인</Btn>
        </p>
      </div>
    </div>
  );
};

export default SignUp;