export interface Pronoun {
  spanish: string;
  definition: string; // Includes extra info like "(informal)"
  translation: string; // Raw English translation
}

export interface SubjectPronoun extends Pronoun {
  conjugationCategory: string; // Maps to CONJUGATION_CATEGORIES
}

export interface ObjectPronoun extends Pronoun {
  position: 'before' | 'after'; // Position relative to verb
}

export const SUBJECT_PRONOUNS: SubjectPronoun[] = [
  { spanish: 'yo', definition: 'I', translation: 'I', conjugationCategory: 'yo' },
  { spanish: 'tú', definition: 'you (informal)', translation: 'you', conjugationCategory: 'tu' },
  { spanish: 'él', definition: 'he', translation: 'he', conjugationCategory: 'elEllaUsted' },
  { spanish: 'ella', definition: 'she', translation: 'she', conjugationCategory: 'elEllaUsted' },
  { spanish: 'usted', definition: 'you (formal)', translation: 'you', conjugationCategory: 'elEllaUsted' },
  { spanish: 'nosotros', definition: 'we (masculine)', translation: 'we', conjugationCategory: 'nosotros' },
  { spanish: 'nosotras', definition: 'we (feminine)', translation: 'we', conjugationCategory: 'nosotros' },
  { spanish: 'vosotros', definition: 'you all (informal, masculine)', translation: 'you all', conjugationCategory: 'vosotros' },
  { spanish: 'vosotras', definition: 'you all (informal, feminine)', translation: 'you all', conjugationCategory: 'vosotros' },
  { spanish: 'ellos', definition: 'they (masculine)', translation: 'they', conjugationCategory: 'ellosEllasUstedes' },
  { spanish: 'ellas', definition: 'they (feminine)', translation: 'they', conjugationCategory: 'ellosEllasUstedes' },
  { spanish: 'ustedes', definition: 'you all (formal)', translation: 'you all', conjugationCategory: 'ellosEllasUstedes' }
];

export const INDIRECT_OBJECT_PRONOUNS: ObjectPronoun[] = [
  { spanish: 'me', definition: 'to/for me', translation: 'to me', position: 'before' },
  { spanish: 'te', definition: 'to/for you (informal)', translation: 'to you', position: 'before' },
  { spanish: 'le', definition: 'to/for him/her/you (formal)', translation: 'to him/her/you', position: 'before' },
  { spanish: 'nos', definition: 'to/for us', translation: 'to us', position: 'before' },
  { spanish: 'os', definition: 'to/for you all (informal)', translation: 'to you all', position: 'before' },
  { spanish: 'les', definition: 'to/for them/you all (formal)', translation: 'to them/you all', position: 'before' }
];

export const DIRECT_OBJECT_PRONOUNS: ObjectPronoun[] = [
  { spanish: 'me', definition: 'me', translation: 'me', position: 'before' },
  { spanish: 'te', definition: 'you (informal)', translation: 'you', position: 'before' },
  { spanish: 'lo', definition: 'him/it (masculine)/you (formal, masculine)', translation: 'him/it', position: 'before' },
  { spanish: 'la', definition: 'her/it (feminine)/you (formal, feminine)', translation: 'her/it', position: 'before' },
  { spanish: 'nos', definition: 'us', translation: 'us', position: 'before' },
  { spanish: 'os', definition: 'you all (informal)', translation: 'you all', position: 'before' },
  { spanish: 'los', definition: 'them (masculine)/you all (formal, masculine)', translation: 'them', position: 'before' },
  { spanish: 'las', definition: 'them (feminine)/you all (formal, feminine)', translation: 'them', position: 'before' }
];

// Simple verbs that work well with direct and indirect objects
export const SIMPLE_VERBS = [
  'dar', // to give
  'decir', // to say/tell
  'escribir', // to write
  'hacer', // to do/make
  'ver', // to see
  'buscar', // to look for
  'visitar', // to visit
  'tener' // to have
];