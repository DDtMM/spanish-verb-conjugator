import { Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NOUNS } from '../words/nouns';

@Component({
  selector: 'app-parts-of-face',
  imports: [RouterLink],
  template: `

      <h1 class="text-3xl md:text-4xl font-bold text-base-content mb-8">
        Parts of the Face
      </h1>
       <div class="mb-10 prose max-w-none">
        <p class="text-lg text-base-content/80 leading-relaxed">
          You gots to know where your head parts are broh!  You just gots to!
          When you know it then <a routerLink="/head-parts-quiz" class="link">hit that quiz</a> to test your knowledge!
        </p>
    </div>  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        @for (part of faceParts(); track part.word) {
          <div class="mb-4">
            <h3 class="text-2xl font-semibold mb-2">
              <span class="text-primary">{{ part.word }}</span> - {{ part.definition }}
            </h3>
            <p class="text-base-content/80 mb-1">{{ part.sampleSentence }}</p>
            <p class="text-base-content/60 italic text-sm">{{ part.sampleTranslation }}</p>
          </div>
        }
      </div>

  `
})
export class PartsOfFaceComponent {
  faceParts = computed(() => 
    NOUNS.filter(noun => noun.tags?.includes('head-part')).sort((a, b) => a.word.localeCompare(b.word))
  );
}
