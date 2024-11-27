import { useState } from 'react';
import styled from 'styled-components';

const SignUpForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    id: '',
    password: '',
    nickname: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
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
          onChange={handleChange}
          placeholder="아이디"
        />
        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="비밀번호"
        />
        <Input
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
          placeholder="닉네임"
        />
        <SubmitButton type="submit">회원가입</SubmitButton>
      </Form>
    </Container>
  );
};

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