import { Component, computed, signal, ChangeDetectionStrategy } from '@angular/core';
import { NATIONALITIES, Nationality } from '../nationalities';

interface QuizQuestion {
  nationality: Nationality;
  gender: 'masculine' | 'feminine';
  correctAnswer: string;
  userAnswer: string;
  isCorrect: boolean | null;
}

@Component({
  selector: 'app-nationality-quiz',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Page Header -->
    <h1 class="text-3xl md:text-4xl font-bold text-base-content mb-8">
      Nationality Translations Quiz
    </h1>

    <!-- Instructions -->
    <div class="card bg-base-100 text-base-content shadow-lg mb-8">
      <div class="card-body">
        <h2 class="card-title text-2xl mb-4">How It Works</h2>
        <p class="text-base-content/80 leading-relaxed mb-4">
          Practice translating nationality adjectives from English to Spanish. Remember that Spanish
          nationality adjectives have both masculine and feminine forms!
        </p>
        <div class="alert alert-info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="stroke-current shrink-0 w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <div>
            <p>
              <strong>Tip:</strong> Most nationality adjectives end in -o (masculine) and -a
              (feminine), but some like "canadiense" are the same for both genders!
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Quiz Controls -->
    @if (!quizStarted()) {
      <div class="card bg-primary text-primary-content shadow-lg mb-8">
        <div class="card-body text-center">
          <h2 class="card-title text-2xl justify-center mb-4">Ready to Start?</h2>
          <p class="mb-6">
            You'll be quizzed on {{ NATIONALITIES.length }} different nationalities with both
            masculine and feminine forms.
          </p>
          <button class="btn btn-secondary btn-lg" (click)="startQuiz()">Start Quiz</button>
        </div>
      </div>
    }

    <!-- Quiz Questions -->
    @if (quizStarted() && !quizCompleted()) {
      <div class="card bg-primary text-primary-content shadow-lg mb-8">
        <div class="card-body">
          <div class="flex justify-between items-center mb-4">
            <h2 class="card-title text-2xl">
              Question {{ currentQuestionIndex() + 1 }} of {{ questions().length }}
            </h2>
            <div class="text-lg font-bold">
              Score: {{ score() }} / {{ answeredCount() }}
            </div>
          </div>

          @if (currentQuestion(); as question) {
            <div class="bg-white/20 p-6 rounded-lg mb-6">
              <p class="text-xl mb-2">
                Translate to Spanish
                <span class="font-bold">({{ question.gender }} form)</span>:
              </p>
              <p class="text-3xl font-bold">{{ question.nationality.englishTranslation }}</p>
              <p class="text-lg italic mt-2">from {{ question.nationality.country }}</p>
            </div>

            <div class="form-control w-full max-w-md mx-auto">
              <input
                type="text"
                placeholder="Type your answer here..."
                class="input input-bordered input-lg w-full text-base-content text-center"
                [value]="currentAnswer()"
                (input)="onAnswerInput($event)"
                (keydown.enter)="submitAnswer()"
                [disabled]="currentQuestion().isCorrect !== null"
              />

              @if (question.isCorrect === null) {
                <button
                  class="btn btn-secondary btn-lg mt-4"
                  (click)="submitAnswer()"
                  [disabled]="!currentAnswer().trim()"
                >
                  Submit Answer
                </button>
              } @else {
                <div class="mt-4">
                  @if (question.isCorrect) {
                    <div class="alert alert-success">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="stroke-current shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span><strong>Correct!</strong> {{ question.correctAnswer }}</span>
                    </div>
                  } @else {
                    <div class="alert alert-error">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="stroke-current shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div>
                        <div>
                          <strong>Incorrect.</strong> You answered: {{ question.userAnswer }}
                        </div>
                        <div>Correct answer: {{ question.correctAnswer }}</div>
                      </div>
                    </div>
                  }

                  <button class="btn btn-primary btn-lg w-full mt-4" (click)="nextQuestion()">
                    @if (currentQuestionIndex() === questions().length - 1) {
                      <span>Finish Quiz</span>
                    } @else {
                      <span>Next Question</span>
                    }
                  </button>
                </div>
              }
            </div>
          }
        </div>
      </div>
    }

    <!-- Quiz Results -->
    @if (quizCompleted()) {
      <div class="card bg-success text-success-content shadow-lg mb-8">
        <div class="card-body text-center">
          <h2 class="card-title text-3xl justify-center mb-4">Quiz Complete!</h2>

          <div class="text-6xl font-bold mb-6">
            {{ score() }} / {{ questions().length }}
          </div>

          <div class="text-2xl mb-8">
            {{ getScorePercentage() }}% - {{ getScoreMessage() }}
          </div>

          <div class="flex gap-4 justify-center">
            <button class="btn btn-primary btn-lg" (click)="restartQuiz()">Try Again</button>
          </div>
        </div>
      </div>

      <!-- Review Incorrect Answers -->
      @if (incorrectAnswers().length > 0) {
        <div class="card bg-base-100 text-base-content shadow-lg">
          <div class="card-body">
            <h2 class="card-title text-2xl mb-4">Review Missed Questions</h2>

            <div class="space-y-4">
              @for (question of incorrectAnswers(); track $index) {
                <div class="bg-base-200 p-4 rounded-lg">
                  <div class="flex justify-between items-start mb-2">
                    <div>
                      <p class="font-bold text-lg">
                        {{ question.nationality.englishTranslation }} ({{
                          question.gender
                        }})
                      </p>
                      <p class="text-sm text-base-content/70">
                        from {{ question.nationality.country }}
                      </p>
                    </div>
                  </div>
                  <div class="mt-2">
                    <p class="text-error">Your answer: {{ question.userAnswer }}</p>
                    <p class="text-success">Correct answer: {{ question.correctAnswer }}</p>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      }
    }

    <!-- Reference Table -->
    <div class="card bg-base-100 text-base-content shadow-lg mt-8">
      <div class="card-body">
        <h2 class="card-title text-2xl mb-4">Nationality Reference Table</h2>

        <div class="overflow-x-auto">
          <table class="table table-zebra w-full">
            <thead>
              <tr class="bg-neutral text-neutral-content">
                <th>Country</th>
                <th>English</th>
                <th>Spanish (Masculine)</th>
                <th>Spanish (Feminine)</th>
              </tr>
            </thead>
            <tbody>
              @for (nationality of NATIONALITIES; track nationality.country) {
                <tr>
                  <td class="font-bold">{{ nationality.country }}</td>
                  <td>{{ nationality.englishTranslation }}</td>
                  <td class="font-mono">{{ nationality.masculine }}</td>
                  <td class="font-mono">{{ nationality.feminine }}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `
})
export class NationalityQuizComponent {
  readonly NATIONALITIES = NATIONALITIES;

  readonly quizStarted = signal(false);
  readonly quizCompleted = signal(false);
  readonly questions = signal<QuizQuestion[]>([]);
  readonly currentQuestionIndex = signal(0);
  readonly currentAnswer = signal('');

  readonly currentQuestion = computed(() => {
    const questions = this.questions();
    const index = this.currentQuestionIndex();
    return questions[index] || null;
  });

  readonly score = computed(() => {
    return this.questions().filter((q) => q.isCorrect === true).length;
  });

  readonly answeredCount = computed(() => {
    return this.questions().filter((q) => q.isCorrect !== null).length;
  });

  readonly incorrectAnswers = computed(() => {
    return this.questions().filter((q) => q.isCorrect === false);
  });

  startQuiz() {
    const questions: QuizQuestion[] = [];

    // Create questions for both masculine and feminine forms
    for (const nationality of NATIONALITIES) {
      // Masculine question
      questions.push({
        nationality,
        gender: 'masculine',
        correctAnswer: nationality.masculine,
        userAnswer: '',
        isCorrect: null
      });

      // Feminine question
      questions.push({
        nationality,
        gender: 'feminine',
        correctAnswer: nationality.feminine,
        userAnswer: '',
        isCorrect: null
      });
    }

    // Shuffle questions
    this.shuffleArray(questions);

    this.questions.set(questions);
    this.currentQuestionIndex.set(0);
    this.currentAnswer.set('');
    this.quizStarted.set(true);
    this.quizCompleted.set(false);
  }

  private shuffleArray<T>(array: T[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  onAnswerInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.currentAnswer.set(value);
  }

  submitAnswer() {
    const answer = this.currentAnswer().trim().toLowerCase();
    if (!answer) return;

    const currentQ = this.currentQuestion();
    if (!currentQ || currentQ.isCorrect !== null) return;

    const correctAnswer = currentQ.correctAnswer.toLowerCase();
    const isCorrect = answer === correctAnswer;

    // Update the question in the array
    const questions = this.questions();
    const index = this.currentQuestionIndex();
    questions[index] = {
      ...currentQ,
      userAnswer: this.currentAnswer().trim(),
      isCorrect
    };
    this.questions.set([...questions]);
  }

  nextQuestion() {
    const nextIndex = this.currentQuestionIndex() + 1;

    if (nextIndex >= this.questions().length) {
      this.quizCompleted.set(true);
    } else {
      this.currentQuestionIndex.set(nextIndex);
      this.currentAnswer.set('');
    }
  }

  restartQuiz() {
    this.startQuiz();
  }

  getScorePercentage(): number {
    const total = this.questions().length;
    if (total === 0) return 0;
    return Math.round((this.score() / total) * 100);
  }

  getScoreMessage(): string {
    const percentage = this.getScorePercentage();
    if (percentage === 100) return 'Perfect!';
    if (percentage >= 90) return 'Excellent!';
    if (percentage >= 80) return 'Great job!';
    if (percentage >= 70) return 'Good work!';
    if (percentage >= 60) return 'Not bad!';
    return 'Keep practicing!';
  }
}
