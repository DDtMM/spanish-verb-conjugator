import { VERBS, Verb, ConjugationCategory, Tense, CONJUGATION_CATEGORIES, CONJUGATION_CATEGORIES_SPANISH_LABELS } from '../words/verbs';
import { QuizOption, Question } from './quiz-common.js';

/**
 * Generates a question asking for the Spanish conjugation (shows Spanish options).
 * Question format: "What word means [English translation]?"
 */
function generateSpanishVerbQuestion(
  verb: Verb,
  tense: Tense,
  pronoun: ConjugationCategory
): Question {
  const conjugation = verb[tense][pronoun];
  const conjugatedForm = 'conjugated' in conjugation ? conjugation.conjugated : '';
  const englishTranslation = 'englishTranslation' in conjugation ? conjugation.englishTranslation : '';

  const correctAnswer = conjugatedForm;

  // Get 3 other verbs for decoys
  const otherVerbs = VERBS
    .filter(v => v.infinitive !== verb.infinitive)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  // Create 8 options: 2 from each of 4 verbs (the correct verb + 3 decoys)
  const allVerbs = [verb, ...otherVerbs];
  const tempOptions: { value: string; verb: Verb; pronoun: ConjugationCategory }[] = [];

  for (const v of allVerbs) {
    // Add the same pronoun conjugation
    const conj1 = v[tense][pronoun];
    const form1 = 'conjugated' in conj1 ? conj1.conjugated : '';
    tempOptions.push({ value: form1, verb: v, pronoun });

    // Add a different pronoun conjugation from the same verb
    const otherPronouns = CONJUGATION_CATEGORIES.filter(p => p !== pronoun);
    const randomPronoun = otherPronouns[Math.floor(Math.random() * otherPronouns.length)];
    const conj2 = v[tense][randomPronoun];
    const form2 = 'conjugated' in conj2 ? conj2.conjugated : '';
    tempOptions.push({ value: form2, verb: v, pronoun: randomPronoun });
  }

  const options = tempOptions
    .map(opt => {
      const optConj = opt.verb[tense][opt.pronoun];
      const optEnglish = 'englishTranslation' in optConj ? optConj.englishTranslation : '';
      return {
        value: opt.value,
        response:
          opt.value !== correctAnswer
            ? `"${opt.value}" is the ${getTenseDisplay(tense)} for ${optEnglish}`
            : undefined,
      };
    })
    .sort((a, b) => a.value.localeCompare(b.value));

  const question = `What word means "${englishTranslation}"? (${getTenseDisplay(tense)})`;

  return {
    question,
    correctAnswer,
    options,
    wordType: 'verb',
  };
}

/**
 * Generates a question asking for the English translation (shows English options).
 * Question format: "What does [Spanish conjugation] mean?"
 */
function generateEnglishVerbQuestion(
  verb: Verb,
  tense: Tense,
  pronoun: ConjugationCategory
): Question {
  const conjugation = verb[tense][pronoun];
  const conjugatedForm = 'conjugated' in conjugation ? conjugation.conjugated : '';
  const englishTranslation = 'englishTranslation' in conjugation ? conjugation.englishTranslation : '';

  const correctAnswer = englishTranslation;

  // Get 3 other verbs for decoys
  const otherVerbs = VERBS
    .filter(v => v.infinitive !== verb.infinitive)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  const tempOptions: { value: string; verb: Verb; pronoun: ConjugationCategory }[] = [
    { value: correctAnswer, verb, pronoun },
  ];

  // Create English decoy options using different verbs and/or pronouns
  for (const v of otherVerbs) {
    const randomPronounIndex = Math.floor(Math.random() * CONJUGATION_CATEGORIES.length);
    const randomPronoun = CONJUGATION_CATEGORIES[randomPronounIndex];
    const decoyConj = v[tense][randomPronoun];
    const decoyEnglish = 'englishTranslation' in decoyConj ? decoyConj.englishTranslation : '';
    tempOptions.push({ value: decoyEnglish, verb: v, pronoun: randomPronoun });
  }

  const options = tempOptions
    .map(opt => {
      if (opt.value === correctAnswer) {
        return { value: opt.value, response: undefined };
      }
      const conj = opt.verb[tense][opt.pronoun];
      const form = 'conjugated' in conj ? conj.conjugated : '';
      return {
        value: opt.value,
        response: `"${form}" is the ${getTenseDisplay(tense)} for ${opt.value}`,
      };
    })
    .sort((a, b) => a.value.localeCompare(b.value));

  const question = `What does "${conjugatedForm}" mean? (${getTenseDisplay(tense)})`;

  return {
    question,
    correctAnswer,
    options,
    wordType: 'verb',
  };
}

/**
 * Generates a question asking which pronoun a conjugation belongs to (shows pronoun options).
 * Question format: "Which pronoun is '[Spanish conjugation]'?"
 */
function generatePronounVerbQuestion(
  verb: Verb,
  tense: Tense,
  pronoun: ConjugationCategory
): Question {
  const conjugation = verb[tense][pronoun];
  const conjugatedForm = 'conjugated' in conjugation ? conjugation.conjugated : '';

  const correctAnswer = CONJUGATION_CATEGORIES_SPANISH_LABELS[pronoun];

  // Get all pronouns and shuffle them
  const allPronouns = [...CONJUGATION_CATEGORIES];
  const options = allPronouns
    .map(p => {
      const value = CONJUGATION_CATEGORIES_SPANISH_LABELS[p];
      const conj = verb[tense][p];
      const form = 'conjugated' in conj ? conj.conjugated : '';
      return {
        value,
        response:
          correctAnswer !== value
            ? `"${form}" is the conjugation for ${value}`
            : undefined,
      };
    });

  const question = `Which pronoun is "${conjugatedForm}"? (${getTenseDisplay(tense)} of ${verb.infinitive})`;

  return {
    question,
    correctAnswer,
    options,
    wordType: 'verb',
  };
}

/**
 * Generates a random verb question (either Spanish or English type).
 */
export function generateVerbQuestion(
  verb: Verb,
  tense: Tense,
  pronoun: ConjugationCategory
): Question {
  const randomValue = Math.random();
  
  if (randomValue < 0.33) {
    return generateSpanishVerbQuestion(verb, tense, pronoun);
  } else if (randomValue < 0.66) {
    return generateEnglishVerbQuestion(verb, tense, pronoun);
  } else {
    return generatePronounVerbQuestion(verb, tense, pronoun);
  }
}

function getTenseDisplay(tense: Tense): string {
  const map: Record<Tense, string> = {
    'present': 'present',
    'preterite': 'preterite',
    'imperfect': 'imperfect'
  };
  return map[tense];
}
