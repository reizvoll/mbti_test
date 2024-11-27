import { create } from 'zustand';
import { questions } from '../data/questions';

const testFormStore = create((set) => ({
  answers: Array(questions.length).fill({ type: '', answer: '' }), // 초기 상태
  setAnswer: (index, answer) =>
    set((state) => {
      const newAnswers = [...state.answers];
      newAnswers[index] = answer;
      return { answers: newAnswers };
    }),

  // 결과 상태
  result: null,
  setResult: (mbtiResult) => set({ result: mbtiResult }),
}));

export default testFormStore;