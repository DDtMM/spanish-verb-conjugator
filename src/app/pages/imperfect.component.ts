import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerbTableComponent } from '../components/verb-table.component';
import { VERBS, Verb } from '../verbs';

@Component({
  selector: 'app-imperfect',
  standalone: true,
  imports: [CommonModule, VerbTableComponent],
  template: `
    <!-- Page Header -->
    <h1 class="text-3xl md:text-4xl font-bold text-base-content mb-8">
      Spanish Study Guide – Imperfect Tense
    </h1>

    <!-- Rules Section -->
    <div class="card bg-base-100 text-base-content shadow-lg mb-8">
      <div class="card-body">
        <h2 class="card-title text-2xl mb-4">
          How to Conjugate Regular Verbs in Imperfect Tense
        </h2>
        
        <p class="text-base-content/80 leading-relaxed mb-6">
          The imperfect tense is used to describe past actions that were habitual, ongoing, or didn't have a definite end. 
          It's often translated as "used to" or "was/were doing" in English.
          Regular verbs follow predictable patterns based on their infinitive endings:
        </p>

        <div class="overflow-x-auto">
          <table class="table table-zebra w-full">
            <thead>
              <tr class="bg-neutral text-neutral-content">
                <th>Person</th>
                <th>-AR Verbs<br><small>(example: hablar)</small></th>
                <th>-ER & -IR Verbs<br><small>(examples: correr, vivir)</small></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="font-bold">yo</td>
                <td class="font-mono">-aba<br><small>(hablaba)</small></td>
                <td class="font-mono">-ía<br><small>(corría, vivía)</small></td>
              </tr>
              <tr>
                <td class="font-bold">tú</td>
                <td class="font-mono">-abas<br><small>(hablabas)</small></td>
                <td class="font-mono">-ías<br><small>(corrías, vivías)</small></td>
              </tr>
              <tr>
                <td class="font-bold">él/ella/usted</td>
                <td class="font-mono">-aba<br><small>(hablaba)</small></td>
                <td class="font-mono">-ía<br><small>(corría, vivía)</small></td>
              </tr>
              <tr>
                <td class="font-bold">nosotros</td>
                <td class="font-mono">-ábamos<br><small>(hablábamos)</small></td>
                <td class="font-mono">-íamos<br><small>(corríamos, vivíamos)</small></td>
              </tr>
              <tr>
                <td class="font-bold">vosotros</td>
                <td class="font-mono">-abais<br><small>(hablabais)</small></td>
                <td class="font-mono">-íais<br><small>(corríais, vivíais)</small></td>
              </tr>
              <tr>
                <td class="font-bold">ellos/ellas/ustedes</td>
                <td class="font-mono">-aban<br><small>(hablaban)</small></td>
                <td class="font-mono">-ían<br><small>(corrían, vivían)</small></td>
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
              <li>Add the appropriate imperfect ending from the table above</li>
              <li>Remember: -ER and -IR verbs use the same endings!</li>
              <li>Only three verbs are irregular: ser (era), ir (iba), and ver (veía)</li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <!-- Controls Section -->
    <div class="card bg-accent text-accent-content shadow-lg mb-8">
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
        <app-verb-table [verb]="verb" tense="imperfect"></app-verb-table>
      }
    </div>
  `
})
export class ImperfectComponent {
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
