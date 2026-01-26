export interface QuizOption {
  value: string;
  response?: string;
}

export interface Question {
  question: string;
  correctAnswer: string;
  options: QuizOption[];
  wordType: 'noun' | 'verb' | 'adjective';
  userAnswer?: string;
}
