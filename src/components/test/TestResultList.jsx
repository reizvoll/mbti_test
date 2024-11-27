import styled from 'styled-components';
import testStore from '../../store/testStore';
import TestResultItem from './TestResultItem';

const TestResultList = () => {
  const { testResults, toggleVisibility, deleteTestResult } = testStore();

  return (
    <Container>
      {testResults
        .filter((result) => result.visibility)
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
  gap: 24px;
  width: 100%;
  max-width: 768px;
`;

export default TestResultList;