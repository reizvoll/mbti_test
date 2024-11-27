import authStore from "../../store/authStore";

const Home = () => {
  const user = authStore((state) => state.user); // 로그인한 사용자 정보 가져오기
  console.log('userData', user)
  return (
    <div>
      <h1>메인 페이지</h1>
      {user ? (
        <p>안녕하세요, {user.nickname}님!</p>
      ) : (
        <p>로그인이 필요합니다.</p>
      )}
    </div>
  );
};

export default Home