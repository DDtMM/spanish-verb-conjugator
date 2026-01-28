import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- Hero Section -->
    <div class="text-center mb-10">
      <h1 class="text-4xl md:text-5xl font-bold text-base-content mb-3">
        Spanish Verb Conjugator
      </h1>
      <p class="text-xl text-base-content/70 mb-10">
        Learn Spanish verb conjugations with interactive study guides
      </p>
    </div>
    
    <!-- Tutorials Section -->
    <div class="mb-12">
      <h2 class="text-3xl font-bold text-base-content mb-6">Tutorials</h2>
      <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="card bg-base-100 text-base-content shadow-lg border border-neutral hover:border-primary transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
          <div class="card-body p-4">
            <h3 class="card-title text-lg justify-center mb-2">Present Tense</h3>
            <p class="text-sm text-base-content/80 mb-3">
              Learn how to conjugate verbs in the present tense.
            </p>
            <div class="card-actions justify-center">
              <a routerLink="/present-tense" class="btn btn-primary btn-sm">
                Study
              </a>
            </div>
          </div>
        </div>
        
        <div class="card bg-base-100 text-base-content shadow-lg border border-neutral hover:border-primary transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
          <div class="card-body p-4">
            <h3 class="card-title text-lg justify-center mb-2">Preterite Tense</h3>
            <p class="text-sm text-base-content/80 mb-3">
              Master the preterite tense for completed actions in the past.
            </p>
            <div class="card-actions justify-center">
              <a routerLink="/preterite" class="btn btn-primary btn-sm">
                Study
              </a>
            </div>
          </div>
        </div>
        
        <div class="card bg-base-100 text-base-content shadow-lg border border-neutral hover:border-primary transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
          <div class="card-body p-4">
            <h3 class="card-title text-lg justify-center mb-2">Imperfect Tense</h3>
            <p class="text-sm text-base-content/80 mb-3">
              Learn the imperfect tense for past habits and ongoing actions.
            </p>
            <div class="card-actions justify-center">
              <a routerLink="/imperfect" class="btn btn-primary btn-sm">
                Study
              </a>
            </div>
          </div>
        </div>
        
        <div class="card bg-base-100 text-base-content shadow-lg border border-neutral hover:border-primary transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
          <div class="card-body p-4">
            <h3 class="card-title text-lg justify-center mb-2">Sentence Generator</h3>
            <p class="text-sm text-base-content/80 mb-3">
              Practice building sentences with direct object pronouns.
            </p>
            <div class="card-actions justify-center">
              <a routerLink="/sentence-generator" class="btn btn-primary btn-sm">
                Build
              </a>
            </div>
          </div>
        </div>
        
        <div class="card bg-base-100 text-base-content shadow-lg border border-neutral hover:border-primary transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
          <div class="card-body p-4">
            <h3 class="card-title text-lg justify-center mb-2">Spanish Numbers</h3>
            <p class="text-sm text-base-content/80 mb-3">
              Learn Spanish numbers from 0 to 10,000 with patterns.
            </p>
            <div class="card-actions justify-center">
              <a routerLink="/numbers" class="btn btn-primary btn-sm">
                Learn
              </a>
            </div>
          </div>
        </div>
        
        <div class="card bg-base-100 text-base-content shadow-lg border border-neutral hover:border-primary transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
          <div class="card-body p-4">
            <h3 class="card-title text-lg justify-center mb-2">Parts of the Face</h3>
            <p class="text-sm text-base-content/80 mb-3">
              Study vocabulary for parts of the face and head.
            </p>
            <div class="card-actions justify-center">
              <a routerLink="/parts-of-face" class="btn btn-primary btn-sm">
                View
              </a>
            </div>
          </div>
        </div>
        
        <div class="card bg-base-100 text-base-content shadow-lg border border-neutral hover:border-primary transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
          <div class="card-body p-4">
            <h3 class="card-title text-lg justify-center mb-2">Dates & Days Explained</h3>
            <p class="text-sm text-base-content/80 mb-3">
              Learn days of the week, months, and how to write dates.
            </p>
            <div class="card-actions justify-center">
              <a routerLink="/dates-days-explained" class="btn btn-primary btn-sm">
                Learn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Quizzes Section -->
    <div class="mb-10">
      <h2 class="text-3xl font-bold text-base-content mb-6">Quizzes</h2>
      <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="card bg-base-100 text-base-content shadow-lg border border-neutral hover:border-accent transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
          <div class="card-body p-4">
            <h3 class="card-title text-lg justify-center mb-2">Chapter 5 Quiz</h3>
            <p class="text-sm text-base-content/80 mb-3">
              Practice distinguishing between preterite and imperfect tenses.
            </p>
            <div class="card-actions justify-center">
              <a routerLink="/quiz" [queryParams]="{words: 'aprender,pagar,mirar,decidir,salir,tomar,escribir,comprar,invitar,encontrar,buscar,ir,hablar,acostarse,comer', tense: 'preterite,imperfect', numberOfQuestions: '20'}" class="btn btn-accent btn-sm">
                Start
              </a>
            </div>
          </div>
        </div>
        
        <div class="card bg-base-100 text-base-content shadow-lg border border-neutral hover:border-accent transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
          <div class="card-body p-4">
            <h3 class="card-title text-lg justify-center mb-2">Nationality Quiz</h3>
            <p class="text-sm text-base-content/80 mb-3">
              Test your knowledge of nationality adjectives in Spanish.
            </p>
            <div class="card-actions justify-center">
              <a routerLink="/nationality-quiz" class="btn btn-accent btn-sm">
                Take Quiz
              </a>
            </div>
          </div>
        </div>
        
        <div class="card bg-base-100 text-base-content shadow-lg border border-neutral hover:border-accent transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
          <div class="card-body p-4">
            <h3 class="card-title text-lg justify-center mb-2">Dates and Days Quiz</h3>
            <p class="text-sm text-base-content/80 mb-3">
              Test your knowledge of days of the week and months.
            </p>
            <div class="card-actions justify-center">
              <a routerLink="/time-quiz" class="btn btn-accent btn-sm">
                Start
              </a>
            </div>
          </div>
        </div>
        
        <div class="card bg-base-100 text-base-content shadow-lg border border-neutral hover:border-accent transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
          <div class="card-body p-4">
            <h3 class="card-title text-lg justify-center mb-2">Head Parts Quiz</h3>
            <p class="text-sm text-base-content/80 mb-3">
              Practice vocabulary for parts of the head in Spanish.
            </p>
            <div class="card-actions justify-center">
              <a routerLink="/head-parts-quiz" class="btn btn-accent btn-sm">
                Start
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Features Section -->
    <div class="card bg-secondary text-secondary-content shadow-lg">
      <div class="card-body text-center">
        <h3 class="text-2xl font-bold mb-6">What you'll learn:</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          <div class="flex items-center gap-3 text-lg">
            <span class="text-success font-bold">✓</span>
            Regular and irregular verb conjugations
          </div>
          <div class="flex items-center gap-3 text-lg">
            <span class="text-success font-bold">✓</span>
            Sample sentences for context
          </div>
          <div class="flex items-center gap-3 text-lg">
            <span class="text-success font-bold">✓</span>
            Important verbs highlighted
          </div>
          <div class="flex items-center gap-3 text-lg">
            <span class="text-success font-bold">✓</span>
            Mobile-friendly interface
          </div>
          <div class="flex items-center gap-3 text-lg">
            <span class="text-success font-bold">✓</span>
            Interactive sentence generator
          </div>
          <div class="flex items-center gap-3 text-lg">
            <span class="text-success font-bold">✓</span>
            Direct object pronoun practice
          </div>
          <div class="flex items-center gap-3 text-lg">
            <span class="text-success font-bold">✓</span>
            Nationality translation quiz
          </div>
          <div class="flex items-center gap-3 text-lg">
            <span class="text-success font-bold">✓</span>
            Numbers 0-10,000 with patterns
          </div>
          <div class="flex items-center gap-3 text-lg">
            <span class="text-success font-bold">✓</span>
            Days of the week and months
          </div>
          <div class="flex items-center gap-3 text-lg">
            <span class="text-success font-bold">✓</span>
            Parts of the head vocabulary
          </div>
        </div>
      </div>
    </div>
  `
})
export class HomeComponent {
}