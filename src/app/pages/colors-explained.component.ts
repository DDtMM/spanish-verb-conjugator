import { Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NOUNS } from '../words/nouns';

@Component({
  selector: 'app-colors-explained',
  imports: [RouterLink],
  template: `

      <h1 class="text-3xl md:text-4xl font-bold text-base-content mb-8">
        Colors in Spanish
      </h1>
      
      <!-- Introduction -->
      <div class="mb-10 prose max-w-none">
        <p class="text-lg text-base-content/80 leading-relaxed">
          Colors are essential vocabulary in any language! In Spanish, color words are often used as adjectives,
          which means they must agree in gender and number with the nouns they describe.
          Master these common colors and then <a routerLink="/colors-quiz" class="link">test your knowledge with the quiz</a>!
        </p>
      </div>

      <!-- Grammar Note -->
      <div class="mb-10 alert alert-info">
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
          <h3 class="font-bold mb-2">Important Grammar Note</h3>
          <p>
            Colors ending in <strong>-o</strong> (like rojo, amarillo, negro) change to <strong>-a</strong> for feminine nouns.
            Colors ending in <strong>-e</strong> or consonants (like verde, azul, gris) stay the same for both genders.
            Some colors like <strong>rosa</strong> and <strong>naranja</strong> never change form.
          </p>
        </div>
      </div>

      <!-- Colors Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        @for (color of colors(); track color.word) {
          <div class="mb-4">
            <h3 class="text-2xl font-semibold mb-2">
              <span class="text-primary">{{ color.word }}</span> - {{ color.definition }}
            </h3>
            <p class="text-base-content/80 mb-1">{{ color.sampleSentence }}</p>
            <p class="text-base-content/60 italic text-sm">{{ color.sampleTranslation }}</p>
          </div>
        }
      </div>

      <!-- Additional Examples -->
      <div class="mt-12 mb-10">
        <h2 class="text-3xl font-bold mb-6">Example Sentences</h2>
        <div class="space-y-4">
          <div>
            <p class="font-semibold text-lg">La casa blanca es grande.</p>
            <p class="text-base-content/70">The white house is big.</p>
          </div>
          <div>
            <p class="font-semibold text-lg">Tengo un coche rojo y una moto negra.</p>
            <p class="text-base-content/70">I have a red car and a black motorcycle.</p>
          </div>
          <div>
            <p class="font-semibold text-lg">Sus ojos son azules.</p>
            <p class="text-base-content/70">His/her eyes are blue.</p>
          </div>
          <div>
            <p class="font-semibold text-lg">Las flores amarillas son hermosas.</p>
            <p class="text-base-content/70">The yellow flowers are beautiful.</p>
          </div>
        </div>
      </div>

  `
})
export class ColorsExplainedComponent {
  colors = computed(() => 
    NOUNS.filter(noun => noun.tags?.includes('color')).sort((a, b) => a.word.localeCompare(b.word))
  );
}
