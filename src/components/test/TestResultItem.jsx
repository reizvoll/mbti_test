import styled from "styled-components";
import testStore from "../../store/testStore";

const TestResultItem = ({ result }) => {
    const { id, userid, username, mbti, description, createdAt, visibility } = result;
    const { toggleVisibility, deleteTestResult } = testStore();

    return (
        <Card>
            <Header>
                <Title>{username}</Title>
                <Timestamp>{new Date(createdAt).toLocaleString()}</Timestamp>
            </Header>
            <MBTI>{mbti}</MBTI>
            <Description>{description}</Description>
            {userid && (
                <ButtonContainer>
                    <ToggleButton
                        onClick={() => toggleVisibility(id, visibility)}
                    >
                        {visibility ? "비공개" : "공개"}
                    </ToggleButton>
                    <DeleteButton onClick={() => deleteTestResult(id)}>삭제</DeleteButton>
                </ButtonContainer>
            )}
        </Card>
    );
};

const Card = styled.div`
  background-color: #1e293b;
  color: white;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
`;

const Timestamp = styled.p`
  font-size: 0.875rem;
  color: #94a3b8;
`;

const MBTI = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fbbf24;
  margin: 8px 0;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #e2e8f0;
  margin-bottom: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const ToggleButton = styled.button`
  background-color: ${(props) => (props.visibility ? "#3b82f6" : "#10b981")};
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) =>
        props.visibility ? "#2563eb" : "#059669"};
  }
`;

const DeleteButton = styled.button`
  background-color: #ef4444;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #dc2626;
  }
`;

export default TestResultItem;