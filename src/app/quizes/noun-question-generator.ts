import { NOUNS, Noun } from '../words/nouns';
import { QuizOption, Question } from './quiz-common';

/**
 * Finds decoy nouns for quiz questions, prioritizing those with matching tags.
 * @param count Number of decoys to return
 * @param sourceList The list of nouns to select decoys from
 * @param tags Optional tags to match for more relevant decoys
 * @param filterPredicate Optional function to filter candidates
 * @returns An array of decoy nouns
 */
function findDecoys(count: number, sourceList: Noun[], tags?: string[], filterPredicate?: (n: Noun) => boolean): Noun[] {
  // Filter candidates using the predicate if provided
  const candidateDecoys = filterPredicate ? sourceList.filter(filterPredicate) : sourceList;
  const result: Noun[] = [];
  
  // If tags are provided, try to find decoys with matching tags
  if (tags && tags.length > 0) {
    const matchingTagDecoys = candidateDecoys
      .filter(n => n.tags && n.tags.some(tag => tags.includes(tag)))
      .sort(() => Math.random() - 0.5);
    
    // Add as many matching tag decoys as we can (up to count)
    result.push(...matchingTagDecoys.slice(0, count));
  }
  
  // Fill remaining slots with random decoys
  if (result.length < count) {
    const remainingCount = count - result.length;
    const usedWords = new Set(result.map(n => n.word));
    const remainingDecoys = candidateDecoys
      .filter(n => !usedWords.has(n.word))
      .sort(() => Math.random() - 0.5)
      .slice(0, remainingCount);
    
    result.push(...remainingDecoys);
  }
  
  return result;
}

/**
 * Generates a question asking for the Spanish noun (shows Spanish options).
 * Question format: "What is the Spanish word for [English definition]?"
 */
function generateSpanishNounQuestion(noun: Noun): Question {
  const question = `What is the Spanish word for "${noun.definition}"?`;
  const correctAnswer = noun.word;
  
  const decoys = findDecoys(3, NOUNS, noun.tags, n => n.word !== noun.word);
  
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
  
  const decoys = findDecoys(3, NOUNS, noun.tags, n => n.definition !== noun.definition);
  
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
