import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getTestResults } from '../../api/testResults';
import TestResultList from '../../components/test/TestResultList';

const TestResult = () => {
  const [testResults, setTestResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestResults = async () => {
      try {
        setLoading(true);
        const results = await getTestResults();
        setTestResults(results);
      } catch (error) {
        console.error('테스트 결과를 가져오는 중 오류:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestResults();
  }, []);

  return (
    <Container>
      <Title>모든 테스트 결과</Title>
      {loading ? (
        <LoadingMessage>로딩 중...</LoadingMessage>
      ) : (
        <TestResultList testResults={testResults} setTestResults={setTestResults} />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: white;
  margin-top: 40px;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #6c63ff;
`;

const LoadingMessage = styled.p`
  font-size: 18px;
  color: #6b7280;
`;

export default TestResult;