import { useEffect, useState } from "react";
import styled from "styled-components";
import { getTestResults } from "../../api/testResults";
import TestResultList from '../../components/test/TestResultList';

const TestResult = () => {
  const [testResults, setTestResults] = useState([]);
  const [loading, setLoading] = useState(true); // 로딩 상태 추가

  useEffect(() => {
    const fetchTestResults = async () => {
      try {
        setLoading(true); // 로딩 시작
        const results = await getTestResults(); // 테스트 결과 API 호출
        setTestResults(results);
      } catch (error) {
        console.error("테스트 결과를 가져오는 중 오류가 발생했습니다:", error);
      } finally {
        setLoading(false); // 로딩 끝
      }
    };

    fetchTestResults();
  }, []);

  return (
    <>
      <Container>
        <Title>모든 테스트 결과</Title>
        {loading ? (
          <LoadingMessage>로딩 중...</LoadingMessage> // 로딩 상태 표시
        ) : (
            <TestResultList 
            testResults={testResults}
            setTestResults={setTestResults} />
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: white;
  margin-top: 4rem;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #6c63ff;
`;

const LoadingMessage = styled.p`
  font-size: 1.25rem;
  color: #6b7280;
`;

export default TestResult;