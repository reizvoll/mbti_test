import styled from 'styled-components';

// 일단 살카말카에서 데려온 친구로 대체
const BtnStyle = styled.button`
  width: 100px;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  text-align: center;
  background-color: #7e57c2;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #4b00cc;
  }
`;

const Btn = ({ onClick, children }) => {
  return <BtnStyle onClick={onClick}>{children}</BtnStyle>;
};

export default Btn;