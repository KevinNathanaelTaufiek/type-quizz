import { shuffleArray } from "./utils";

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export interface Question {
  correct_answer: string;
  incorrect_answers: string[];
  question: string;
  difficulty: string;
  type: string;
  category: string;
}

export interface QuestionState extends Question {
  answers: string[];
}

export const fetchQuizzQuestion = async (
  amount: number,
  difficulty: Difficulty
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&type=multiple&difficulty=${difficulty}`;

  const res = await fetch(endpoint);
  const data = await res.json();

  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
