import { Component, computed, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NOUNS, Noun } from '../nouns';
import { VERBS, Verb, ConjugationCategory, Tense, CONJUGATION_CATEGORIES } from '../verbs';
import { ADJECTIVES, Adjective } from '../adjectives';

interface QuizOption {
  value: string;
  response?: string;
}

interface Question {
  id: number;
  question: string;
  correctAnswer: string;
  options: QuizOption[];
  wordType: 'noun' | 'verb' | 'adjective';
  userAnswer?: string;
}

@Component({
  selector: 'app-quiz',
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  words = signal<string[]>([]);
  tenses = signal<Tense[]>([]);
  numberOfQuestions = signal(20);
  
  questions = signal<Question[]>([]);
  currentQuestionIndex = signal(0);
  showingResult = signal(false);
  quizComplete = signal(false);
  retryMode = signal(false);
  incorrectQuestions = signal<Question[]>([]);
  
  currentQuestion = computed(() => this.questions()[this.currentQuestionIndex()]);
  totalQuestions = computed(() => this.questions().length);
  score = computed(() => {
    const qs = this.questions();
    return qs.filter(q => q.userAnswer === q.correctAnswer).length;
  });

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      const wordList = params['words'] ? params['words'].split(',') : [];
      const tenseParam = params['tense'];
      const tenseList = tenseParam ? tenseParam.split(',').filter((t: string) => ['present', 'preterite', 'imperfect'].includes(t)) as Tense[] : [];
      const numQuestions = params['numberOfQuestions'] ? parseInt(params['numberOfQuestions'], 10) : 20;
      
      if (wordList.length === 0) {
        this.router.navigate(['/']);
        return;
      }
      
      this.words.set(wordList);
      this.tenses.set(tenseList);
      this.numberOfQuestions.set(numQuestions);
      this.generateQuestions();
    });
  }

  generateQuestions(): void {
    const wordList = this.words();
    const tensesList = this.tenses();
    const maxQuestions = this.numberOfQuestions();
    const questions: Question[] = [];
    let questionId = 0;

    // Loop until we have enough questions, reusing words if necessary
    while (questions.length < maxQuestions) {
      for (const word of wordList) {
        if (questions.length >= maxQuestions) break;
        
        // Check if it's a noun
        const noun = NOUNS.find(n => n.word === word);
        if (noun) {
          questions.push(this.generateNounQuestion(noun, questionId++));
          continue;
        }

        // Check if it's a verb
        const verb = VERBS.find(v => v.infinitive === word);
        if (verb) {
          // Select random tense from specified list or all tenses
          const tense = tensesList.length > 0 ? this.getRandomTenseFromList(tensesList) : this.getRandomTense();
          const pronouns: ConjugationCategory[] = ['yo', 'tu', 'elEllaUsted', 'nosotros', 'vosotros', 'ellosEllasUstedes'];
          const selectedPronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
          questions.push(this.generateVerbQuestion(verb, tense, selectedPronoun, questionId++));
          continue;
        }

        // Check if it's an adjective
        const adjective = ADJECTIVES.find(a => a.word === word);
        if (adjective) {
          questions.push(this.generateAdjectiveQuestion(adjective, questionId++));
          continue;
        }
      }
      
      // Prevent infinite loop if no valid words found
      if (questions.length === 0) break;
    }

    // Shuffle questions
    this.questions.set(this.shuffleArray(questions));
  }

  getRandomTenseFromList(tenses: Tense[]): Tense {
    return tenses[Math.floor(Math.random() * tenses.length)];
  }

  getRandomTense(): Tense {
    const tenses: Tense[] = ['present', 'preterite', 'imperfect'];
    return tenses[Math.floor(Math.random() * tenses.length)];
  }

  generateNounQuestion(noun: Noun, id: number): Question {
    // Randomly choose question type
    const questionType = Math.random() < 0.5 ? 'spanish' : 'english';
    
    let question: string;
    let correctAnswer: string;
    let options: QuizOption[];

    if (questionType === 'spanish') {
      // Ask for Spanish word, show Spanish options
      question = `What is the Spanish word for "${noun.definition}"?`;
      correctAnswer = noun.word;
      const decoys = NOUNS
        .filter(n => n.word !== noun.word)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
      
      const allOptions = [noun, ...decoys];
      options = allOptions.map(n => ({
        value: n.word,
        response: n.word !== correctAnswer ? `"${n.word}" means "${n.definition}"` : undefined
      })).sort((a, b) => a.value.localeCompare(b.value));
    } else {
      // Ask what Spanish word means, show English options
      question = `What does "${noun.word}" mean?`;
      correctAnswer = noun.definition;
      const decoys = NOUNS
        .filter(n => n.definition !== noun.definition)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
      
      const allOptions = [noun, ...decoys];
      options = allOptions.map(n => ({
        value: n.definition,
        response: n.definition !== correctAnswer ? `"${n.word}" means "${n.definition}"` : undefined
      })).sort((a, b) => a.value.localeCompare(b.value));
    }

    return {
      id,
      question,
      correctAnswer,
      options,
      wordType: 'noun'
    };
  }

  generateAdjectiveQuestion(adjective: Adjective, id: number): Question {
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
      id,
      question: `What is the ${selectedForm.label} form of "${adjective.definition}"?`,
      correctAnswer,
      options,
      wordType: 'adjective'
    };
  }

  generateVerbQuestion(verb: Verb, tense: Tense, pronoun: ConjugationCategory, id: number): Question {
    const conjugation = verb[tense][pronoun];
    const conjugatedForm = 'conjugated' in conjugation ? conjugation.conjugated : '';
    const englishTranslation = 'englishTranslation' in conjugation ? conjugation.englishTranslation : '';
    
    const pronounDisplay = this.getPronounDisplay(pronoun);
    
    // Randomly choose question type
    const questionType = Math.random() < 0.5 ? 'spanish' : 'english';
    
    let question: string;
    let correctAnswer: string;
    let options: QuizOption[];

    if (questionType === 'spanish') {
      // Ask for Spanish conjugation, show Spanish options
      correctAnswer = conjugatedForm;

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

      options = tempOptions.map(opt => {
        const optConj = opt.verb[tense][opt.pronoun];
        const optEnglish = 'englishTranslation' in optConj ? optConj.englishTranslation : '';
        return {
          value: opt.value,
          response: opt.value !== correctAnswer 
            ? `"${opt.value}" is the ${this.getTenseDisplay(tense)} for ${optEnglish}` 
            : undefined
        };
      }).sort((a, b) => a.value.localeCompare(b.value));

      question = `What word means "${englishTranslation}"? (${this.getTenseDisplay(tense)})`;
    } else {
      // Ask what Spanish conjugation means, show English options
      correctAnswer = englishTranslation;

      // Get 3 other verbs for decoys
      const otherVerbs = VERBS
        .filter(v => v.infinitive !== verb.infinitive)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

      const tempOptions: { value: string; verb: Verb; pronoun: ConjugationCategory }[] = [
        { value: correctAnswer, verb, pronoun }
      ];

      // Create English decoy options using different verbs and/or pronouns
      for (const v of otherVerbs) {
        const randomPronounIndex = Math.floor(Math.random() * CONJUGATION_CATEGORIES.length);
        const randomPronoun = CONJUGATION_CATEGORIES[randomPronounIndex];
        const decoyConj = v[tense][randomPronoun];
        const decoyEnglish = 'englishTranslation' in decoyConj ? decoyConj.englishTranslation : '';
        tempOptions.push({ value: decoyEnglish, verb: v, pronoun: randomPronoun });
      }

      options = tempOptions.map(opt => {
        if (opt.value === correctAnswer) {
          return { value: opt.value, response: undefined };
        }
        const conj = opt.verb[tense][opt.pronoun];
        const form = 'conjugated' in conj ? conj.conjugated : '';
        return {
          value: opt.value,
          response: `"${form}" is the ${this.getTenseDisplay(tense)} for ${opt.value}`
        };
      }).sort((a, b) => a.value.localeCompare(b.value));

      question = `What does "${conjugatedForm}" mean? (${this.getTenseDisplay(tense)})`;
    }

    return {
      id,
      question,
      correctAnswer,
      options,
      wordType: 'verb'
    };
  }

  getPronounDisplay(pronoun: ConjugationCategory): string {
    const map: Record<ConjugationCategory, string> = {
      'yo': 'I',
      'tu': 'you',
      'elEllaUsted': 'he/she/you (formal)',
      'nosotros': 'we',
      'vosotros': 'you all',
      'ellosEllasUstedes': 'they/you all (formal)'
    };
    return map[pronoun];
  }

  getTenseDisplay(tense: Tense): string {
    const map: Record<Tense, string> = {
      'present': 'present',
      'preterite': 'preterite',
      'imperfect': 'imperfect'
    };
    return map[tense];
  }

  shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  selectAnswer(option: QuizOption): void {
    if (this.showingResult()) return;

    const questions = [...this.questions()];
    questions[this.currentQuestionIndex()].userAnswer = option.value;
    this.questions.set(questions);
    this.showingResult.set(true);
  }

  nextQuestion(): void {
    const current = this.currentQuestionIndex();
    const total = this.totalQuestions();

    if (current < total - 1) {
      this.currentQuestionIndex.set(current + 1);
      this.showingResult.set(false);
    } else {
      this.finishQuiz();
    }
  }

  finishQuiz(): void {
    const incorrect = this.questions().filter(q => q.userAnswer !== q.correctAnswer);
    
    if (!this.retryMode() && incorrect.length > 0) {
      // First time finishing - prepare retry
      this.incorrectQuestions.set(incorrect);
      this.quizComplete.set(true);
    } else {
      // Either no incorrect answers or already retried
      this.quizComplete.set(true);
    }
  }

  retryIncorrect(): void {
    const incorrect = this.incorrectQuestions();
    // Reset user answers
    const resetQuestions = incorrect.map(q => ({ ...q, userAnswer: undefined }));
    this.questions.set(this.shuffleArray(resetQuestions));
    this.currentQuestionIndex.set(0);
    this.showingResult.set(false);
    this.quizComplete.set(false);
    this.retryMode.set(true);
  }

  restartQuiz(): void {
    this.currentQuestionIndex.set(0);
    this.showingResult.set(false);
    this.quizComplete.set(false);
    this.retryMode.set(false);
    this.generateQuestions();
  }

  goHome(): void {
    this.router.navigate(['/']);
  }

  isCorrect(): boolean {
    const q = this.currentQuestion();
    return q?.userAnswer === q?.correctAnswer;
  }

  getSelectedOptionResponse(): string | undefined {
    const q = this.currentQuestion();
    if (!q?.userAnswer) return undefined;
    const selectedOption = q.options.find(opt => opt.value === q.userAnswer);
    return selectedOption?.response;
  }
}
