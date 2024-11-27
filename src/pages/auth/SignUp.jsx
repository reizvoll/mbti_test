import { useNavigate } from "react-router-dom";
import { register } from "../../api/auth";
import Btn from "../../components/Btn";
import SignUpForm from "../../components/SignUpForm";

const SignUp = () => {
  const nav = useNavigate();

  const handleSignup = async (formData) => {
    try {
      // 회원가입 요청
      await register({
        id: formData.id, // id를 단순 문자열로 전송
        password: formData.password,
        nickname: formData.nickname,
        profileImage: formData.profileImage,
      });

      alert("회원가입 성공! 로그인 해주세요.");
      nav("/login");
    } catch (error) {
      console.error("회원가입 실패:", error.response?.data || error.message);
      alert(error.response?.data?.message || "회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div>
      <div>
        <h1>회원가입</h1>
        <SignUpForm mode="signup" onSubmit={handleSignup} />
        <div>
          <p>
            이미 계정이 있으신가요?{" "}
            <Btn onClick={() => nav("/login")}>
              로그인
            </Btn>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;