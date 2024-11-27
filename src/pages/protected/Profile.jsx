import { useState } from "react";
import { updateProfile } from "../../api/auth";

const Profile = ({ user, setUser }) => {
  const [nickname, setNickname] = useState(user?.nickname || "");

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("nickname", nickname);

      // 프로필 업데이트 요청
      const updatedProfile = await updateProfile(formData, user.token);

      // 사용자 상태 업데이트
      setUser((prevUser) => ({
        ...prevUser,
        nickname: updatedProfile.nickname,
      }));

      alert("프로필이 성공적으로 업데이트되었습니다!"); // 성공 메시지
    } catch (err) {
      console.error(err);
      alert("프로필 업데이트 중 문제가 발생했습니다."); // 에러 메시지
    }
  };

  return (
    <div>
      <h1>프로필 수정</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nickname">닉네임</label>
          <input
            id="nickname"
            type="text"
            value={nickname}
            onChange={handleNicknameChange}
          />
        </div>
        <button type="submit">프로필 업데이트</button>
      </form>
    </div>
  );
};

export default Profile;