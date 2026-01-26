import { ADJECTIVES, Adjective } from '../words/adjectives';
import { QuizOption, Question } from './quiz-common';

export function generateAdjectiveQuestion(adjective: Adjective): Question {
  // Randomly choose which form to ask about
  const forms = [
    { label: 'masculine singular', value: adjective.masculineSingular },
    { label: 'feminine singular', value: adjective.feminineSingular },
    { label: 'masculine plural', value: adjective.masculinePlural },
    { label: 'feminine plural', value: adjective.femininePlural }
  ];
  const selectedForm = forms[Math.floor(Math.random() * forms.length)];
  const correctAnswer = selectedForm.value;

  const decoys = ADJECTIVES
    .filter(a => a.word !== adjective.word)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  const allOptions = [adjective, ...decoys];
  const options: QuizOption[] = allOptions.map(a => {
    const randomForm = forms[Math.floor(Math.random() * forms.length)];
    const value = randomForm.label === 'masculine singular' ? a.masculineSingular :
           randomForm.label === 'feminine singular' ? a.feminineSingular :
           randomForm.label === 'masculine plural' ? a.masculinePlural :
           a.femininePlural;
    
    return {
      value,
      response: value !== correctAnswer ? `"${value}" is the ${randomForm.label} form of "${a.definition}"` : undefined
    };
  }).sort((a, b) => a.value.localeCompare(b.value));

  return {
    question: `What is the ${selectedForm.label} form of "${adjective.definition}"?`,
    correctAnswer,
    options,
    wordType: 'adjective'
  };
}
