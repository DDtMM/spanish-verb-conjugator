import { Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NOUNS } from '../words/nouns';

@Component({
  selector: 'app-body-parts-tutorial',
  imports: [RouterLink],
  template: `

      <h1 class="text-3xl md:text-4xl font-bold text-base-content mb-8">
        Parts of the Body
      </h1>
      
      <!-- Introduction -->
      <div class="mb-10 prose max-w-none">
        <p class="text-lg text-base-content/80 leading-relaxed">
          You gots to know where your body parts are broh! You just gots to!
          When you know it then <a routerLink="/body-parts-quiz" class="link">hit that quiz</a> to test your knowledge!
        </p>
      </div>

      <!-- Parts of the Head -->
      <div class="mb-12">
        <h2 class="text-3xl font-bold mb-6">Parts of the Head</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          @for (part of headParts(); track part.word) {
            <div class="mb-4">
              <h3 class="text-2xl font-semibold mb-2">
                <span class="text-primary">{{ part.word }}</span> - {{ part.definition }}
              </h3>
              <p class="text-base-content/80 mb-1">{{ part.sampleSentence }}</p>
              <p class="text-base-content/60 italic text-sm">{{ part.sampleTranslation }}</p>
            </div>
          }
        </div>
      </div>

      <!-- Other Body Parts -->
      <div class="mb-12">
        <h2 class="text-3xl font-bold mb-6">Other Body Parts</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          @for (part of bodyParts(); track part.word) {
            <div class="mb-4">
              <h3 class="text-2xl font-semibold mb-2">
                <span class="text-primary">{{ part.word }}</span> - {{ part.definition }}
              </h3>
              <p class="text-base-content/80 mb-1">{{ part.sampleSentence }}</p>
              <p class="text-base-content/60 italic text-sm">{{ part.sampleTranslation }}</p>
            </div>
          }
        </div>
      </div>

  `
})
export class BodyPartsTutorialComponent {
  headParts = computed(() => 
    NOUNS.filter(noun => noun.tags?.includes('head-part')).sort((a, b) => a.word.localeCompare(b.word))
  );

  bodyParts = computed(() => 
    NOUNS.filter(noun => 
      noun.tags?.includes('body-part') && !noun.tags?.includes('head-part')
    ).sort((a, b) => a.word.localeCompare(b.word))
  );
}
