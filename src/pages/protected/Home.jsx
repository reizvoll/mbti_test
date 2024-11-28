import authStore from '../../store/authStore';

const Home = () => {
  const user = authStore((state) => state.user); // 로그인한 사용자 정보 가져오기
  const isAuthenticated = authStore((state) => state.isAuthenticated); // 인증 상태 확인

  if (!isAuthenticated) {
    return <p>로그인이 필요합니다.</p>; // 인증되지 않은 사용자에게 안내 메시지 표시
  }

  return (
    <div>
      <h1>메인 페이지</h1>
      {user ? (
        <p>안녕하세요, {user.nickname}님!</p>
      ) : (
        <p>사용자 정보를 불러오는 중...</p>
      )}
    </div>
  );
};

export default Home;