import * as fs from 'fs';
import * as path from 'path';

// Helper function to conjugate English verbs
function conjugateEnglish(definition: string, pronoun: string, tense: 'present' | 'preterite' | 'imperfect'): string {
  // Remove "to " from the definition
  const baseVerb = definition.replace(/^to\s+/, '');
  
  const pronounMap: Record<string, string> = {
    yo: 'I',
    tu: 'you',
    elEllaUsted: 'he/she',
    nosotros: 'we',
    vosotros: 'you all',
    ellosEllasUstedes: 'they'
  };
  
  const subject = pronounMap[pronoun];
  
  if (tense === 'present') {
    // Simple present
    if (pronoun === 'elEllaUsted') {
      // Add 's' for third person singular, handle special cases
      if (baseVerb.endsWith('y') && !['ay', 'ey', 'oy', 'uy'].some(v => baseVerb.endsWith(v))) {
        return `${subject} ${baseVerb.slice(0, -1)}ies`;
      } else if (baseVerb.endsWith('s') || baseVerb.endsWith('sh') || baseVerb.endsWith('ch') || baseVerb.endsWith('x') || baseVerb.endsWith('o')) {
        return `${subject} ${baseVerb}es`;
      } else if (baseVerb === 'have') {
        return `${subject} has`;
      } else if (baseVerb === 'be') {
        return `${subject} is`;
      } else if (baseVerb === 'do') {
        return `${subject} does`;
      } else if (baseVerb === 'go') {
        return `${subject} goes`;
      } else {
        return `${subject} ${baseVerb}s`;
      }
    } else if (baseVerb === 'be') {
      if (pronoun === 'yo') return 'I am';
      if (pronoun === 'tu') return 'you are';
      if (pronoun === 'nosotros') return 'we are';
      if (pronoun === 'vosotros') return 'you all are';
      if (pronoun === 'ellosEllasUstedes') return 'they are';
    }
    return `${subject} ${baseVerb}`;
  } else if (tense === 'preterite') {
    // Simple past
    let pastForm = baseVerb;
    
    // Handle irregular verbs
    const irregularPast: Record<string, string> = {
      'be': pronoun === 'yo' || pronoun === 'tu' || pronoun === 'elEllaUsted' ? 'was' : 'were',
      'have': 'had',
      'do': 'did',
      'go': 'went',
      'see': 'saw',
      'say': 'said',
      'tell': 'told',
      'give': 'gave',
      'make': 'made',
      'speak': 'spoke',
      'write': 'wrote',
      'run': 'ran',
      'sleep': 'slept',
      'find': 'found',
      'eat': 'ate',
      'buy': 'bought',
      'pay': 'paid',
      'begin': 'began',
      'start': 'started',
      'prefer': 'preferred'
    };
    
    if (irregularPast[baseVerb]) {
      pastForm = irregularPast[baseVerb];
    } else if (baseVerb.endsWith('e')) {
      pastForm = baseVerb + 'd';
    } else if (baseVerb.endsWith('y') && !['ay', 'ey', 'oy', 'uy'].some(v => baseVerb.endsWith(v))) {
      pastForm = baseVerb.slice(0, -1) + 'ied';
    } else {
      pastForm = baseVerb + 'ed';
    }
    
    return `${subject} ${pastForm}`;
  } else { // imperfect
    // "used to" form
    return `${subject} used to ${baseVerb}`;
  }
}

// Process the verb file
const filePath = path.join(__dirname, 'src', 'app', 'verbs.ts');
const content = fs.readFileSync(filePath, 'utf-8');

// Parse out each verb's definition
const verbDefinitions: Record<string, string> = {
  'bajar': 'to go down',
  'acostarse': 'to go to bed',
  'aprender': 'to learn',
  'buscar': 'to look for',
  'comer': 'to eat',
  'comprar': 'to buy',
  'correr': 'to run',
  'dar': 'to give',
  'decir': 'to say',
  'dormir': 'to sleep',
  'empezar': 'to begin',
  'encontrar': 'to find',
  'escribir': 'to write',
  'estar': 'to be',
  'hablar': 'to speak',
  'hacer': 'to do',
  'ir': 'to go',
  'invitar': 'to invite',
  'pagar': 'to pay',
  'pedir': 'to ask for',
  'preferir': 'to prefer',
  'ser': 'to be',
  'tener': 'to have',
  'ver': 'to see',
  'visitar': 'to visit',
  'vivir': 'to live'
};

let newContent = content;

// For each verb, add englishTranslation where missing
const pronouns = ['yo', 'tu', 'elEllaUsted', 'nosotros', 'vosotros', 'ellosEllasUstedes'];
const tenses: Array<'present' | 'preterite' | 'imperfect'> = ['present', 'preterite', 'imperfect'];

Object.entries(verbDefinitions).forEach(([infinitive, definition]) => {
  tenses.forEach(tense => {
    pronouns.forEach(pronoun => {
      // Create the English translation
      const englishTranslation = conjugateEnglish(definition, pronoun, tense);
      
      // Find and replace pattern: conjugated: 'XXX', sampleSentence
      // Replace with: conjugated: 'XXX', englishTranslation: 'YYY', sampleSentence
      const pattern = new RegExp(
        `(${pronoun}:\\s*{\\s*conjugated:\\s*'[^']+',)\\s*(sampleSentence:)`,
        'g'
      );
      
      newContent = newContent.replace(pattern, (match, before, after) => {
        // Check if englishTranslation already exists
        if (before.includes('englishTranslation')) {
          return match;
        }
        return `${before} englishTranslation: '${englishTranslation}', ${after}`;
      });
    });
  });
});

// Write the updated content
fs.writeFileSync(filePath, newContent, 'utf-8');

console.log('English translations added successfully!');
