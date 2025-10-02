import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerbTableComponent } from '../components/verb-table.component';
import { VERBS, Verb } from '../verbs';

@Component({
  selector: 'app-present-tense',
  standalone: true,
  imports: [CommonModule, VerbTableComponent],
  template: `
    <!-- Page Header -->
    <h1 class="text-3xl md:text-4xl font-bold text-base-content mb-8">
      Spanish Study Guide – Present Tense
    </h1>

    <!-- Rules Section -->
    <div class="card bg-base-100 text-base-content shadow-lg mb-8">
      <div class="card-body">
        <h2 class="card-title text-2xl mb-4">
          How to Conjugate Regular Verbs in Present Tense
        </h2>
        
        <p class="text-base-content/80 leading-relaxed mb-6">
          The present tense is used to talk about current actions, habitual actions, and general truths. 
          Regular verbs follow predictable patterns based on their infinitive endings:
        </p>

        <div class="overflow-x-auto">
          <table class="table table-zebra w-full">
            <thead>
              <tr class="bg-neutral text-neutral-content">
                <th>Person</th>
                <th>-AR Verbs<br><small>(example: hablar)</small></th>
                <th>-ER Verbs<br><small>(example: correr)</small></th>
                <th>-IR Verbs<br><small>(example: vivir)</small></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="font-bold">yo</td>
                <td class="font-mono">-o<br><small>(hablo)</small></td>
                <td class="font-mono">-o<br><small>(corro)</small></td>
                <td class="font-mono">-o<br><small>(vivo)</small></td>
              </tr>
              <tr>
                <td class="font-bold">tú</td>
                <td class="font-mono">-as<br><small>(hablas)</small></td>
                <td class="font-mono">-es<br><small>(corres)</small></td>
                <td class="font-mono">-es<br><small>(vives)</small></td>
              </tr>
              <tr>
                <td class="font-bold">él/ella/usted</td>
                <td class="font-mono">-a<br><small>(habla)</small></td>
                <td class="font-mono">-e<br><small>(corre)</small></td>
                <td class="font-mono">-e<br><small>(vive)</small></td>
              </tr>
              <tr>
                <td class="font-bold">nosotros</td>
                <td class="font-mono">-amos<br><small>(hablamos)</small></td>
                <td class="font-mono">-emos<br><small>(corremos)</small></td>
                <td class="font-mono">-imos<br><small>(vivimos)</small></td>
              </tr>
              <tr>
                <td class="font-bold">vosotros</td>
                <td class="font-mono">-áis<br><small>(habláis)</small></td>
                <td class="font-mono">-éis<br><small>(corréis)</small></td>
                <td class="font-mono">-ís<br><small>(vivís)</small></td>
              </tr>
              <tr>
                <td class="font-bold">ellos/ellas/ustedes</td>
                <td class="font-mono">-an<br><small>(hablan)</small></td>
                <td class="font-mono">-en<br><small>(corren)</small></td>
                <td class="font-mono">-en<br><small>(viven)</small></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="alert alert-info mt-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div>
            <h3 class="font-bold">Steps to conjugate regular verbs:</h3>
            <ol class="list-decimal list-inside mt-2 space-y-1">
              <li>Remove the infinitive ending (-ar, -er, or -ir)</li>
              <li>Add the appropriate present tense ending from the table above</li>
              <li>Remember: -ER and -IR verbs are similar but have different endings in nosotros and vosotros!</li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <!-- Controls Section -->
    <div class="card bg-primary text-primary-content shadow-lg mb-8">
      <div class="card-body">
        <h2 class="card-title text-2xl mb-4">
          Verb Conjugations + Sample Sentences
        </h2>
        
        <div class="form-control w-fit">
          <label class="label cursor-pointer gap-3">
            <input 
              type="checkbox" 
              class="checkbox checkbox-primary"
              [checked]="showImportantOnly()" 
              (change)="toggleImportantOnly($event)"
            />
            <span class="label-text font-semibold">Show only important verbs</span>
          </label>
        </div>
      </div>
    </div>

    <!-- Verb Grid -->
    <div class="grid grid-cols-1 gap-5">
      @for (verb of filteredVerbs(); track verb.infinitive) {
        <app-verb-table [verb]="verb" tense="present"></app-verb-table>
      }
    </div>
  `
})
export class PresentTenseComponent {
  verbs = signal<Verb[]>(VERBS);
  showImportantOnly = signal<boolean>(false);

  filteredVerbs = signal<Verb[]>(this.verbs());

  toggleImportantOnly(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.showImportantOnly.set(checked);
    
    if (checked) {
      this.filteredVerbs.set(this.verbs().filter(verb => verb.isImportant));
    } else {
      this.filteredVerbs.set(this.verbs());
    }
  }
}