import { Component, computed, signal } from '@angular/core';
import { NOUNS } from '../words/nouns';

@Component({
  selector: 'app-selected-nouns',
  imports: [],
  template: `
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-bold text-center mb-8">
        Selected Nouns
      </h1>
      
      <!-- Days of the Week -->
      <div class="mb-10">
        <h2 class="text-3xl font-bold mb-4">Days of the Week</h2>
        <div class="overflow-x-auto">
          <table class="table table-zebra w-full">
            <thead>
              <tr>
                <th class="text-lg">Spanish</th>
                <th class="text-lg">English</th>
                <th class="text-lg">Gender</th>
                <th class="text-lg">Sample Sentence</th>
              </tr>
            </thead>
            <tbody>
              @for (noun of daysOfWeek(); track noun.word) {
                <tr>
                  <td class="font-semibold">{{ noun.word }}</td>
                  <td>{{ noun.definition }}</td>
                  <td>
                    <span class="badge" [class.badge-primary]="noun.gender === 'masculine'" [class.badge-secondary]="noun.gender === 'feminine'">
                      {{ noun.gender === 'masculine' ? 'M' : 'F' }}
                    </span>
                  </td>
                  <td>
                    <div class="text-sm">
                      <div>{{ noun.sampleSentence }}</div>
                      <div class="text-base-content/60 italic">{{ noun.sampleTranslation }}</div>
                    </div>
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>

      <!-- Months -->
      <div class="mb-10">
        <h2 class="text-3xl font-bold mb-4">Months</h2>
        <div class="overflow-x-auto">
          <table class="table table-zebra w-full">
            <thead>
              <tr>
                <th class="text-lg">Spanish</th>
                <th class="text-lg">English</th>
                <th class="text-lg">Gender</th>
                <th class="text-lg">Sample Sentence</th>
              </tr>
            </thead>
            <tbody>
              @for (noun of months(); track noun.word) {
                <tr>
                  <td class="font-semibold">{{ noun.word }}</td>
                  <td>{{ noun.definition }}</td>
                  <td>
                    <span class="badge" [class.badge-primary]="noun.gender === 'masculine'" [class.badge-secondary]="noun.gender === 'feminine'">
                      {{ noun.gender === 'masculine' ? 'M' : 'F' }}
                    </span>
                  </td>
                  <td>
                    <div class="text-sm">
                      <div>{{ noun.sampleSentence }}</div>
                      <div class="text-base-content/60 italic">{{ noun.sampleTranslation }}</div>
                    </div>
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>

      <!-- Parts of the Head -->
      <div class="mb-10">
        <h2 class="text-3xl font-bold mb-4">Parts of the Head</h2>
        <div class="overflow-x-auto">
          <table class="table table-zebra w-full">
            <thead>
              <tr>
                <th class="text-lg">Spanish</th>
                <th class="text-lg">English</th>
                <th class="text-lg">Gender</th>
                <th class="text-lg">Sample Sentence</th>
              </tr>
            </thead>
            <tbody>
              @for (noun of headParts(); track noun.word) {
                <tr>
                  <td class="font-semibold">{{ noun.word }}</td>
                  <td>{{ noun.definition }}</td>
                  <td>
                    <span class="badge" [class.badge-primary]="noun.gender === 'masculine'" [class.badge-secondary]="noun.gender === 'feminine'">
                      {{ noun.gender === 'masculine' ? 'M' : 'F' }}
                    </span>
                  </td>
                  <td>
                    <div class="text-sm">
                      <div>{{ noun.sampleSentence }}</div>
                      <div class="text-base-content/60 italic">{{ noun.sampleTranslation }}</div>
                    </div>
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `
})
export class SelectedNounsComponent {
  daysOfWeek = computed(() => NOUNS.filter(n => n.keywords?.includes('day-of-week')));
  months = computed(() => NOUNS.filter(n => n.keywords?.includes('month')));
  headParts = computed(() => NOUNS.filter(n => n.keywords?.includes('head-part')));
}
