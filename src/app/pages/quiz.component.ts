import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { QuizOption } from '../quizes/quiz-common';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-quiz',
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  readonly quizService = inject(QuizService);
  private readonly router = inject(Router);
  

  selectAnswer(option: QuizOption): void {
    this.quizService.selectAnswer(option.value);
  }

  nextQuestion(): void {
    this.quizService.nextQuestion();
  }

  retryIncorrect(): void {
    this.quizService.retryIncorrect();
  }

  restartQuiz(): void {
    this.quizService.restartQuiz();
  }

  goHome(): void {
    this.router.navigate(['/']);
  }

  isCorrect(): boolean {
    return this.quizService.isCorrect();
  }

  getSelectedOptionResponse(): string | undefined {
    return this.quizService.getSelectedOptionResponse();
  }
}
