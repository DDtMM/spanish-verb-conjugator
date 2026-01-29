import { Injectable, signal, computed } from '@angular/core';
import { ADJECTIVES } from '../words/adjectives';
import { NOUNS } from '../words/nouns';
import { VERBS, Tense, ConjugationCategory } from '../words/verbs';
import { generateAdjectiveQuestion } from '../quizes/adjective-question-generator';
import { generateNounQuestion } from '../quizes/noun-question-generator';
import { generateVerbQuestion } from '../quizes/verb-question-generator';
import { Question } from '../quizes/quiz-common';

export interface UiQuestion extends Question {
  id: number;
  userAnswer?: string;
}

export interface QuizConfig {
  words?: string[];
  tags?: string[];
  tenses?: Tense[];
  numberOfQuestions?: number;
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private config = signal<QuizConfig>({});
  
  questions = signal<UiQuestion[]>([]);
  currentQuestionIndex = signal(0);
  showingResult = signal(false);
  quizComplete = signal(false);
  retryMode = signal(false);
  incorrectQuestions = signal<UiQuestion[]>([]);
  
  currentQuestion = computed(() => this.questions()[this.currentQuestionIndex()]);
  totalQuestions = computed(() => this.questions().length);
  score = computed(() => {
    const qs = this.questions();
    return qs.filter(q => q.userAnswer === q.correctAnswer).length;
  });

  setConfig(config: QuizConfig): void {
    this.config.set(config);
    this.reset();
    this.generateQuestions();
  }

  reset(): void {
    this.questions.set([]);
    this.currentQuestionIndex.set(0);
    this.showingResult.set(false);
    this.quizComplete.set(false);
    this.retryMode.set(false);
    this.incorrectQuestions.set([]);
  }

  generateQuestions(): void {
    const cfg = this.config();
    const maxQuestions = cfg.numberOfQuestions || 20;
    const questions: UiQuestion[] = [];
    let questionId = 0;

    // Get words based on config
    let wordSources: string[] = [];
    
    if (cfg.tags && cfg.tags.length > 0) {
      // Filter nouns by tags
      const filteredNouns = NOUNS.filter(n => 
        cfg.tags!.some(tag => n.tags?.includes(tag))
      );
      wordSources = filteredNouns.map(n => n.word);
    } else if (cfg.words && cfg.words.length > 0) {
      wordSources = cfg.words;
    }

    if (wordSources.length === 0) {
      return;
    }

    // Loop until we have enough questions, reusing words if necessary
    while (questions.length < maxQuestions) {
      for (const word of wordSources) {
        if (questions.length >= maxQuestions) break;
        
        // Check if it's a noun
        const noun = NOUNS.find(n => n.word === word);
        if (noun) {
          questions.push({ ...generateNounQuestion(noun), id: questionId++ });
          continue;
        }

        // Check if it's a verb
        const verb = VERBS.find(v => v.infinitive === word);
        if (verb) {
          const tensesList = cfg.tenses || [];
          const tense = tensesList.length > 0 
            ? this.getRandomTenseFromList(tensesList) 
            : this.getRandomTense();
          const pronouns: ConjugationCategory[] = ['yo', 'tu', 'elEllaUsted', 'nosotros', 'vosotros', 'ellosEllasUstedes'];
          const selectedPronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
          questions.push({ ...generateVerbQuestion(verb, tense, selectedPronoun), id: questionId++ });
          continue;
        }

        // Check if it's an adjective
        const adjective = ADJECTIVES.find(a => a.word === word);
        if (adjective) {
          questions.push({ ...generateAdjectiveQuestion(adjective), id: questionId++ });
          continue;
        }
      }
      
      // Prevent infinite loop if no valid words found
      if (questions.length === 0) break;
    }

    // Shuffle questions
    this.questions.set(this.shuffleArray(questions));
  }

  private shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  private getRandomTense(): Tense {
    const tenses: Tense[] = ['present', 'preterite', 'imperfect'];
    return tenses[Math.floor(Math.random() * tenses.length)];
  }

  private getRandomTenseFromList(tenses: Tense[]): Tense {
    return tenses[Math.floor(Math.random() * tenses.length)];
  }

  selectAnswer(optionValue: string): void {
    if (this.showingResult()) return;

    const questions = [...this.questions()];
    questions[this.currentQuestionIndex()].userAnswer = optionValue;
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

  private finishQuiz(): void {
    const incorrect = this.questions().filter(q => q.userAnswer !== q.correctAnswer);
    
    if (!this.retryMode() && incorrect.length > 0) {
      this.incorrectQuestions.set(incorrect);
      this.quizComplete.set(true);
    } else {
      this.quizComplete.set(true);
    }
  }

  retryIncorrect(): void {
    const incorrect = this.incorrectQuestions();
    const resetQuestions = incorrect.map(q => ({ ...q, userAnswer: undefined }));
    this.questions.set(this.shuffleArray(resetQuestions));
    this.currentQuestionIndex.set(0);
    this.showingResult.set(false);
    this.quizComplete.set(false);
    this.retryMode.set(true);
  }

  restartQuiz(): void {
    this.reset();
    this.generateQuestions();
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
