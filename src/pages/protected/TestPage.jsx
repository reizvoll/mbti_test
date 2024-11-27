import { useNavigate} from "react-router-dom";
import testStore from "../../store/testStore";
import TestForm from "../../components/test/TestForm";
import styled from "styled-components";
import { calculateMBTI, mbtiDescriptions } from "../../utils/mbtiCalculator";


const TestPage = () => {
  const nav = useNavigate(); 
  const { testResults, setTestResults, addTestResult } = testStore(); // zustand에서 결과 상태 관리

  const handleTestSubmit = async (answers) => {
    try {
      // MBTI 결과 계산
      const mbtiResult = calculateMBTI(answers);

      // zustand 상태 업데이트
      setTestResults([...testResults, { result: mbtiResult }]);

      // 서버 저장 및 상태 추가
      await addTestResult({ result: mbtiResult });

      console.log("테스트 저장 성공:", mbtiResult);
    } catch (error) {
      console.error("테스트 결과 저장 실패:", error.response?.data || error.message);
      alert("테스트 결과 저장에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const currentResult = testResults[testResults.length - 1]?.result || null;

  return (
    <PageContainer>
      <ContentWrapper>
        {!currentResult ? (
          <>
            <Title>MBTI 테스트</Title>
            <TestForm onSubmit={handleTestSubmit} />
          </>
        ) : (
          <>
            <Title>테스트 결과: {currentResult}</Title>
            <Description>
              {mbtiDescriptions[currentResult] ||
                "해당 성격 유형에 대한 설명이 없습니다."}
            </Description>
            <Button onClick={() => nav("/results")}>
              결과 페이지로 이동하기
            </Button>
          </>
        )}
      </ContentWrapper>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: white;
`;

const ContentWrapper = styled.div`
  background-color: white;
  border-radius: 16px;
  padding: 32px;
  max-width: 600px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #6c63ff; /* Primary color */
  margin-bottom: 24px;
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: #4b5563; /* Gray-700 */
  margin-bottom: 24px;
`;

const Button = styled.button`
  width: 100%;
  background-color: #6c63ff; /* Primary color */
  color: white;
  padding: 12px;
  border-radius: 8px;
  font-weight: 600;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #4b00cc; /* Darker shade of primary color */
    color: #ff5a5f; /* Accent color */
  }
`;

export default TestPage;