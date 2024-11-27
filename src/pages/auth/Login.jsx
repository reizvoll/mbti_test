import { useNavigate } from "react-router-dom";
import { login } from "../../api/auth";
import LoginForm from "../../components/LoginForm";
import Btn from "../../components/Btn";
import authStore from "../../store/authStore";

const Login = () => {
  const nav = useNavigate();
  const setUser = authStore((state) => state.setUser);

  const handleLogin = async (formData) => {
    try {
      const { nickname, userId } = await login({
        id: formData.id.trim(),
        password: formData.password,
      });
      console.log(userId, nickname);
      setUser({ userId, nickname });
      alert(`${nickname}님, 환영합니다!`);
      nav("/home");
    } catch (error) {
      console.error("로그인 실패:", error.response?.data || error.message);
      alert(error.response?.data?.message || "로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.");
    }
  };

  return (
    <div>
    <div>
      <h1>로그인</h1>
      <LoginForm onSubmit={handleLogin} />
      <div>
        <p>
          계정이 없으신가요?{" "}
          <Btn onClick={() => nav("/signup")}>회원가입</Btn>
        </p>
      </div>
    </div>
    </div>
  );
};
export default Login;