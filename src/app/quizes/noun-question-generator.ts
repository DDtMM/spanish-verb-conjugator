import { NOUNS, Noun } from '../words/nouns';
import { QuizOption, Question } from './quiz-common';

/**
 * Generates a question asking for the Spanish noun (shows Spanish options).
 * Question format: "What is the Spanish word for [English definition]?"
 */
function generateSpanishNounQuestion(noun: Noun): Question {
  const question = `What is the Spanish word for "${noun.definition}"?`;
  const correctAnswer = noun.word;
  const decoys = NOUNS
    .filter(n => n.word !== noun.word)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
  
  const allOptions = [noun, ...decoys];
  const options = allOptions
    .map(n => ({
      value: n.word,
      response: n.word !== correctAnswer ? `"${n.word}" means "${n.definition}"` : undefined,
    }))
    .sort((a, b) => a.value.localeCompare(b.value));

  return {
    question,
    correctAnswer,
    options,
    wordType: 'noun',
  };
}

/**
 * Generates a question asking for the English definition (shows English options).
 * Question format: "What does [Spanish noun] mean?"
 */
function generateEnglishNounQuestion(noun: Noun): Question {
  const question = `What does "${noun.word}" mean?`;
  const correctAnswer = noun.definition;
  const decoys = NOUNS
    .filter(n => n.definition !== noun.definition)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
  
  const allOptions = [noun, ...decoys];
  const options = allOptions
    .map(n => ({
      value: n.definition,
      response: n.definition !== correctAnswer ? `"${n.word}" means "${n.definition}"` : undefined,
    }))
    .sort((a, b) => a.value.localeCompare(b.value));

  return {
    question,
    correctAnswer,
    options,
    wordType: 'noun',
  };
}

/**
 * Generates a random noun question (either Spanish or English type).
 */
export function generateNounQuestion(noun: Noun): Question {
  const questionType = Math.random() < 0.5 ? 'spanish' : 'english';
  
  if (questionType === 'spanish') {
    return generateSpanishNounQuestion(noun);
  } else {
    return generateEnglishNounQuestion(noun);
  }
}
