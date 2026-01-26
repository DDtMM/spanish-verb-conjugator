import { Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONJUGATION_CATEGORIES, ConjugationCategory, Tense, Verb, VerbConjugationWithSample } from '../words/verbs';

@Component({
  selector: 'app-verb-table',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card border-2 mb-5 overflow-hidden break-inside-avoid" 
         [class]="verb().isImportant ? 'border-primary shadow-lg' : 'border-neutral'">

      <!-- Verb Header -->
      <div class="px-3 py-3 font-bold flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2"
           [class]="verb().isImportant ? 'bg-primary text-primary-content' : 'bg-neutral text-neutral-content'">
        <div class="text-lg">
          @if (verb().isImportant) {
            <span class="mr-2">✓</span>
          }
          {{ verb().infinitive }} - {{ verb().definition }}
        </div>
        <div class="badge badge-ghost bg-white/20">
          @if (conjugation().isIrregular) {
            Irregular
            @if (conjugation().irregularDescription) {
              : {{ conjugation().irregularDescription }}
            }
          } @else {
            Regular
          }
        </div>
      </div>
      
      <!-- Verb Content -->
      <div class="p-4" class="card-body">
        
        <!-- Desktop Table (md and up) -->
        <div class="hidden md:block">
          <table class="table table-bordered w-full">
            <thead>
              <tr class="bg-accent text-accent-content">
                @for (conjugationCategory of conjugationCategories; track conjugationCategory) {
                  <th class="text-center text-sm font-bold">{{ conjugationCategoryLabels[conjugationCategory] }}</th>
                }
              </tr>
            </thead>
            <tbody>
              <tr>
                @for (conjugationCategory of conjugationCategories; track conjugationCategory) {
                  <td class="text-center font-mono text-sm">{{ conjugation()[conjugationCategory].conjugated }}</td>
                }
              </tr>
            </tbody>
          </table>
        </div>
        
        <!-- Mobile Grid (sm and down) -->
        <div class="md:hidden grid grid-cols-1 gap-2 mb-4">
          @for (conjugationCategory of conjugationCategories; track conjugationCategory) {
            <div class="flex justify-between items-center p-2 bg-base-200 text-base-content">
              <span class="font-bold text-sm">{{ conjugationCategoryLabels[conjugationCategory] }}:</span>
              <span class="font-mono text-sm">{{ conjugation()[conjugationCategory].conjugated }}</span>
            </div>
          }
        </div>
        
        <!-- Sample Sentences -->
        <div class="text-sm leading-relaxed border-t pt-3 flex flex-col gap-1">
          @for (example of examples(); track example) {
            <div class="flex flex-col sm:flex-row flex-wrap gap-1 mb-1">
              <div class="grow text-nowrap">{{ example.sampleSentence }}</div>
              <div class="italic ml-2 text-nowrap">{{ example.sampleTranslation }}</div>
            </div>
          }
        </div>
      </div>
    </div>
  `
})
export class VerbTableComponent {
  readonly conjugation = computed(() => this.verb()[this.tense()]);
  readonly conjugationCategories = CONJUGATION_CATEGORIES;
  readonly conjugationCategoryLabels = {
    yo: 'yo',
    tu: 'tú',
    elEllaUsted: 'él/ella/usted',
    nosotros: 'nosotros',
    vosotros: 'vosotros',
    ellosEllasUstedes: 'ell(os|as)/ustedes',
  }
  readonly examples = computed(() => 
    Object.entries(this.conjugation())
      .filter(([key, value]) => 
        key !== 'irregularDescription' && 
        key !== 'isIrregular' && 
        typeof value === 'object' && 
        isConjugationWithSampleSentence(value)
      )
      .map(([key, value]) => value as VerbConjugationWithSample)
  );
  readonly verb = input.required<Verb>();
  readonly tense = input.required<Tense>();

}

function isConjugationWithSampleSentence(conjugation: VerbConjugationWithSample): conjugation is VerbConjugationWithSample {
  return (conjugation as VerbConjugationWithSample).sampleSentence !== undefined;
}