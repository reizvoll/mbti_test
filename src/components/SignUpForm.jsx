import { useState } from "react";
import styled from "styled-components";

const SignUpForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    confirmPassword: "",
    nickname: "",
    profileImage: null, // 프로필 이미지 파일
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      profileImage: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }
    onSubmit(formData); // 부모 컴포넌트로 데이터 전달
  };

  return (
    <Container>
      <Title>회원가입</Title>
      <Subtitle>정보를 입력해주세요.</Subtitle>

      <ProfileImageContainer>
        <ProfileImageLabel htmlFor="profileImage">프로필 이미지</ProfileImageLabel>
        <ProfileImageInput
          type="file"
          id="profileImage"
          accept="image/*"
          onChange={handleImageChange}
        />
        {formData.profileImage && (
          <PreviewImage
            src={URL.createObjectURL(formData.profileImage)}
            alt="프로필 미리보기"
          />
        )}
      </ProfileImageContainer>

      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          placeholder="아이디 (영문만 입력)"
          required
        />
        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="비밀번호"
          required
        />
        <Input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="비밀번호 확인"
          required
        />
        <Input
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
          placeholder="닉네임"
          required
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

const ProfileImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfileImageLabel = styled.label`
  font-size: 14px;
  color: #777;
  margin-bottom: 8px;
  cursor: pointer;
`;

const ProfileImageInput = styled.input`
  display: none;
`;

const PreviewImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 10px;
  border: 2px solid #ccc;
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