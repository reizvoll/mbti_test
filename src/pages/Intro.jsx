import { useNavigate } from 'react-router-dom';
import Btn from '../components/Btn';

const Intro = () => {
  const nav = useNavigate();
  return (
    <div>
      <h1>MBTI 테스트</h1>
      <p>테스트를 통해 성격 유형을 확인해 보아요! ^-^)b</p>
      <Btn onClick={() => nav('/login')}>로그인하기</Btn>
    </div>
  );
};

export default Intro;