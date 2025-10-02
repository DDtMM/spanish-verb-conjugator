export interface VerbConjugation {
  conjugated: string;
}
export interface VerbConjugationWithSample {
  conjugated: string;
  sampleSentence: string;
  sampleTranslation: string;
}
export const CONJUGATION_CATEGORIES = ['yo', 'tu', 'elEllaUsted', 'nosotros', 'vosotros', 'ellosEllasUstedes'] as const;

export type ConjugationCategory = (typeof CONJUGATION_CATEGORIES)[number];

export const TENSES = ['present', 'preterite'] as const;

export type Tense = (typeof TENSES)[number];

export type TenseConjugations = {
  [key in ConjugationCategory]: VerbConjugation | VerbConjugationWithSample;
};

export type VerbBase = {
  infinitive: string;
  definition: string;
  isIrregular: boolean;
  irregularSummary?: string;
  isImportant: boolean;
};

export type Verb = VerbBase & {
  [key in Tense]: TenseConjugations;
};

export const VERBS: Verb[] = [
  {
    infinitive: 'bajar',
    definition: 'to go down, descend',
    isIrregular: false,
    isImportant: false,
    present: {
      yo: { conjugated: 'bajo', sampleSentence: 'Yo bajo las escaleras siempre muy rápido.', sampleTranslation: 'I always go down the stairs very fast.' },
      tu: { conjugated: 'bajas' },
      elEllaUsted: { conjugated: 'baja', sampleSentence: 'Usted baja con cuidado todos los días.', sampleTranslation: 'You go down carefully every day.' },
      nosotros: { conjugated: 'bajamos' },
      vosotros: { conjugated: 'bajáis' },
      ellosEllasUstedes: { conjugated: 'bajan', sampleSentence: 'Ustedes nunca bajan al sótano.', sampleTranslation: 'You all never go down to the basement.' }
    },
    preterite: {
      yo: { conjugated: 'bajé', sampleSentence: 'Yo bajé las escaleras muy rápido.', sampleTranslation: 'I went down the stairs very fast.' },
      tu: { conjugated: 'bajaste' },
      elEllaUsted: { conjugated: 'bajó', sampleSentence: 'Usted bajó siempre con cuidado.', sampleTranslation: 'You always went down carefully.' },
      nosotros: { conjugated: 'bajamos' },
      vosotros: { conjugated: 'bajasteis' },
      ellosEllasUstedes: { conjugated: 'bajaron', sampleSentence: 'Ustedes nunca bajaron al sótano.', sampleTranslation: 'You all never went down to the basement.' }
    }
  },
  {
    infinitive: 'buscar',
    definition: 'to look for',
    isIrregular: true,
    irregularSummary: 'c→qu in yo (preterite)',
    isImportant: false,
    present: {
      yo: { conjugated: 'busco', sampleSentence: 'Yo busco a alguien en la biblioteca.', sampleTranslation: 'I look for someone in the library.' },
      tu: { conjugated: 'buscas' },
      elEllaUsted: { conjugated: 'busca', sampleSentence: 'Usted también busca las llaves.', sampleTranslation: 'You also look for the keys.' },
      nosotros: { conjugated: 'buscamos' },
      vosotros: { conjugated: 'buscáis' },
      ellosEllasUstedes: { conjugated: 'buscan', sampleSentence: 'Ustedes nunca buscan nada tampoco.', sampleTranslation: 'You all never look for anything either.' }
    },
    preterite: {
      yo: { conjugated: 'busqué', sampleSentence: 'Yo busqué a alguien en la biblioteca.', sampleTranslation: 'I looked for someone in the library.' },
      tu: { conjugated: 'buscaste' },
      elEllaUsted: { conjugated: 'buscó', sampleSentence: 'Usted también buscó las llaves.', sampleTranslation: 'You also looked for the keys.' },
      nosotros: { conjugated: 'buscamos' },
      vosotros: { conjugated: 'buscasteis' },
      ellosEllasUstedes: { conjugated: 'buscaron', sampleSentence: 'Ustedes nunca buscaron nada tampoco.', sampleTranslation: 'You all never looked for anything either.' }
    }
  },
  {
    infinitive: 'correr',
    definition: 'to run',
    isIrregular: false,
    isImportant: false,
    present: {
      yo: { conjugated: 'corro', sampleSentence: 'Yo corro siempre en las mañanas.', sampleTranslation: 'I always run in the mornings.' },
      tu: { conjugated: 'corres' },
      elEllaUsted: { conjugated: 'corre', sampleSentence: 'Usted nunca corre en la lluvia.', sampleTranslation: 'You never run in the rain.' },
      nosotros: { conjugated: 'corremos' },
      vosotros: { conjugated: 'corréis' },
      ellosEllasUstedes: { conjugated: 'corren', sampleSentence: 'Ustedes corren también cada día.', sampleTranslation: 'You all also run every day.' }
    },
    preterite: {
      yo: { conjugated: 'corrí', sampleSentence: 'Yo corrí siempre en las mañanas.', sampleTranslation: 'I always ran in the mornings.' },
      tu: { conjugated: 'corriste' },
      elEllaUsted: { conjugated: 'corrió', sampleSentence: 'Usted nunca corrió en la lluvia.', sampleTranslation: 'You never ran in the rain.' },
      nosotros: { conjugated: 'corrimos' },
      vosotros: { conjugated: 'corristeis' },
      ellosEllasUstedes: { conjugated: 'corrieron', sampleSentence: 'Ustedes corrieron también ayer.', sampleTranslation: 'You all also ran yesterday.' }
    }
  },
  {
    infinitive: 'dar',
    definition: 'to give',
    isIrregular: true,
    irregularSummary: 'yo: doy (present), irregular preterite',
    isImportant: false,
    present: {
      yo: { conjugated: 'doy', sampleSentence: 'Yo doy regalos a todos.', sampleTranslation: 'I give gifts to everyone.' },
      tu: { conjugated: 'das' },
      elEllaUsted: { conjugated: 'da', sampleSentence: 'Usted no da nada a nadie.', sampleTranslation: 'You don\'t give anything to anyone.' },
      nosotros: { conjugated: 'damos' },
      vosotros: { conjugated: 'dais' },
      ellosEllasUstedes: { conjugated: 'dan', sampleSentence: 'Ustedes dan ayuda también.', sampleTranslation: 'You all also give help.' }
    },
    preterite: {
      yo: { conjugated: 'di', sampleSentence: 'Yo di regalos a todos.', sampleTranslation: 'I gave gifts to everyone.' },
      tu: { conjugated: 'diste' },
      elEllaUsted: { conjugated: 'dio', sampleSentence: 'Usted no dio nada a nadie.', sampleTranslation: 'You didn\'t give anything to anyone.' },
      nosotros: { conjugated: 'dimos' },
      vosotros: { conjugated: 'disteis' },
      ellosEllasUstedes: { conjugated: 'dieron', sampleSentence: 'Ustedes dieron ayuda también.', sampleTranslation: 'You all also gave help.' }
    }
  },
  {
    infinitive: 'decir',
    definition: 'to say/tell',
    isIrregular: true,
    irregularSummary: 'yo: digo, stem-change e→i, irregular preterite',
    isImportant: false,
    present: {
      yo: { conjugated: 'digo', sampleSentence: 'Yo digo siempre la verdad.', sampleTranslation: 'I always tell the truth.' },
      tu: { conjugated: 'dices' },
      elEllaUsted: { conjugated: 'dice', sampleSentence: 'Usted no dice nada tampoco.', sampleTranslation: 'You don\'t say anything either.' },
      nosotros: { conjugated: 'decimos' },
      vosotros: { conjugated: 'decís' },
      ellosEllasUstedes: { conjugated: 'dicen', sampleSentence: 'Ustedes dicen algo importante.', sampleTranslation: 'You all say something important.' }
    },
    preterite: {
      yo: { conjugated: 'dije', sampleSentence: 'Yo dije siempre la verdad.', sampleTranslation: 'I always told the truth.' },
      tu: { conjugated: 'dijiste' },
      elEllaUsted: { conjugated: 'dijo', sampleSentence: 'Usted no dijo nada tampoco.', sampleTranslation: 'You didn\'t say anything either.' },
      nosotros: { conjugated: 'dijimos' },
      vosotros: { conjugated: 'dijisteis' },
      ellosEllasUstedes: { conjugated: 'dijeron', sampleSentence: 'Ustedes dijeron algo importante.', sampleTranslation: 'You all said something important.' }
    }
  },
  {
    infinitive: 'dormir',
    definition: 'to sleep',
    isIrregular: true,
    irregularSummary: 'stem-change o→ue (present), o→u in 3rd person (preterite)',
    isImportant: false,
    present: {
      yo: { conjugated: 'duermo', sampleSentence: 'Yo duermo ya ocho horas.', sampleTranslation: 'I already sleep eight hours.' },
      tu: { conjugated: 'duermes' },
      elEllaUsted: { conjugated: 'duerme', sampleSentence: 'Usted nunca duerme en clase.', sampleTranslation: 'You never sleep in class.' },
      nosotros: { conjugated: 'dormimos' },
      vosotros: { conjugated: 'dormís' },
      ellosEllasUstedes: { conjugated: 'duermen', sampleSentence: 'Ustedes duermen siempre bien.', sampleTranslation: 'You all always sleep well.' }
    },
    preterite: {
      yo: { conjugated: 'dormí', sampleSentence: 'Yo dormí ya ocho horas.', sampleTranslation: 'I already slept eight hours.' },
      tu: { conjugated: 'dormiste' },
      elEllaUsted: { conjugated: 'durmió', sampleSentence: 'Usted nunca durmió en clase.', sampleTranslation: 'You never slept in class.' },
      nosotros: { conjugated: 'dormimos' },
      vosotros: { conjugated: 'dormisteis' },
      ellosEllasUstedes: { conjugated: 'durmieron', sampleSentence: 'Ustedes durmieron siempre bien.', sampleTranslation: 'You all always slept well.' }
    }
  },
  {
    infinitive: 'empezar',
    definition: 'to begin/start',
    isIrregular: true,
    irregularSummary: 'stem-change e→ie (present), z→c in yo (preterite)',
    isImportant: false,
    present: {
      yo: { conjugated: 'empiezo', sampleSentence: 'Yo empiezo temprano también.', sampleTranslation: 'I also start early.' },
      tu: { conjugated: 'empiezas' },
      elEllaUsted: { conjugated: 'empieza', sampleSentence: 'Usted nunca empieza el proyecto.', sampleTranslation: 'You never start the project.' },
      nosotros: { conjugated: 'empezamos' },
      vosotros: { conjugated: 'empezáis' },
      ellosEllasUstedes: { conjugated: 'empiezan', sampleSentence: 'Ustedes empiezan ya el trabajo.', sampleTranslation: 'You all already start the work.' }
    },
    preterite: {
      yo: { conjugated: 'empecé', sampleSentence: 'Yo empecé temprano también.', sampleTranslation: 'I also started early.' },
      tu: { conjugated: 'empezaste' },
      elEllaUsted: { conjugated: 'empezó', sampleSentence: 'Usted nunca empezó el proyecto.', sampleTranslation: 'You never started the project.' },
      nosotros: { conjugated: 'empezamos' },
      vosotros: { conjugated: 'empezasteis' },
      ellosEllasUstedes: { conjugated: 'empezaron', sampleSentence: 'Ustedes empezaron ya el trabajo.', sampleTranslation: 'You all already started the work.' }
    }
  },
  {
    infinitive: 'escribir',
    definition: 'to write',
    isIrregular: false,
    isImportant: false,
    present: {
      yo: { conjugated: 'escribo', sampleSentence: 'Yo escribo siempre con lápiz.', sampleTranslation: 'I always write with pencil.' },
      tu: { conjugated: 'escribes' },
      elEllaUsted: { conjugated: 'escribe', sampleSentence: 'Usted no escribe nada tampoco.', sampleTranslation: 'You don\'t write anything either.' },
      nosotros: { conjugated: 'escribimos' },
      vosotros: { conjugated: 'escribís' },
      ellosEllasUstedes: { conjugated: 'escriben', sampleSentence: 'Ustedes escriben algo importante.', sampleTranslation: 'You all write something important.' }
    },
    preterite: {
      yo: { conjugated: 'escribí', sampleSentence: 'Yo escribí siempre con lápiz.', sampleTranslation: 'I always wrote with pencil.' },
      tu: { conjugated: 'escribiste' },
      elEllaUsted: { conjugated: 'escribió', sampleSentence: 'Usted no escribió nada tampoco.', sampleTranslation: 'You didn\'t write anything either.' },
      nosotros: { conjugated: 'escribimos' },
      vosotros: { conjugated: 'escribisteis' },
      ellosEllasUstedes: { conjugated: 'escribieron', sampleSentence: 'Ustedes escribieron algo importante.', sampleTranslation: 'You all wrote something important.' }
    }
  },
  {
    infinitive: 'estar',
    definition: 'to be (temporary/location)',
    isIrregular: true,
    irregularSummary: 'yo: estoy (present), irregular preterite',
    isImportant: true,
    present: {
      yo: { conjugated: 'estoy', sampleSentence: 'Yo estoy siempre en casa.', sampleTranslation: 'I am always at home.' },
      tu: { conjugated: 'estás' },
      elEllaUsted: { conjugated: 'está', sampleSentence: 'Usted ya no está con alguien.', sampleTranslation: 'You are no longer with someone.' },
      nosotros: { conjugated: 'estamos' },
      vosotros: { conjugated: 'estáis' },
      ellosEllasUstedes: { conjugated: 'están', sampleSentence: 'Ustedes están también aquí.', sampleTranslation: 'You all are also here.' }
    },
    preterite: {
      yo: { conjugated: 'estuve', sampleSentence: 'Yo estuve siempre en casa.', sampleTranslation: 'I was always at home.' },
      tu: { conjugated: 'estuviste' },
      elEllaUsted: { conjugated: 'estuvo', sampleSentence: 'Usted ya no estuvo con alguien.', sampleTranslation: 'You were no longer with someone.' },
      nosotros: { conjugated: 'estuvimos' },
      vosotros: { conjugated: 'estuvisteis' },
      ellosEllasUstedes: { conjugated: 'estuvieron', sampleSentence: 'Ustedes estuvieron también aquí.', sampleTranslation: 'You all were also here.' }
    }
  },
  {
    infinitive: 'hablar',
    definition: 'to speak',
    isIrregular: false,
    isImportant: false,
    present: {
      yo: { conjugated: 'hablo', sampleSentence: 'Yo hablo siempre en español.', sampleTranslation: 'I always speak in Spanish.' },
      tu: { conjugated: 'hablas' },
      elEllaUsted: { conjugated: 'habla', sampleSentence: 'Usted no habla con nadie tampoco.', sampleTranslation: 'You don\'t speak with anyone either.' },
      nosotros: { conjugated: 'hablamos' },
      vosotros: { conjugated: 'habláis' },
      ellosEllasUstedes: { conjugated: 'hablan', sampleSentence: 'Ustedes hablan también cada día.', sampleTranslation: 'You all also speak every day.' }
    },
    preterite: {
      yo: { conjugated: 'hablé', sampleSentence: 'Yo hablé siempre en español.', sampleTranslation: 'I always spoke in Spanish.' },
      tu: { conjugated: 'hablaste' },
      elEllaUsted: { conjugated: 'habló', sampleSentence: 'Usted no habló con nadie tampoco.', sampleTranslation: 'You didn\'t speak with anyone either.' },
      nosotros: { conjugated: 'hablamos' },
      vosotros: { conjugated: 'hablasteis' },
      ellosEllasUstedes: { conjugated: 'hablaron', sampleSentence: 'Ustedes hablaron también ayer.', sampleTranslation: 'You all also spoke yesterday.' }
    }
  },
  {
    infinitive: 'hacer',
    definition: 'to do/make',
    isIrregular: true,
    irregularSummary: 'yo: hago (present), irregular preterite',
    isImportant: true,
    present: {
      yo: { conjugated: 'hago', sampleSentence: 'Yo hago también la tarea.', sampleTranslation: 'I also do the homework.' },
      tu: { conjugated: 'haces' },
      elEllaUsted: { conjugated: 'hace', sampleSentence: 'Usted nunca hace nada malo.', sampleTranslation: 'You never do anything bad.' },
      nosotros: { conjugated: 'hacemos' },
      vosotros: { conjugated: 'hacéis' },
      ellosEllasUstedes: { conjugated: 'hacen', sampleSentence: 'Ustedes hacen siempre algo bueno.', sampleTranslation: 'You all always do something good.' }
    },
    preterite: {
      yo: { conjugated: 'hice', sampleSentence: 'Yo hice también la tarea.', sampleTranslation: 'I also did the homework.' },
      tu: { conjugated: 'hiciste' },
      elEllaUsted: { conjugated: 'hizo', sampleSentence: 'Usted nunca hizo nada malo.', sampleTranslation: 'You never did anything bad.' },
      nosotros: { conjugated: 'hicimos' },
      vosotros: { conjugated: 'hicisteis' },
      ellosEllasUstedes: { conjugated: 'hicieron', sampleSentence: 'Ustedes hicieron siempre algo bueno.', sampleTranslation: 'You all always did something good.' }
    }
  },
  {
    infinitive: 'ir',
    definition: 'to go',
    isIrregular: true,
    irregularSummary: 'completely irregular',
    isImportant: true,
    present: {
      yo: { conjugated: 'voy', sampleSentence: 'Yo voy siempre solo.', sampleTranslation: 'I always go alone.' },
      tu: { conjugated: 'vas' },
      elEllaUsted: { conjugated: 'va', sampleSentence: 'Usted ya no va a nadie.', sampleTranslation: 'You no longer go to anyone.' },
      nosotros: { conjugated: 'vamos' },
      vosotros: { conjugated: 'vais' },
      ellosEllasUstedes: { conjugated: 'van', sampleSentence: 'Ustedes van también juntos.', sampleTranslation: 'You all also go together.' }
    },
    preterite: {
      yo: { conjugated: 'fui', sampleSentence: 'Yo fui siempre solo.', sampleTranslation: 'I always went alone.' },
      tu: { conjugated: 'fuiste' },
      elEllaUsted: { conjugated: 'fue', sampleSentence: 'Usted ya no fue a nadie.', sampleTranslation: 'You no longer went to anyone.' },
      nosotros: { conjugated: 'fuimos' },
      vosotros: { conjugated: 'fuisteis' },
      ellosEllasUstedes: { conjugated: 'fueron', sampleSentence: 'Ustedes fueron también juntos.', sampleTranslation: 'You all also went together.' }
    }
  },
  {
    infinitive: 'pagar',
    definition: 'to pay',
    isIrregular: true,
    irregularSummary: 'g→gu in yo (preterite)',
    isImportant: false,
    present: {
      yo: { conjugated: 'pago', sampleSentence: 'Yo pago siempre las cuentas.', sampleTranslation: 'I always pay the bills.' },
      tu: { conjugated: 'pagas' },
      elEllaUsted: { conjugated: 'paga', sampleSentence: 'Usted no paga nada tampoco.', sampleTranslation: 'You don\'t pay anything either.' },
      nosotros: { conjugated: 'pagamos' },
      vosotros: { conjugated: 'pagáis' },
      ellosEllasUstedes: { conjugated: 'pagan', sampleSentence: 'Ustedes pagan ya todo.', sampleTranslation: 'You all already pay everything.' }
    },
    preterite: {
      yo: { conjugated: 'pagué', sampleSentence: 'Yo pagué siempre las cuentas.', sampleTranslation: 'I always paid the bills.' },
      tu: { conjugated: 'pagaste' },
      elEllaUsted: { conjugated: 'pagó', sampleSentence: 'Usted no pagó nada tampoco.', sampleTranslation: 'You didn\'t pay anything either.' },
      nosotros: { conjugated: 'pagamos' },
      vosotros: { conjugated: 'pagasteis' },
      ellosEllasUstedes: { conjugated: 'pagaron', sampleSentence: 'Ustedes pagaron ya todo.', sampleTranslation: 'You all already paid everything.' }
    }
  },
  {
    infinitive: 'pedir',
    definition: 'to ask for / request',
    isIrregular: true,
    irregularSummary: 'stem-change e→i',
    isImportant: false,
    present: {
      yo: { conjugated: 'pido', sampleSentence: 'Yo pido ayuda a alguien.', sampleTranslation: 'I ask someone for help.' },
      tu: { conjugated: 'pides' },
      elEllaUsted: { conjugated: 'pide', sampleSentence: 'Usted nunca pide nada tampoco.', sampleTranslation: 'You never ask for anything either.' },
      nosotros: { conjugated: 'pedimos' },
      vosotros: { conjugated: 'pedís' },
      ellosEllasUstedes: { conjugated: 'piden', sampleSentence: 'Ustedes piden también comida.', sampleTranslation: 'You all also ask for food.' }
    },
    preterite: {
      yo: { conjugated: 'pedí', sampleSentence: 'Yo pedí ayuda a alguien.', sampleTranslation: 'I asked someone for help.' },
      tu: { conjugated: 'pediste' },
      elEllaUsted: { conjugated: 'pidió', sampleSentence: 'Usted nunca pidió nada tampoco.', sampleTranslation: 'You never asked for anything either.' },
      nosotros: { conjugated: 'pedimos' },
      vosotros: { conjugated: 'pedisteis' },
      ellosEllasUstedes: { conjugated: 'pidieron', sampleSentence: 'Ustedes pidieron también comida.', sampleTranslation: 'You all also asked for food.' }
    }
  },
  {
    infinitive: 'preferir',
    definition: 'to prefer',
    isIrregular: true,
    irregularSummary: 'stem-change e→ie (present), e→i in 3rd person (preterite)',
    isImportant: false,
    present: {
      yo: { conjugated: 'prefiero', sampleSentence: 'Yo prefiero siempre el té.', sampleTranslation: 'I always prefer tea.' },
      tu: { conjugated: 'prefieres' },
      elEllaUsted: { conjugated: 'prefiere', sampleSentence: 'Usted ya no prefiere a nadie.', sampleTranslation: 'You no longer prefer anyone.' },
      nosotros: { conjugated: 'preferimos' },
      vosotros: { conjugated: 'preferís' },
      ellosEllasUstedes: { conjugated: 'prefieren', sampleSentence: 'Ustedes prefieren también café.', sampleTranslation: 'You all also prefer coffee.' }
    },
    preterite: {
      yo: { conjugated: 'preferí', sampleSentence: 'Yo preferí siempre el té.', sampleTranslation: 'I always preferred tea.' },
      tu: { conjugated: 'preferiste' },
      elEllaUsted: { conjugated: 'prefirió', sampleSentence: 'Usted ya no prefirió a nadie.', sampleTranslation: 'You no longer preferred anyone.' },
      nosotros: { conjugated: 'preferimos' },
      vosotros: { conjugated: 'preferisteis' },
      ellosEllasUstedes: { conjugated: 'prefirieron', sampleSentence: 'Ustedes prefirieron también café.', sampleTranslation: 'You all also preferred coffee.' }
    }
  },
  {
    infinitive: 'ser',
    definition: 'to be (identity/origin)',
    isIrregular: true,
    irregularSummary: 'completely irregular',
    isImportant: true,
    present: {
      yo: { conjugated: 'soy', sampleSentence: 'Yo soy siempre buen estudiante.', sampleTranslation: 'I am always a good student.' },
      tu: { conjugated: 'eres' },
      elEllaUsted: { conjugated: 'es', sampleSentence: 'Usted nunca es nadie especial.', sampleTranslation: 'You are never anyone special.' },
      nosotros: { conjugated: 'somos' },
      vosotros: { conjugated: 'sois' },
      ellosEllasUstedes: { conjugated: 'son', sampleSentence: 'Ustedes son también buenos amigos.', sampleTranslation: 'You all are also good friends.' }
    },
    preterite: {
      yo: { conjugated: 'fui', sampleSentence: 'Yo fui siempre buen estudiante.', sampleTranslation: 'I was always a good student.' },
      tu: { conjugated: 'fuiste' },
      elEllaUsted: { conjugated: 'fue', sampleSentence: 'Usted nunca fue nadie especial.', sampleTranslation: 'You were never anyone special.' },
      nosotros: { conjugated: 'fuimos' },
      vosotros: { conjugated: 'fuisteis' },
      ellosEllasUstedes: { conjugated: 'fueron', sampleSentence: 'Ustedes fueron también buenos amigos.', sampleTranslation: 'You all were also good friends.' }
    }
  },
  {
    infinitive: 'tener',
    definition: 'to have',
    isIrregular: true,
    irregularSummary: 'yo: tengo, stem-change e→ie (present), irregular preterite',
    isImportant: true,
    present: {
      yo: { conjugated: 'tengo', sampleSentence: 'Yo tengo siempre buena suerte.', sampleTranslation: 'I always have good luck.' },
      tu: { conjugated: 'tienes' },
      elEllaUsted: { conjugated: 'tiene', sampleSentence: 'Usted no tiene nada tampoco.', sampleTranslation: 'You don\'t have anything either.' },
      nosotros: { conjugated: 'tenemos' },
      vosotros: { conjugated: 'tenéis' },
      ellosEllasUstedes: { conjugated: 'tienen', sampleSentence: 'Ustedes tienen también problemas.', sampleTranslation: 'You all also have problems.' }
    },
    preterite: {
      yo: { conjugated: 'tuve', sampleSentence: 'Yo tuve siempre buena suerte.', sampleTranslation: 'I always had good luck.' },
      tu: { conjugated: 'tuviste' },
      elEllaUsted: { conjugated: 'tuvo', sampleSentence: 'Usted no tuvo nada tampoco.', sampleTranslation: 'You didn\'t have anything either.' },
      nosotros: { conjugated: 'tuvimos' },
      vosotros: { conjugated: 'tuvisteis' },
      ellosEllasUstedes: { conjugated: 'tuvieron', sampleSentence: 'Ustedes tuvieron también problemas.', sampleTranslation: 'You all also had problems.' }
    }
  },
  {
    infinitive: 'ver',
    definition: 'to see',
    isIrregular: true,
    irregularSummary: 'yo: veo (present), irregular preterite',
    isImportant: true,
    present: {
      yo: { conjugated: 'veo', sampleSentence: 'Yo veo a alguien en la calle.', sampleTranslation: 'I see someone on the street.' },
      tu: { conjugated: 'ves' },
      elEllaUsted: { conjugated: 've', sampleSentence: 'Usted nunca ve nada tampoco.', sampleTranslation: 'You never see anything either.' },
      nosotros: { conjugated: 'vemos' },
      vosotros: { conjugated: 'veis' },
      ellosEllasUstedes: { conjugated: 'ven', sampleSentence: 'Ustedes ven también la película.', sampleTranslation: 'You all also see the movie.' }
    },
    preterite: {
      yo: { conjugated: 'vi', sampleSentence: 'Yo vi a alguien en la calle.', sampleTranslation: 'I saw someone on the street.' },
      tu: { conjugated: 'viste' },
      elEllaUsted: { conjugated: 'vio', sampleSentence: 'Usted nunca vio nada tampoco.', sampleTranslation: 'You never saw anything either.' },
      nosotros: { conjugated: 'vimos' },
      vosotros: { conjugated: 'visteis' },
      ellosEllasUstedes: { conjugated: 'vieron', sampleSentence: 'Ustedes vieron también la película.', sampleTranslation: 'You all also saw the movie.' }
    }
  },
  {
    infinitive: 'visitar',
    definition: 'to visit',
    isIrregular: false,
    isImportant: false,
    present: {
      yo: { conjugated: 'visito', sampleSentence: 'Yo visito siempre a los abuelos.', sampleTranslation: 'I always visit the grandparents.' },
      tu: { conjugated: 'visitas' },
      elEllaUsted: { conjugated: 'visita', sampleSentence: 'Usted ya no visita a nadie.', sampleTranslation: 'You no longer visit anyone.' },
      nosotros: { conjugated: 'visitamos' },
      vosotros: { conjugated: 'visitáis' },
      ellosEllasUstedes: { conjugated: 'visitan', sampleSentence: 'Ustedes visitan también el museo.', sampleTranslation: 'You all also visit the museum.' }
    },
    preterite: {
      yo: { conjugated: 'visité', sampleSentence: 'Yo visité siempre a los abuelos.', sampleTranslation: 'I always visited the grandparents.' },
      tu: { conjugated: 'visitaste' },
      elEllaUsted: { conjugated: 'visitó', sampleSentence: 'Usted ya no visitó a nadie.', sampleTranslation: 'You no longer visited anyone.' },
      nosotros: { conjugated: 'visitamos' },
      vosotros: { conjugated: 'visitasteis' },
      ellosEllasUstedes: { conjugated: 'visitaron', sampleSentence: 'Ustedes visitaron también el museo.', sampleTranslation: 'You all also visited the museum.' }
    }
  },
  {
    infinitive: 'vivir',
    definition: 'to live',
    isIrregular: false,
    isImportant: false,
    present: {
      yo: { conjugated: 'vivo', sampleSentence: 'Yo vivo siempre en España.', sampleTranslation: 'I always live in Spain.' },
      tu: { conjugated: 'vives' },
      elEllaUsted: { conjugated: 'vive', sampleSentence: 'Usted nunca vive con nadie.', sampleTranslation: 'You never live with anyone.' },
      nosotros: { conjugated: 'vivimos' },
      vosotros: { conjugated: 'vivís' },
      ellosEllasUstedes: { conjugated: 'viven', sampleSentence: 'Ustedes viven también aquí.', sampleTranslation: 'You all also live here.' }
    },
    preterite: {
      yo: { conjugated: 'viví', sampleSentence: 'Yo viví siempre en España.', sampleTranslation: 'I always lived in Spain.' },
      tu: { conjugated: 'viviste' },
      elEllaUsted: { conjugated: 'vivió', sampleSentence: 'Usted nunca vivió con nadie.', sampleTranslation: 'You never lived with anyone.' },
      nosotros: { conjugated: 'vivimos' },
      vosotros: { conjugated: 'vivisteis' },
      ellosEllasUstedes: { conjugated: 'vivieron', sampleSentence: 'Ustedes vivieron también aquí.', sampleTranslation: 'You all also lived here.' }
    }
  }
];