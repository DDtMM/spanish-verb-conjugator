import { Component, computed, signal, ChangeDetectionStrategy } from '@angular/core';
import { NUMBER_GROUPS, ALL_NUMBERS, numberToSpanish, NumberInfo } from '../words/numbers';

interface QuizQuestion {
  number: number;
  correctAnswer: string;
  userAnswer: string;
  isCorrect: boolean | null;
}

type QuizMode = 'number-to-spanish' | 'spanish-to-number';

@Component({
  selector: 'app-numbers',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Page Header -->
    <h1 class="text-3xl md:text-4xl font-bold text-base-content mb-8">
      Spanish Numbers (0-10,000)
    </h1>

    <!-- Introduction -->
    <div class="card bg-base-100 text-base-content shadow-lg mb-8">
      <div class="card-body">
        <h2 class="card-title text-2xl mb-4">Learn Spanish Numbers Effectively</h2>
        <p class="text-base-content/80 leading-relaxed mb-4">
          Spanish numbers follow clear patterns once you master the basics. This page is organized
          to help you learn them step by step, from fundamental numbers to complex thousands.
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
              <strong>Pro Tip:</strong> Start with 0-15, then learn the patterns. Most Spanish
              numbers follow predictable rules once you know the building blocks!
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Learning Sections -->
    @for (group of NUMBER_GROUPS; track group.title) {
      <div class="card bg-base-100 text-base-content shadow-lg mb-8">
        <div class="card-body">
          <h2 class="card-title text-2xl mb-2">{{ group.title }}</h2>
          <p class="text-base-content/70 mb-4">{{ group.description }}</p>

          <!-- Tips -->
          @if (group.tips && group.tips.length > 0) {
            <div class="bg-secondary/10 rounded-lg p-4 mb-4">
              <h3 class="font-bold text-lg mb-2">💡 Learning Tips:</h3>
              <ul class="list-disc list-inside space-y-1">
                @for (tip of group.tips; track tip) {
                  <li class="text-base-content/80">{{ tip }}</li>
                }
              </ul>
            </div>
          }

          <!-- Numbers Table -->
          <div class="overflow-x-auto">
            <table class="table table-zebra w-full">
              <thead>
                <tr class="bg-neutral text-neutral-content">
                  <th class="text-center">Number</th>
                  <th>Spanish</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                @for (num of group.numbers; track num.value) {
                  <tr>
                    <td class="text-center font-bold text-lg">{{ num.value }}</td>
                    <td class="font-mono text-lg text-primary">{{ num.spanish }}</td>
                    <td class="text-sm text-base-content/70 italic">
                      {{ num.notes || '' }}
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    }

    <!-- Interactive Quiz Section -->
    <div class="card bg-primary text-primary-content shadow-lg mb-8">
      <div class="card-body">
        <h2 class="card-title text-3xl mb-4">Practice Quiz</h2>
        <p class="mb-6">Test your knowledge of Spanish numbers with this interactive quiz!</p>

        <!-- Quiz Setup -->
        @if (!quizStarted()) {
          <div class="space-y-4">
            <!-- Quiz Mode Selection -->
            <div class="form-control">
              <label class="label">
                <span class="label-text text-primary-content font-bold">Quiz Mode:</span>
              </label>
              <select
                class="select select-bordered w-full max-w-md text-base-content"
                [value]="selectedQuizMode()"
                (change)="onQuizModeChange($event)"
              >
                <option value="number-to-spanish">Number to Spanish (easier)</option>
                <option value="spanish-to-number">Spanish to Number (harder)</option>
              </select>
            </div>

            <!-- Number Range Selection -->
            <div class="form-control">
              <label class="label">
                <span class="label-text text-primary-content font-bold">Number Range:</span>
              </label>
              <select
                class="select select-bordered w-full max-w-md text-base-content"
                [value]="selectedRange()"
                (change)="onRangeChange($event)"
              >
                <option value="0-15">0-15 (Basics)</option>
                <option value="0-29">0-29 (Including Twenties)</option>
                <option value="0-99">0-99 (All Two-Digit Numbers)</option>
                <option value="0-999">0-999 (Including Hundreds)</option>
                <option value="0-10000">0-10,000 (All Numbers)</option>
              </select>
            </div>

            <!-- Number of Questions -->
            <div class="form-control">
              <label class="label">
                <span class="label-text text-primary-content font-bold"
                  >Number of Questions:</span
                >
              </label>
              <select
                class="select select-bordered w-full max-w-md text-base-content"
                [value]="questionCount()"
                (change)="onQuestionCountChange($event)"
              >
                <option value="5">5 Questions</option>
                <option value="10">10 Questions</option>
                <option value="15">15 Questions</option>
                <option value="20">20 Questions</option>
              </select>
            </div>

            <button class="btn btn-secondary btn-lg mt-4" (click)="startQuiz()">
              Start Quiz
            </button>
          </div>
        }

        <!-- Quiz Questions -->
        @if (quizStarted() && !quizCompleted()) {
          <div class="bg-white/20 p-6 rounded-lg">
            <div class="flex justify-between items-center mb-6">
              <h3 class="text-2xl font-bold">
                Question {{ currentQuestionIndex() + 1 }} of {{ questions().length }}
              </h3>
              <div class="text-lg font-bold">Score: {{ score() }} / {{ answeredCount() }}</div>
            </div>

            @if (currentQuestion(); as question) {
              <div class="bg-white/20 p-6 rounded-lg mb-6">
                @if (selectedQuizMode() === 'number-to-spanish') {
                  <p class="text-xl mb-2">Translate to Spanish:</p>
                  <p class="text-5xl font-bold text-center">{{ question.number }}</p>
                } @else {
                  <p class="text-xl mb-2">What number is this?</p>
                  <p class="text-4xl font-bold text-center">{{ question.correctAnswer }}</p>
                }
              </div>

              <div class="form-control w-full max-w-md mx-auto">
                <input
                  type="text"
                  [placeholder]="
                    selectedQuizMode() === 'number-to-spanish'
                      ? 'Type the Spanish word...'
                      : 'Type the number...'
                  "
                  class="input input-bordered input-lg w-full text-base-content text-center"
                  [value]="currentAnswer()"
                  (input)="onAnswerInput($event)"
                  (keydown.enter)="submitAnswer()"
                  [disabled]="question.isCorrect !== null"
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
        }

        <!-- Quiz Results -->
        @if (quizCompleted()) {
          <div class="bg-white/20 p-6 rounded-lg">
            <h3 class="text-3xl font-bold text-center mb-4">Quiz Complete!</h3>

            <div class="text-6xl font-bold text-center mb-6">
              {{ score() }} / {{ questions().length }}
            </div>

            <div class="text-2xl text-center mb-8">
              {{ getScorePercentage() }}% - {{ getScoreMessage() }}
            </div>

            <div class="flex gap-4 justify-center">
              <button class="btn btn-secondary btn-lg" (click)="restartQuiz()">Try Again</button>
            </div>

            <!-- Review Incorrect Answers -->
            @if (incorrectAnswers().length > 0) {
              <div class="mt-8 bg-base-100 text-base-content p-6 rounded-lg">
                <h4 class="text-xl font-bold mb-4">Review Missed Questions</h4>

                <div class="space-y-3">
                  @for (question of incorrectAnswers(); track $index) {
                    <div class="bg-base-200 p-4 rounded-lg">
                      <div class="font-bold text-lg mb-2">{{ question.number }}</div>
                      <div class="text-error">Your answer: {{ question.userAnswer }}</div>
                      <div class="text-success">Correct answer: {{ question.correctAnswer }}</div>
                    </div>
                  }
                </div>
              </div>
            }
          </div>
        }
      </div>
    </div>

    <!-- Quick Reference Guide -->
    <div class="card bg-base-100 text-base-content shadow-lg mb-8">
      <div class="card-body">
        <h2 class="card-title text-2xl mb-4">Quick Reference: Number Patterns</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Pattern 1 -->
          <div class="bg-base-200 p-4 rounded-lg">
            <h3 class="font-bold text-lg mb-2">0-15: Memorize</h3>
            <p class="text-sm text-base-content/70">
              These are unique and must be memorized. They form the basis for all other numbers.
            </p>
          </div>

          <!-- Pattern 2 -->
          <div class="bg-base-200 p-4 rounded-lg">
            <h3 class="font-bold text-lg mb-2">16-19: dieci + number</h3>
            <p class="text-sm text-base-content/70 mb-2">
              Formula: diez + y + [1-9] → dieci[number]
            </p>
            <p class="text-xs font-mono">Example: 17 = diez y siete → diecisiete</p>
          </div>

          <!-- Pattern 3 -->
          <div class="bg-base-200 p-4 rounded-lg">
            <h3 class="font-bold text-lg mb-2">21-29: veinti + number</h3>
            <p class="text-sm text-base-content/70 mb-2">
              Formula: veinte + y + [1-9] → veinti[number]
            </p>
            <p class="text-xs font-mono">Example: 23 = veinte y tres → veintitrés</p>
          </div>

          <!-- Pattern 4 -->
          <div class="bg-base-200 p-4 rounded-lg">
            <h3 class="font-bold text-lg mb-2">31-99: tens + y + ones</h3>
            <p class="text-sm text-base-content/70 mb-2">
              Formula: [tens] + y + [ones] (as separate words)
            </p>
            <p class="text-xs font-mono">Example: 45 = cuarenta y cinco</p>
          </div>

          <!-- Pattern 5 -->
          <div class="bg-base-200 p-4 rounded-lg">
            <h3 class="font-bold text-lg mb-2">100-999: Hundreds</h3>
            <p class="text-sm text-base-content/70 mb-2">
              100 alone = cien | 101-199 = ciento + [number]
            </p>
            <p class="text-xs font-mono">Example: 150 = ciento cincuenta</p>
          </div>

          <!-- Pattern 6 -->
          <div class="bg-base-200 p-4 rounded-lg">
            <h3 class="font-bold text-lg mb-2">1000+: Thousands</h3>
            <p class="text-sm text-base-content/70 mb-2">
              1000 = mil (never "un mil") | 2000+ = [number] + mil
            </p>
            <p class="text-xs font-mono">Example: 2500 = dos mil quinientos</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class NumbersComponent {
  readonly NUMBER_GROUPS = NUMBER_GROUPS;

  // Quiz state
  readonly quizStarted = signal(false);
  readonly quizCompleted = signal(false);
  readonly questions = signal<QuizQuestion[]>([]);
  readonly currentQuestionIndex = signal(0);
  readonly currentAnswer = signal('');
  readonly selectedQuizMode = signal<QuizMode>('number-to-spanish');
  readonly selectedRange = signal('0-99');
  readonly questionCount = signal(10);

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

  onQuizModeChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value as QuizMode;
    this.selectedQuizMode.set(value);
  }

  onRangeChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.selectedRange.set(value);
  }

  onQuestionCountChange(event: Event) {
    const value = parseInt((event.target as HTMLSelectElement).value, 10);
    this.questionCount.set(value);
  }

  startQuiz() {
    const range = this.selectedRange();
    const mode = this.selectedQuizMode();
    const count = this.questionCount();

    // Determine max number based on range
    let maxNumber = 99;
    if (range === '0-15') maxNumber = 15;
    else if (range === '0-29') maxNumber = 29;
    else if (range === '0-99') maxNumber = 99;
    else if (range === '0-999') maxNumber = 999;
    else if (range === '0-10000') maxNumber = 10000;

    // Get available numbers in range
    const availableNumbers = ALL_NUMBERS.filter((n) => n.value <= maxNumber);

    // Shuffle and select random numbers
    const shuffled = [...availableNumbers].sort(() => Math.random() - 0.5);
    const selectedNumbers = shuffled.slice(0, count);

    // Create quiz questions
    const questions: QuizQuestion[] = selectedNumbers.map((num) => ({
      number: num.value,
      correctAnswer: num.spanish,
      userAnswer: '',
      isCorrect: null
    }));

    this.questions.set(questions);
    this.currentQuestionIndex.set(0);
    this.currentAnswer.set('');
    this.quizStarted.set(true);
    this.quizCompleted.set(false);
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

    let isCorrect = false;

    if (this.selectedQuizMode() === 'number-to-spanish') {
      // Normalize for comparison (remove accents for lenient checking)
      const normalizedAnswer = answer.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const normalizedCorrect = currentQ.correctAnswer
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
      isCorrect = normalizedAnswer === normalizedCorrect;
    } else {
      // Spanish to number - check if the number matches
      isCorrect = parseInt(answer, 10) === currentQ.number;
    }

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
