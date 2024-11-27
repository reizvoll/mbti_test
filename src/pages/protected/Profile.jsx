import authStore from "../../store/authStore";

const Profile = () => {
  const user = authStore((state) => state.user);
  const updateProfile = authStore((state) => state.updateProfile);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedNickname = e.target.nickname.value.trim();
      if (!updatedNickname) {
        alert("닉네임을 입력해주세요.");
        return;
      }
      await updateProfile({ nickname: updatedNickname });
      alert("프로필이 성공적으로 업데이트되었습니다!");
    } catch (err) {
      console.error("프로필 업데이트 중 오류:", err);
      alert("프로필 업데이트 중 문제가 발생했습니다. 다시 시도해주세요.");
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
            defaultValue={user?.nickname || ""}
          />
        </div>
        <button type="submit">프로필 업데이트</button>
      </form>
    </div>
  );
};

export default Profile;