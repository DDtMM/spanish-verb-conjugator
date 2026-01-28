import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { Router } from '@angular/router';
import { NOUNS } from '../words/nouns';
import { generateNounQuestion } from '../quizes/noun-question-generator';
import { Question, QuizOption } from '../quizes/quiz-common';

interface UiQuestion extends Question {
  id: number;
  userAnswer?: string;
}

@Component({
  selector: 'app-time-quiz',
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class TimeQuizComponent {
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

  constructor(private router: Router) {
    this.generateQuestions();
  }

  generateQuestions(): void {
    // Get all days of the week and months
    const timeNouns = NOUNS.filter(n => 
      n.tags?.includes('day-of-week') || n.tags?.includes('month')
    );
    
    const questions: UiQuestion[] = [];
    let questionId = 0;

    // Generate 20 questions by cycling through the nouns
    const numberOfQuestions = 20;
    for (let i = 0; i < numberOfQuestions; i++) {
      const noun = timeNouns[i % timeNouns.length];
      questions.push({ ...generateNounQuestion(noun), id: questionId++ });
    }

    // Shuffle questions
    this.questions.set(this.shuffleArray(questions));
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
