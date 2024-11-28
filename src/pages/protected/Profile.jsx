import { useState } from "react";
import authStore from "../../store/authStore";
import { toast } from "react-toastify";
import styled from "styled-components";

const Profile = () => {
  const [nickname, setNickname] = useState("");
  const updateProfile = authStore((state) => state.updateProfile);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!nickname.trim()) {
        toast.error("닉네임을 입력해주세요.");
        return;
      }
      await updateProfile({ nickname });
      toast.success("프로필이 성공적으로 업데이트되었습니다!");
    } catch (err) {
      console.error("프로필 업데이트 중 오류:", err);
    }
  };

  return (
    <Container>
      <Title>프로필 수정</Title>
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <Input
            id="nickname"
            name="nickname"
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="변경할 닉네임을 입력하세요"
          />
        </InputWrapper>
        <SubmitButton type="submit">프로필 업데이트</SubmitButton>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* 화면 전체 높이 */
  text-align: center;
  background-color: #f9f9f9;
  padding: 20px; /* 모바일 환경에서 여백 추가 */
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #6c63ff;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
`;

const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  font-size: 16px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
`;

const SubmitButton = styled.button`
  font-size: 16px;
  color: white;
  background-color: #7a5dc7;
  padding: 12px;
  border: none;
  margin-top: 10px;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: #6c4fbf;
  }
`;

export default Profile;