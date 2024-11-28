import styled from 'styled-components';
import { useState } from 'react';
import testStore from '../../store/testStore';
import { mbtiDescriptions } from '../../utils/mbtiCalculator';

const TestResultList = () => {
  const { testResults, deleteTestResult } = testStore(); // Zustand에서 테스트 결과 가져오기
  const [selectedResult, setSelectedResult] = useState(null); // 선택된 결과 상태 관리

  return (
    <PageContainer>
      <ContentWrapper>
        {!selectedResult ? (
          <>
            <Title>저장된 MBTI 테스트 결과</Title>
            {testResults.length === 0 ? (
              <Message>저장된 테스트 결과가 없습니다.(∩︵∩)... </Message>
            ) : (
              <ResultList>
                {testResults.map((result) => {
                  const { id, answers, timestamp } = result;

                  // `answers`와 `answers.result` 확인
                  if (!answers || !answers.result) {
                    return null; // 유효하지 않은 데이터는 렌더링하지 않음
                  }

                  return (
                    <ResultCard key={id}>
                      <CardHeader>
                        <Nickname>{id || '익명'}</Nickname>
                        <Timestamp>
                          {new Date(timestamp).toLocaleString('ko-KR')}
                        </Timestamp>
                      </CardHeader>
                      <Mbti>{answers.result}</Mbti>
                      <Description>
                        {mbtiDescriptions[answers.result] ||
                          '해당 성격 유형에 대한 설명이 없습니다.'}
                      </Description>
                      <ButtonContainer>
                        <DeleteButton onClick={() => deleteTestResult(id)}>
                          삭제
                        </DeleteButton>
                      </ButtonContainer>
                    </ResultCard>
                  );
                })}
              </ResultList>
            )}
          </>
        ) : (
          <>
            <Title>
              {selectedResult.id || '익명'}의 MBTI 결과, {selectedResult.answers.result}
            </Title>
            <Description>
              {mbtiDescriptions[selectedResult.answers.result] ||
                '해당 성격 유형에 대한 설명이 없습니다.'}
            </Description>
            <BackButton onClick={() => setSelectedResult(null)}>
              결과 목록으로 돌아가기
            </BackButton>
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
  justify-content: flex-start;
  width: 100%;
  min-height: 100vh;
  background-color: #f0f4f8;
  padding-top: 80px;
`;

const ContentWrapper = styled.div`
  background-color: white;
  border-radius: 16px;
  padding: 32px;
  max-width: 768px;
  width: 90%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  color: #6c63ff;
  margin-bottom: 24px;
`;

const Message = styled.p`
  text-align: center;
  font-size: 18px;
  color: #4b5563;
`;

const ResultList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ResultCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eef2f6;
  color: #1f2937;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const Nickname = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const Timestamp = styled.p`
  font-size: 14px;
  color: #6b7280;
`;

const Mbti = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: #fbbf24;
  margin: 8px 0;
`;

const Description = styled.p`
  font-size: 16px;
  color: #4b5563;
  margin-bottom: 16px;
  text-align: justify;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const DeleteButton = styled.button`
  background-color: #f87171;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  border: none;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #dc2626;
  }
`;

const BackButton = styled.button`
  display: block;
  margin: 16px auto 0;
  background-color: #6c63ff;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #4b00cc;
  }
`;

export default TestResultList;