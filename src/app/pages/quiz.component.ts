import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ADJECTIVES } from '../words/adjectives';
import { NOUNS } from '../words/nouns';
import { generateAdjectiveQuestion } from '../quizes/adjective-question-generator';
import { generateNounQuestion } from '../quizes/noun-question-generator';
import { Question, QuizOption } from '../quizes/quiz-common';
import { generateVerbQuestion } from '../quizes/verb-question-generator';
import { ConjugationCategory, Tense, VERBS } from '../words/verbs';

interface UiQuestion extends Question {
  /** The question id. */
  id: number;
  /** Records the user's answer. */
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
    const questions: UiQuestion[] = [];
    let questionId = 0;

    // Loop until we have enough questions, reusing words if necessary
    while (questions.length < maxQuestions) {
      for (const word of wordList) {
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
          // Select random tense from specified list or all tenses
          const tense = tensesList.length > 0 ? this.getRandomTenseFromList(tensesList) : this.getRandomTense();
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

  getRandomTenseFromList(tenses: Tense[]): Tense {
    return tenses[Math.floor(Math.random() * tenses.length)];
  }

  getRandomTense(): Tense {
    const tenses: Tense[] = ['present', 'preterite', 'imperfect'];
    return tenses[Math.floor(Math.random() * tenses.length)];
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
