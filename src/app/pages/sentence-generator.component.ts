import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  SUBJECT_PRONOUNS, 
  INDIRECT_OBJECT_PRONOUNS, 
  DIRECT_OBJECT_PRONOUNS, 
  SIMPLE_VERBS,
  SubjectPronoun,
  ObjectPronoun 
} from '../words/pronouns';
import { VERBS, ConjugationCategory, Verb } from '../words/verbs';

interface GeneratedSentence {
  spanish: string;
  english: string;
}

@Component({
  selector: 'app-sentence-generator',
  imports: [CommonModule],
  template: `
    <!-- Page Header -->
    <h1 class="text-3xl md:text-4xl font-bold text-base-content mb-8">
      Direct Object Sentence Generator
    </h1>

    <!-- Instructions -->
    <div class="card bg-base-100 text-base-content shadow-lg mb-8">
      <div class="card-body">
        <h2 class="card-title text-2xl mb-4">
          How It Works
        </h2>
        <p class="text-base-content/80 leading-relaxed mb-4">
          Use the dropdowns below to create Spanish sentences with optional direct objects. 
          You can create simple sentences with just a subject and verb, or add direct object pronouns for more complex constructions.
        </p>
        <div class="alert alert-info">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div>
            <p><strong>Remember:</strong> In Spanish, direct object pronouns come before the conjugated verb!</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Sentence Generator Controls -->
    <div class="card bg-primary text-primary-content shadow-lg mb-8">
      <div class="card-body">
        <h2 class="card-title text-2xl mb-6">Build Your Sentence</h2>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <!-- Subject Dropdown -->
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text font-semibold">Subject</span>
            </label>
            <select 
              class="select select-bordered w-full text-base-content" 
              [value]="selectedSubject()?.spanish || ''"
              (change)="onSubjectChange($event)"
            >
              <option value="" disabled>Choose subject</option>
              @for (subject of subjectPronouns; track subject.spanish) {
                <option [value]="subject.spanish">
                  {{ subject.spanish }} - {{ subject.definition }}
                </option>
              }
            </select>
          </div>

          <!-- Direct Object Dropdown -->
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text font-semibold">Direct Object (Optional)</span>
            </label>
            <select 
              class="select select-bordered w-full text-base-content" 
              [value]="selectedDirectObject()?.spanish || ''"
              (change)="onDirectObjectChange($event)"
            >
              <option value="">None</option>
              @for (obj of directObjectPronouns; track obj.spanish) {
                <option [value]="obj.spanish">
                  {{ obj.spanish }} - {{ obj.definition }}
                </option>
              }
            </select>
          </div>

          <!-- Verb Dropdown -->
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text font-semibold">Verb</span>
            </label>
            <select 
              class="select select-bordered w-full text-base-content" 
              [value]="selectedVerb()?.infinitive || ''"
              (change)="onVerbChange($event)"
            >
              <option value="" disabled>Choose verb</option>
              @for (verb of availableVerbs; track verb.infinitive) {
                <option [value]="verb.infinitive">
                  {{ verb.infinitive }} - {{ verb.definition }}
                </option>
              }
            </select>
          </div>
        </div>

        <!-- Tense Selection -->
        <div class="form-control w-fit">
          <label class="label">
            <span class="label-text font-semibold">Tense</span>
          </label>
          <div class="flex gap-4">
            <label class="label cursor-pointer gap-2">
              <input 
                type="radio" 
                name="tense" 
                class="radio radio-primary" 
                value="present"
                [checked]="selectedTense() === 'present'"
                (change)="onTenseChange($event)"
              />
              <span class="label-text">Present</span>
            </label>
            <label class="label cursor-pointer gap-2">
              <input 
                type="radio" 
                name="tense" 
                class="radio radio-primary" 
                value="preterite"
                [checked]="selectedTense() === 'preterite'"
                (change)="onTenseChange($event)"
              />
              <span class="label-text">Preterite</span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <!-- Generated Sentence Display -->
    @if (generatedSentence()) {
      <div class="card bg-success text-success-content shadow-lg mb-8">
        <div class="card-body text-center">
          <h2 class="card-title text-2xl justify-center mb-4">Your Sentence</h2>
          
          <div class="space-y-4">
            <div class="text-3xl font-bold">
              {{ generatedSentence()!.spanish }}
            </div>
            <div class="text-xl italic">
              {{ generatedSentence()!.english }}
            </div>
          </div>

          <!-- Breakdown -->
          <div class="divider"></div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            @if (selectedSubject()) {
              <div class="bg-white/20 p-3 rounded">
                <div class="font-bold">Subject</div>
                <div>{{ selectedSubject()!.spanish }}</div>
                <div class="italic">{{ selectedSubject()!.definition }}</div>
              </div>
            }
            
            @if (selectedDirectObject()) {
              <div class="bg-white/20 p-3 rounded">
                <div class="font-bold">Direct Object</div>
                <div>{{ selectedDirectObject()!.spanish }}</div>
                <div class="italic">{{ selectedDirectObject()!.definition }}</div>
              </div>
            }
            
            @if (conjugatedVerb()) {
              <div class="bg-white/20 p-3 rounded">
                <div class="font-bold">Verb ({{ selectedTense() }})</div>
                <div>{{ conjugatedVerb() }}</div>
                <div class="italic">{{ selectedVerb()!.definition }}</div>
              </div>
            }
          </div>
        </div>
      </div>
    }

    <!-- Help Section -->
    <div class="card bg-base-100 text-base-content shadow-lg">
      <div class="card-body">
        <h2 class="card-title text-2xl mb-4">
          Direct Object Pronoun Reference
        </h2>
        
        <div class="max-w-md mx-auto">
          <!-- Direct Object Pronouns -->
          <div>
            <h3 class="text-lg font-bold mb-3">Direct Object Pronouns</h3>
            <div class="overflow-x-auto">
              <table class="table table-zebra w-full text-sm">
                <thead>
                  <tr class="bg-neutral text-neutral-content">
                    <th>Spanish</th>
                    <th>English</th>
                  </tr>
                </thead>
                <tbody>
                  @for (pronoun of directObjectPronouns; track pronoun.spanish) {
                    <tr>
                      <td class="font-mono">{{ pronoun.spanish }}</td>
                      <td>{{ pronoun.definition }}</td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class SentenceGeneratorComponent {
  readonly subjectPronouns = SUBJECT_PRONOUNS;
  readonly directObjectPronouns = DIRECT_OBJECT_PRONOUNS;
  readonly availableVerbs = VERBS.filter(verb => SIMPLE_VERBS.includes(verb.infinitive));

  readonly selectedSubject = signal<SubjectPronoun | null>(null);
  readonly selectedDirectObject = signal<ObjectPronoun | null>(null);
  readonly selectedVerb = signal<Verb | null>(null);
  readonly selectedTense = signal<'present' | 'preterite'>('present');

  readonly conjugatedVerb = computed(() => {
    const verb = this.selectedVerb();
    const subject = this.selectedSubject();
    const tense = this.selectedTense();
    
    if (!verb || !subject) return null;
    
    const conjugationCategory = subject.conjugationCategory as ConjugationCategory;
    return verb[tense][conjugationCategory].conjugated;
  });

  // Helper function to get clean English verb definition
  private getCleanVerbDefinition(verb: Verb): string {
    // Remove "to " prefix and take first option before any slash
    let definition = verb.definition;
    if (definition.startsWith('to ')) {
      definition = definition.substring(3);
    }
    return definition.split('/')[0].trim();
  }

  // Helper function to get appropriate English verb form based on subject
  private getEnglishVerbForm(verb: Verb, subject: SubjectPronoun): string {
    const baseVerb = this.getCleanVerbDefinition(verb);
    
    // For third person singular (he/she/it) in present tense, add 's' to most verbs
    if (this.selectedTense() === 'present' && 
        (subject.spanish === 'él' || subject.spanish === 'ella' || subject.spanish === 'usted')) {
      
      // Handle irregular verbs
      if (baseVerb === 'be') return 'is';
      if (baseVerb === 'have') return 'has';
      if (baseVerb === 'do') return 'does';
      if (baseVerb === 'go') return 'goes';
      if (baseVerb === 'say') return 'says';
      
      // Regular verbs - add 's'
      if (baseVerb.endsWith('s') || baseVerb.endsWith('sh') || baseVerb.endsWith('ch') || 
          baseVerb.endsWith('x') || baseVerb.endsWith('z')) {
        return baseVerb + 'es';
      }
      if (baseVerb.endsWith('y') && !'aeiou'.includes(baseVerb[baseVerb.length - 2])) {
        return baseVerb.slice(0, -1) + 'ies';
      }
      return baseVerb + 's';
    }
    
    // For past tense, we need past forms
    if (this.selectedTense() === 'preterite') {
      if (baseVerb === 'be') {
        return (subject.spanish === 'yo' || subject.spanish === 'él' || 
                subject.spanish === 'ella' || subject.spanish === 'usted') ? 'was' : 'were';
      }
      if (baseVerb === 'have') return 'had';
      if (baseVerb === 'do') return 'did';
      if (baseVerb === 'go') return 'went';
      if (baseVerb === 'give') return 'gave';
      if (baseVerb === 'see') return 'saw';
      if (baseVerb === 'say') return 'said';
      if (baseVerb === 'make') return 'made';
      if (baseVerb === 'write') return 'wrote';
      if (baseVerb === 'sleep') return 'slept';
      if (baseVerb === 'begin') return 'began';
      if (baseVerb === 'start') return 'started';
      if (baseVerb === 'speak') return 'spoke';
      if (baseVerb === 'run') return 'ran';
      if (baseVerb === 'live') return 'lived';
      if (baseVerb === 'visit') return 'visited';
      if (baseVerb === 'look for') return 'looked for';
      if (baseVerb === 'pay') return 'paid';
      if (baseVerb === 'ask for') return 'asked for';
      if (baseVerb === 'prefer') return 'preferred';
      if (baseVerb === 'go down') return 'went down';
      if (baseVerb === 'descend') return 'descended';
      
      // Regular past tense - add 'ed'
      if (baseVerb.endsWith('e')) return baseVerb + 'd';
      if (baseVerb.endsWith('y') && !'aeiou'.includes(baseVerb[baseVerb.length - 2])) {
        return baseVerb.slice(0, -1) + 'ied';
      }
      return baseVerb + 'ed';
    }
    
    return baseVerb;
  }

  readonly generatedSentence = computed((): GeneratedSentence | null => {
    const subject = this.selectedSubject();
    const directObj = this.selectedDirectObject();
    const verb = this.selectedVerb();
    const conjugated = this.conjugatedVerb();

    if (!subject || !verb || !conjugated) {
      return null;
    }

    // Build Spanish sentence
    let spanish = subject.spanish;
    
    // Add direct object pronoun before the verb if present
    if (directObj) {
      spanish += ` ${directObj.spanish}`;
    }
    
    spanish += ` ${conjugated}.`;

    // Build English sentence
    let english = subject.translation;
    const englishVerb = this.getEnglishVerbForm(verb, subject);
    english += ` ${englishVerb}`;
    
    // Add direct object if present
    if (directObj) {
      english += ` ${directObj.translation}`;
    }
    
    // For sentences without objects, make them more natural
    if (!directObj) {
      // Add appropriate context for verbs that typically need objects
      const baseVerb = this.getCleanVerbDefinition(verb);
      if (baseVerb === 'give' || baseVerb === 'write' || baseVerb === 'make' || 
          baseVerb === 'look for' || baseVerb === 'ask for' || baseVerb === 'visit') {
        english += ' something';
      }
    }
    
    english += '.';

    return {
      spanish: spanish,
      english: english
    };
  });

  onSubjectChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    const subject = this.subjectPronouns.find(s => s.spanish === value);
    this.selectedSubject.set(subject || null);
  }

  onDirectObjectChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    const obj = value ? this.directObjectPronouns.find(o => o.spanish === value) : null;
    this.selectedDirectObject.set(obj || null);
  }

  onVerbChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    const verb = this.availableVerbs.find(v => v.infinitive === value);
    this.selectedVerb.set(verb || null);
  }

  onTenseChange(event: Event) {
    const value = (event.target as HTMLInputElement).value as 'present' | 'preterite';
    this.selectedTense.set(value);
  }
}