import styled from "styled-components";
import authStore from "../../store/authStore";
import testStore from "../../store/testStore";
import TestResultItem from "./TestResultItem";

const TestResultList = () => {
    const { user } = authStore((state) => ({ user: state.user })); // 현재 사용자 가져오기
    const currentUserId = user?.userId; // 사용자 ID

    // zustand에서 상태와 메서드 가져오기
    const { testResults, updateTestResult } = testStore();

    const handleUpdate = (id, updatedResult) => {
        updateTestResult(id, updatedResult);
    };

    return (
        <Container>
            {testResults
                .filter(
                    (result) => result.visibility || result.userid === currentUserId
                ) // 공개된 결과 + 본인 결과만 표시
                .map((result) => (
                    <TestResultItem
                        key={result.id}
                        result={result}
                        currentUserId={currentUserId}
                        onUpdate={handleUpdate}
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