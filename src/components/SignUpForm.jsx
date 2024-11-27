import { useState } from "react";
import styled from "styled-components";

const SignUpForm = ({ onSubmit }) => {
  // 폼 상태 관리
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    nickname: "",
  });

  // 입력 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value, // name 속성을 기반으로 상태 업데이트
    }));
  };

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 동작 방지
    if (onSubmit) {
      onSubmit(formData); // 부모 컴포넌트에서 전달된 onSubmit 호출
    }
  };

  return (
    <Container>
      <Title>회원가입</Title>
      <Subtitle>정보를 입력해주세요.</Subtitle>

      <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="id"
        value={formData.id}
        onChange={handleChange} // 입력 변경 핸들러 연결
        placeholder="아이디"
      />
      <Input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange} // 입력 변경 핸들러 연결
        placeholder="비밀번호"
      />
      <Input
        type="text"
        name="nickname"
        value={formData.nickname}
        onChange={handleChange} // 입력 변경 핸들러 연결
        placeholder="닉네임"
      />
      <SubmitButton type="submit">회원가입</SubmitButton>
    </Form>
    </Container>
  );
};

// 스타일 정의
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
`;

const Input = styled.input`
  font-size: 16px;
  padding: 12px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const SubmitButton = styled.button`
  font-size: 16px;
  color: #fff;
  background-color: #7a5dc7;
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #6c4fbf;
  }
`;

export default SignUpForm;