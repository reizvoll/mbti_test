import styled from "styled-components";
import { questions } from "../../data/questions";
import testFormStore from "../../store/testFormStore";


const TestForm = ({ onSubmit }) => {
  const { answers, setAnswer } = testFormStore();

  const handleChange = (index, value) => {
    setAnswer(index, { type: questions[index].type, answer: value });
  };

  //질문 답변 체킹
  const handleSubmit = (e) => {
    e.preventDefault();
    if (answers.some((answer) => !answer.answer)) {
      alert("모든 질문에 답변해주세요!");
      return;
    }
    onSubmit(answers);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {questions.map((q, index) => (
        <QuestionWrapper key={q.id}>
          <QuestionText>{q.question}</QuestionText>
          <div>
            {q.options.map((option, i) => (
              <OptionWrapper
                key={i}
                isSelected={answers[index]?.answer === q.type.split("/")[i]}
              >
                <RadioInput
                  type="radio"
                  name={`question-${index}`}
                  value={q.type.split("/")[i]}
                  checked={answers[index]?.answer === q.type.split("/")[i]}
                  onChange={() => handleChange(index, q.type.split("/")[i])}
                />
                {option}
              </OptionWrapper>
            ))}
          </div>
        </QuestionWrapper>
      ))}
      <SubmitButton type="submit" >제출하기</SubmitButton>
    </Form>
  );
};

const Form = styled.form`
  padding: 24px;
  background-color: white;
  border-radius: 16px;
`;

const QuestionWrapper = styled.div`
  margin-bottom: 24px;
`;

const QuestionText = styled.p`
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: 12px;
`;

const OptionWrapper = styled.label`
  display: block;
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-color: ${(props) => (props.isSelected ? "#f3f4f6" : "white")};
  &:hover {
    background-color: #f3f4f6;
  }
`;

const RadioInput = styled.input`
  margin-right: 8px;
  accent-color: #6c63ff;
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: #6c63ff;
  color: white;
  padding: 12px;
  border-radius: 8px;
  font-weight: 600;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #4b00cc;
    color: #ff5a5f;
  }
`;

export default TestForm;