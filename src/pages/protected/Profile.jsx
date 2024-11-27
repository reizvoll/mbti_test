import { useState } from "react";
import authStore from "../../store/authStore";
import { toast } from "react-toastify";

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
    <div>
      <h1>프로필 수정</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nickname">닉네임</label>
          <input
            id="nickname"
            name="nickname"
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
        <button type="submit">프로필 업데이트</button>
      </form>
    </div>
  );
};

export default Profile;