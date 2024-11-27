import styled from "styled-components";
import testStore from "../../store/testStore";
import TestResultItem from './TestResultItem';

const TestResultList = () => {
  const { testResults, toggleVisibility, deleteTestResult } = testStore();

  return (
    <Container>
      {testResults
        .filter((result) => result.visibility) // 공개된 결과만 표시
        .map((result) => (
          <TestResultItem
            key={result.id}
            result={result}
            onToggleVisibility={(id, visibility) => toggleVisibility(id, visibility)}
            onDelete={(id) => deleteTestResult(id)}
          />
        ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px; /* 간격 설정 */
  width: 100%;
  max-width: 768px; /* max-w-3xl */
`;

export default TestResultList;