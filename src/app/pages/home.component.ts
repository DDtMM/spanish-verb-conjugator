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
    
    <!-- Navigation Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
      <div class="card bg-base-100 text-base-content shadow-xl border-2 border-neutral hover:border-primary transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl">
        <div class="card-body text-center">
          <h2 class="card-title text-2xl justify-center mb-4">Present Tense</h2>
          <p class="text-base-content/80 leading-relaxed mb-6">
            Learn how to conjugate verbs in the present tense. Perfect for describing current actions, habits, and general truths.
          </p>
          <div class="card-actions justify-center">
            <a routerLink="/present-tense" class="btn btn-primary btn-lg">
              Study Present Tense
            </a>
          </div>
        </div>
      </div>
      
      <div class="card bg-base-100 text-base-content shadow-xl border-2 border-neutral hover:border-primary transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl">
        <div class="card-body text-center">
          <h2 class="card-title text-2xl justify-center mb-4">Preterite Tense</h2>
          <p class="text-base-content/80 leading-relaxed mb-6">
            Master the preterite tense for talking about completed actions in the past.
          </p>
          <div class="card-actions justify-center">
            <a routerLink="/preterite" class="btn btn-primary btn-lg">
              Study Preterite Tense
            </a>
          </div>
        </div>
      </div>
      
      <div class="card bg-base-100 text-base-content shadow-xl border-2 border-neutral hover:border-primary transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl">
        <div class="card-body text-center">
          <h2 class="card-title text-2xl justify-center mb-4">Imperfect Tense</h2>
          <p class="text-base-content/80 leading-relaxed mb-6">
            Learn the imperfect tense for describing past habits, ongoing actions, and background information.
          </p>
          <div class="card-actions justify-center">
            <a routerLink="/imperfect" class="btn btn-primary btn-lg">
              Study Imperfect Tense
            </a>
          </div>
        </div>
      </div>
      
      <div class="card bg-base-100 text-base-content shadow-xl border-2 border-neutral hover:border-primary transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl">
        <div class="card-body text-center">
          <h2 class="card-title text-2xl justify-center mb-4">Sentence Generator</h2>
          <p class="text-base-content/80 leading-relaxed mb-6">
            Practice building sentences with direct object pronouns using interactive dropdowns.
          </p>
          <div class="card-actions justify-center">
            <a routerLink="/sentence-generator" class="btn btn-primary btn-lg">
              Build Sentences
            </a>
          </div>
        </div>
      </div>
      
      <div class="card bg-base-100 text-base-content shadow-xl border-2 border-neutral hover:border-primary transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl">
        <div class="card-body text-center">
          <h2 class="card-title text-2xl justify-center mb-4">Nationality Quiz</h2>
          <p class="text-base-content/80 leading-relaxed mb-6">
            Test your knowledge of nationality adjectives in Spanish with both masculine and feminine forms.
          </p>
          <div class="card-actions justify-center">
            <a routerLink="/nationality-quiz" class="btn btn-primary btn-lg">
              Take Quiz
            </a>
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
        </div>
      </div>
    </div>
  `
})
export class HomeComponent {
}