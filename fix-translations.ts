import * as fs from 'fs';
import * as path from 'path';

// Read the current verbs file
const filePath = path.join(__dirname, 'src', 'app', 'verbs.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// Verb data with correct English translations
const verbData = [
  { infinitive: 'bajar', baseVerb: 'go down', pastVerb: 'went down' },
  { infinitive: 'acostarse', baseVerb: 'go to bed', pastVerb: 'went to bed' },
  { infinitive: 'aprender', baseVerb: 'learn', pastVerb: 'learned' },
  { infinitive: 'buscar', baseVerb: 'look for', pastVerb: 'looked for' },
  { infinitive: 'comer', baseVerb: 'eat', pastVerb: 'ate' },
  { infinitive: 'comprar', baseVerb: 'buy', pastVerb: 'bought' },
  { infinitive: 'correr', baseVerb: 'run', pastVerb: 'ran' },
  { infinitive: 'dar', baseVerb: 'give', pastVerb: 'gave' },
  { infinitive: 'decir', baseVerb: 'say', pastVerb: 'said' },
  { infinitive: 'dormir', baseVerb: 'sleep', pastVerb: 'slept' },
  { infinitive: 'empezar', baseVerb: 'begin', pastVerb: 'began' },
  { infinitive: 'encontrar', baseVerb: 'find', pastVerb: 'found' },
  { infinitive: 'escribir', baseVerb: 'write', pastVerb: 'wrote' },
  { infinitive: 'estar', baseVerb: 'am/are', pastVerb: 'was/were' },
  { infinitive: 'hablar', baseVerb: 'speak', pastVerb: 'spoke' },
  { infinitive: 'hacer', baseVerb: 'do/make', pastVerb: 'did/made' },
  { infinitive: 'ir', baseVerb: 'go', pastVerb: 'went' },
  { infinitive: 'invitar', baseVerb: 'invite', pastVerb: 'invited' },
  { infinitive: 'pagar', baseVerb: 'pay', pastVerb: 'paid' },
  { infinitive: 'pedir', baseVerb: 'ask for', pastVerb: 'asked for' },
  { infinitive: 'preferir', baseVerb: 'prefer', pastVerb: 'preferred' },
  { infinitive: 'ser', baseVerb: 'am/are', pastVerb: 'was/were' },
  { infinitive: 'tener', baseVerb: 'have', pastVerb: 'had' },
  { infinitive: 'ver', baseVerb: 'see', pastVerb: 'saw' },
  { infinitive: 'visitar', baseVerb: 'visit', pastVerb: 'visited' },
  { infinitive: 'vivir', baseVerb: 'live', pastVerb: 'lived' }
];

// Generate English translation
function getEnglishTranslation(baseVerb: string, pastVerb: string, pronoun: string, tense: string): string {
  const pronounMap: Record<string, string> = {
    yo: 'I',
    tu: 'you',
    elEllaUsted: 'he/she',
    nosotros: 'we',
    vosotros: 'you all',
    ellosEllasUstedes: 'they'
  };
  
  const subject = pronounMap[pronoun];
  
  // Handle special verbs
  if (baseVerb === 'am/are') {
    if (tense === 'present') {
      if (pronoun === 'yo') return 'I am';
      if (pronoun === 'tu') return 'you are';
      if (pronoun === 'elEllaUsted') return 'he/she is';
      if (pronoun === 'nosotros') return 'we are';
      if (pronoun === 'vosotros') return 'you all are';
      if (pronoun === 'ellosEllasUstedes') return 'they are';
    } else if (tense === 'preterite') {
      if (pronoun === 'yo' || pronoun === 'tu' || pronoun === 'elEllaUsted') return `${subject} was`;
      return `${subject} were`;
    } else { // imperfect
      if (pronoun === 'yo' || pronoun === 'tu' || pronoun === 'elEllaUsted') return `${subject} used to be`;
      return `${subject} used to be`;
    }
  }
  
  if (baseVerb === 'have') {
    if (tense === 'present') {
      return pronoun === 'elEllaUsted' ? `${subject} has` : `${subject} have`;
    } else if (tense === 'preterite') {
      return `${subject} had`;
    } else {
      return `${subject} used to have`;
    }
  }
  
  if (baseVerb === 'do/make') {
    if (tense === 'present') {
      return pronoun === 'elEllaUsted' ? `${subject} does/makes` : `${subject} do/make`;
    } else if (tense === 'preterite') {
      return `${subject} did/made`;
    } else {
      return `${subject} used to do/make`;
    }
  }
  
  if (tense === 'present') {
    // Add 's' for third person singular
    if (pronoun === 'elEllaUsted') {
      // Handle special cases
      if (baseVerb === 'go') return `${subject} goes`;
      if (baseVerb === 'do') return `${subject} does`;
      if (baseVerb.endsWith(' for')) return `${subject} ${baseVerb.replace(/ for$/, 's for')}`;
      if (baseVerb.endsWith(' to bed')) return `${subject} ${baseVerb.replace(/ to bed$/, 's to bed')}`;
      if (baseVerb.endsWith(' down')) return `${subject} ${baseVerb.replace(/ down$/, 's down')}`;
      if (baseVerb.endsWith('y') && !['ay', 'ey', 'oy', 'uy'].some(v => baseVerb.endsWith(v))) {
        return `${subject} ${baseVerb.slice(0, -1)}ies`;
      }
      if (baseVerb.endsWith('s') || baseVerb.endsWith('sh') || baseVerb.endsWith('ch') || baseVerb.endsWith('x') || baseVerb.endsWith('o')) {
        return `${subject} ${baseVerb}es`;
      }
      return `${subject} ${baseVerb}s`;
    }
    return `${subject} ${baseVerb}`;
  } else if (tense === 'preterite') {
    return `${subject} ${pastVerb}`;
  } else { // imperfect
    return `${subject} used to ${baseVerb}`;
  }
}

// Process each verb
verbData.forEach((verb) => {
  const { infinitive, baseVerb, pastVerb } = verb;
  
  // Find the verb section in the content
  const verbRegex = new RegExp(`infinitive: '${infinitive}',[\\s\\S]*?(?=infinitive:|$)`, 'm');
  const verbMatch = content.match(verbRegex);
  
  if (!verbMatch) {
    console.log(`Could not find verb: ${infinitive}`);
    return;
  }
  
  let verbSection = verbMatch[0];
  const originalVerbSection = verbSection;
  
  // Process each tense and pronoun
  const tenses = ['present', 'preterite', 'imperfect'];
  const pronouns = ['yo', 'tu', 'elEllaUsted', 'nosotros', 'vosotros', 'ellosEllasUstedes'];
  
  tenses.forEach(tense => {
    pronouns.forEach(pronoun => {
      const englishTranslation = getEnglishTranslation(baseVerb, pastVerb, pronoun, tense);
      
      // Pattern to match: pronoun: { conjugated: 'xxx', englishTranslation: '...', sampleSentence
      // We want to replace the englishTranslation value if it exists and is wrong
      const pattern1 = new RegExp(
        `(${pronoun}:\\s*{\\s*conjugated:\\s*'[^']+',\\s*)englishTranslation:\\s*'[^']*',\\s*(sampleSentence:)`,
        ''
      );
      
      if (pattern1.test(verbSection)) {
        // Replace existing englishTranslation
        verbSection = verbSection.replace(pattern1, `$1englishTranslation: '${englishTranslation}', $2`);
      }
    });
  });
  
  // Replace the verb section in the content
  content = content.replace(originalVerbSection, verbSection);
});

// Write the updated content back
fs.writeFileSync(filePath, content, 'utf-8');

console.log('All English translations have been corrected!');
