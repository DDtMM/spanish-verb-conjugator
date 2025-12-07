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

export const TENSES = ['present', 'preterite', 'imperfect'] as const;

export type Tense = (typeof TENSES)[number];

export type TenseConjugations = {
  [key in ConjugationCategory]: VerbConjugation | VerbConjugationWithSample;
} & {
  isIrregular?: boolean;
  irregularDescription?: string;
};

export type VerbBase = {
  infinitive: string;
  definition: string;
  isImportant: boolean;
};

export type Verb = VerbBase & {
  [key in Tense]: TenseConjugations;
};

export const VERBS: Verb[] = [
  {
    infinitive: 'bajar',
    definition: 'to go down, descend',
    isImportant: false,
    present: {
      yo: { conjugated: 'bajo', sampleSentence: 'Yo bajo las escaleras siempre muy rápido.', sampleTranslation: 'I always go down the stairs very fast.' },
      tu: { conjugated: 'bajas', sampleSentence: 'Tú bajas muy despacio cada mañana.', sampleTranslation: 'You go down very slowly every morning.' },
      elEllaUsted: { conjugated: 'baja', sampleSentence: 'Usted baja con cuidado todos los días.', sampleTranslation: 'You go down carefully every day.' },
      nosotros: { conjugated: 'bajamos', sampleSentence: 'Nosotros bajamos todos los días.', sampleTranslation: 'We go down every day.' },
      vosotros: { conjugated: 'bajáis', sampleSentence: 'Vosotros bajáis siempre juntos.', sampleTranslation: 'You all always go down together.' },
      ellosEllasUstedes: { conjugated: 'bajan', sampleSentence: 'Ustedes nunca bajan al sótano.', sampleTranslation: 'You all never go down to the basement.' }
    },
    preterite: {
      yo: { conjugated: 'bajé', sampleSentence: 'Yo bajé las escaleras muy rápido.', sampleTranslation: 'I went down the stairs very fast.' },
      tu: { conjugated: 'bajaste', sampleSentence: 'Tú bajaste muy despacio ayer.', sampleTranslation: 'You went down very slowly yesterday.' },
      elEllaUsted: { conjugated: 'bajó', sampleSentence: 'Usted bajó siempre con cuidado.', sampleTranslation: 'You always went down carefully.' },
      nosotros: { conjugated: 'bajamos', sampleSentence: 'Nosotros bajamos ayer también.', sampleTranslation: 'We also went down yesterday.' },
      vosotros: { conjugated: 'bajasteis', sampleSentence: 'Vosotros bajasteis juntos anoche.', sampleTranslation: 'You all went down together last night.' },
      ellosEllasUstedes: { conjugated: 'bajaron', sampleSentence: 'Ustedes nunca bajaron al sótano.', sampleTranslation: 'You all never went down to the basement.' }
    },
    imperfect: {
      yo: { conjugated: 'bajaba', sampleSentence: 'Yo bajaba las escaleras siempre muy rápido.', sampleTranslation: 'I used to go down the stairs very fast.' },
      tu: { conjugated: 'bajabas', sampleSentence: 'Tú bajabas muy despacio cada mañana.', sampleTranslation: 'You used to go down very slowly every morning.' },
      elEllaUsted: { conjugated: 'bajaba', sampleSentence: 'Usted bajaba con cuidado todos los días.', sampleTranslation: 'You used to go down carefully every day.' },
      nosotros: { conjugated: 'bajábamos', sampleSentence: 'Nosotros bajábamos todos los días.', sampleTranslation: 'We used to go down every day.' },
      vosotros: { conjugated: 'bajabais', sampleSentence: 'Vosotros bajabais siempre juntos.', sampleTranslation: 'You all used to go down together.' },
      ellosEllasUstedes: { conjugated: 'bajaban', sampleSentence: 'Ustedes nunca bajaban al sótano.', sampleTranslation: 'You all never used to go down to the basement.' }
    }
  },
  {
    infinitive: 'buscar',
    definition: 'to look for',
    isImportant: false,
    present: {
      yo: { conjugated: 'busco', sampleSentence: 'Yo busco a alguien en la biblioteca.', sampleTranslation: 'I look for someone in the library.' },
      tu: { conjugated: 'buscas', sampleSentence: 'Tú buscas trabajo cada día.', sampleTranslation: 'You look for a job every day.' },
      elEllaUsted: { conjugated: 'busca', sampleSentence: 'Usted también busca las llaves.', sampleTranslation: 'You also look for the keys.' },
      nosotros: { conjugated: 'buscamos', sampleSentence: 'Nosotros buscamos una solución.', sampleTranslation: 'We look for a solution.' },
      vosotros: { conjugated: 'buscáis', sampleSentence: 'Vosotros buscáis siempre problemas.', sampleTranslation: 'You all always look for trouble.' },
      ellosEllasUstedes: { conjugated: 'buscan', sampleSentence: 'Ustedes nunca buscan nada tampoco.', sampleTranslation: 'You all never look for anything either.' }
    },
    preterite: {
      yo: { conjugated: 'busqué', sampleSentence: 'Yo busqué a alguien en la biblioteca.', sampleTranslation: 'I looked for someone in the library.' },
      tu: { conjugated: 'buscaste', sampleSentence: 'Tú buscaste trabajo toda la semana.', sampleTranslation: 'You looked for a job all week.' },
      elEllaUsted: { conjugated: 'buscó', sampleSentence: 'Usted también buscó las llaves.', sampleTranslation: 'You also looked for the keys.' },
      nosotros: { conjugated: 'buscamos', sampleSentence: 'Nosotros buscamos una solución ayer.', sampleTranslation: 'We looked for a solution yesterday.' },
      vosotros: { conjugated: 'buscasteis', sampleSentence: 'Vosotros buscasteis problemas anoche.', sampleTranslation: 'You all looked for trouble last night.' },
      ellosEllasUstedes: { conjugated: 'buscaron', sampleSentence: 'Ustedes nunca buscaron nada tampoco.', sampleTranslation: 'You all never looked for anything either.' }
    },
    imperfect: {
      yo: { conjugated: 'buscaba', sampleSentence: 'Yo buscaba a alguien en la biblioteca.', sampleTranslation: 'I used to look for someone in the library.' },
      tu: { conjugated: 'buscabas', sampleSentence: 'Tú buscabas trabajo cada día.', sampleTranslation: 'You used to look for a job every day.' },
      elEllaUsted: { conjugated: 'buscaba', sampleSentence: 'Usted también buscaba las llaves.', sampleTranslation: 'You also used to look for the keys.' },
      nosotros: { conjugated: 'buscábamos', sampleSentence: 'Nosotros buscábamos una solución.', sampleTranslation: 'We used to look for a solution.' },
      vosotros: { conjugated: 'buscabais', sampleSentence: 'Vosotros buscabais siempre problemas.', sampleTranslation: 'You all always used to look for trouble.' },
      ellosEllasUstedes: { conjugated: 'buscaban', sampleSentence: 'Ustedes nunca buscaban nada tampoco.', sampleTranslation: 'You all never used to look for anything either.' }
    }
  },
  {
    infinitive: 'correr',
    definition: 'to run',
    isImportant: false,
    present: {
      yo: { conjugated: 'corro', sampleSentence: 'Yo corro siempre en las mañanas.', sampleTranslation: 'I always run in the mornings.' },
      tu: { conjugated: 'corres', sampleSentence: 'Tú corres muy rápido siempre.', sampleTranslation: 'You always run very fast.' },
      elEllaUsted: { conjugated: 'corre', sampleSentence: 'Usted nunca corre en la lluvia.', sampleTranslation: 'You never run in the rain.' },
      nosotros: { conjugated: 'corremos', sampleSentence: 'Nosotros corremos juntos cada día.', sampleTranslation: 'We run together every day.' },
      vosotros: { conjugated: 'corréis', sampleSentence: 'Vosotros corréis en el parque.', sampleTranslation: 'You all run in the park.' },
      ellosEllasUstedes: { conjugated: 'corren', sampleSentence: 'Ustedes corren también cada día.', sampleTranslation: 'You all also run every day.' }
    },
    preterite: {
      yo: { conjugated: 'corrí', sampleSentence: 'Yo corrí siempre en las mañanas.', sampleTranslation: 'I always ran in the mornings.' },
      tu: { conjugated: 'corriste', sampleSentence: 'Tú corriste muy rápido ayer.', sampleTranslation: 'You ran very fast yesterday.' },
      elEllaUsted: { conjugated: 'corrió', sampleSentence: 'Usted nunca corrió en la lluvia.', sampleTranslation: 'You never ran in the rain.' },
      nosotros: { conjugated: 'corrimos', sampleSentence: 'Nosotros corrimos juntos ayer.', sampleTranslation: 'We ran together yesterday.' },
      vosotros: { conjugated: 'corristeis', sampleSentence: 'Vosotros corristeis en el parque.', sampleTranslation: 'You all ran in the park.' },
      ellosEllasUstedes: { conjugated: 'corrieron', sampleSentence: 'Ustedes corrieron también ayer.', sampleTranslation: 'You all also ran yesterday.' }
    },
    imperfect: {
      yo: { conjugated: 'corría', sampleSentence: 'Yo corría siempre en las mañanas.', sampleTranslation: 'I used to run in the mornings.' },
      tu: { conjugated: 'corrías', sampleSentence: 'Tú corrías muy rápido siempre.', sampleTranslation: 'You used to run very fast.' },
      elEllaUsted: { conjugated: 'corría', sampleSentence: 'Usted nunca corría en la lluvia.', sampleTranslation: 'You never used to run in the rain.' },
      nosotros: { conjugated: 'corríamos', sampleSentence: 'Nosotros corríamos juntos cada día.', sampleTranslation: 'We used to run together every day.' },
      vosotros: { conjugated: 'corríais', sampleSentence: 'Vosotros corríais en el parque.', sampleTranslation: 'You all used to run in the park.' },
      ellosEllasUstedes: { conjugated: 'corrían', sampleSentence: 'Ustedes corrían también cada día.', sampleTranslation: 'You all also used to run every day.' }
    }
  },
  {
    infinitive: 'dar',
    definition: 'to give',
    isImportant: false,
    present: {
      yo: { conjugated: 'doy', sampleSentence: 'Yo doy regalos a todos.', sampleTranslation: 'I give gifts to everyone.' },
      tu: { conjugated: 'das', sampleSentence: 'Tú das consejos buenos siempre.', sampleTranslation: 'You always give good advice.' },
      elEllaUsted: { conjugated: 'da', sampleSentence: 'Usted no da nada a nadie.', sampleTranslation: 'You don\'t give anything to anyone.' },
      nosotros: { conjugated: 'damos', sampleSentence: 'Nosotros damos ayuda a otros.', sampleTranslation: 'We give help to others.' },
      vosotros: { conjugated: 'dais', sampleSentence: 'Vosotros dais dinero a veces.', sampleTranslation: 'You all sometimes give money.' },
      ellosEllasUstedes: { conjugated: 'dan', sampleSentence: 'Ustedes dan ayuda también.', sampleTranslation: 'You all also give help.' }
    },
    preterite: {
      yo: { conjugated: 'di', sampleSentence: 'Yo di regalos a todos.', sampleTranslation: 'I gave gifts to everyone.' },
      tu: { conjugated: 'diste', sampleSentence: 'Tú diste consejos buenos ayer.', sampleTranslation: 'You gave good advice yesterday.' },
      elEllaUsted: { conjugated: 'dio', sampleSentence: 'Usted no dio nada a nadie.', sampleTranslation: 'You didn\'t give anything to anyone.' },
      nosotros: { conjugated: 'dimos', sampleSentence: 'Nosotros dimos ayuda a otros.', sampleTranslation: 'We gave help to others.' },
      vosotros: { conjugated: 'disteis', sampleSentence: 'Vosotros disteis dinero ayer.', sampleTranslation: 'You all gave money yesterday.' },
      ellosEllasUstedes: { conjugated: 'dieron', sampleSentence: 'Ustedes dieron ayuda también.', sampleTranslation: 'You all also gave help.' }
    },
    imperfect: {
      yo: { conjugated: 'daba', sampleSentence: 'Yo daba regalos a todos.', sampleTranslation: 'I used to give gifts to everyone.' },
      tu: { conjugated: 'dabas', sampleSentence: 'Tú dabas consejos buenos siempre.', sampleTranslation: 'You used to give good advice.' },
      elEllaUsted: { conjugated: 'daba', sampleSentence: 'Usted no daba nada a nadie.', sampleTranslation: 'You didn\'t use to give anything to anyone.' },
      nosotros: { conjugated: 'dábamos', sampleSentence: 'Nosotros dábamos ayuda a otros.', sampleTranslation: 'We used to give help to others.' },
      vosotros: { conjugated: 'dabais', sampleSentence: 'Vosotros dabais dinero a veces.', sampleTranslation: 'You all used to give money sometimes.' },
      ellosEllasUstedes: { conjugated: 'daban', sampleSentence: 'Ustedes daban ayuda también.', sampleTranslation: 'You all also used to give help.' }
    }
  },
  {
    infinitive: 'decir',
    definition: 'to say/tell',
    isImportant: false,
    present: {
      isIrregular: true,
      irregularDescription: 'yo: digo, stem-change e→i',
      yo: { conjugated: 'digo', sampleSentence: 'Yo digo siempre la verdad.', sampleTranslation: 'I always tell the truth.' },
      tu: { conjugated: 'dices', sampleSentence: 'Tú dices cosas interesantes siempre.', sampleTranslation: 'You always say interesting things.' },
      elEllaUsted: { conjugated: 'dice', sampleSentence: 'Usted no dice nada tampoco.', sampleTranslation: 'You don\'t say anything either.' },
      nosotros: { conjugated: 'decimos', sampleSentence: 'Nosotros decimos la verdad.', sampleTranslation: 'We tell the truth.' },
      vosotros: { conjugated: 'decís', sampleSentence: 'Vosotros decís muchas mentiras.', sampleTranslation: 'You all tell many lies.' },
      ellosEllasUstedes: { conjugated: 'dicen', sampleSentence: 'Ustedes dicen algo importante.', sampleTranslation: 'You all say something important.' }
    },
    preterite: {
      isIrregular: true,
      yo: { conjugated: 'dije', sampleSentence: 'Yo dije siempre la verdad.', sampleTranslation: 'I always told the truth.' },
      tu: { conjugated: 'dijiste', sampleSentence: 'Tú dijiste cosas interesantes ayer.', sampleTranslation: 'You said interesting things yesterday.' },
      elEllaUsted: { conjugated: 'dijo', sampleSentence: 'Usted no dijo nada tampoco.', sampleTranslation: 'You didn\'t say anything either.' },
      nosotros: { conjugated: 'dijimos', sampleSentence: 'Nosotros dijimos la verdad.', sampleTranslation: 'We told the truth.' },
      vosotros: { conjugated: 'dijisteis', sampleSentence: 'Vosotros dijisteis muchas mentiras.', sampleTranslation: 'You all told many lies.' },
      ellosEllasUstedes: { conjugated: 'dijeron', sampleSentence: 'Ustedes dijeron algo importante.', sampleTranslation: 'You all said something important.' }
    },
    imperfect: {
      yo: { conjugated: 'decía', sampleSentence: 'Yo decía siempre la verdad.', sampleTranslation: 'I used to tell the truth.' },
      tu: { conjugated: 'decías', sampleSentence: 'Tú decías cosas interesantes siempre.', sampleTranslation: 'You used to say interesting things.' },
      elEllaUsted: { conjugated: 'decía', sampleSentence: 'Usted no decía nada tampoco.', sampleTranslation: 'You didn\'t use to say anything either.' },
      nosotros: { conjugated: 'decíamos', sampleSentence: 'Nosotros decíamos la verdad.', sampleTranslation: 'We used to tell the truth.' },
      vosotros: { conjugated: 'decíais', sampleSentence: 'Vosotros decíais muchas mentiras.', sampleTranslation: 'You all used to tell many lies.' },
      ellosEllasUstedes: { conjugated: 'decían', sampleSentence: 'Ustedes decían algo importante.', sampleTranslation: 'You all used to say something important.' }
    }
  },
  {
    infinitive: 'dormir',
    definition: 'to sleep',
    isImportant: false,
    present: {
      isIrregular: true,
      irregularDescription: 'stem-change o→ue',
      yo: { conjugated: 'duermo', sampleSentence: 'Yo duermo ya ocho horas.', sampleTranslation: 'I already sleep eight hours.' },
      tu: { conjugated: 'duermes', sampleSentence: 'Tú duermes muy bien siempre.', sampleTranslation: 'You always sleep very well.' },
      elEllaUsted: { conjugated: 'duerme', sampleSentence: 'Usted nunca duerme en clase.', sampleTranslation: 'You never sleep in class.' },
      nosotros: { conjugated: 'dormimos', sampleSentence: 'Nosotros dormimos ocho horas.', sampleTranslation: 'We sleep eight hours.' },
      vosotros: { conjugated: 'dormís', sampleSentence: 'Vosotros dormís muy poco.', sampleTranslation: 'You all sleep very little.' },
      ellosEllasUstedes: { conjugated: 'duermen', sampleSentence: 'Ustedes duermen siempre bien.', sampleTranslation: 'You all always sleep well.' }
    },
    preterite: {
      isIrregular: true,
      irregularDescription: 'o→u in 3rd person',
      yo: { conjugated: 'dormí', sampleSentence: 'Yo dormí ya ocho horas.', sampleTranslation: 'I already slept eight hours.' },
      tu: { conjugated: 'dormiste', sampleSentence: 'Tú dormiste muy bien anoche.', sampleTranslation: 'You slept very well last night.' },
      elEllaUsted: { conjugated: 'durmió', sampleSentence: 'Usted nunca durmió en clase.', sampleTranslation: 'You never slept in class.' },
      nosotros: { conjugated: 'dormimos', sampleSentence: 'Nosotros dormimos ocho horas.', sampleTranslation: 'We slept eight hours.' },
      vosotros: { conjugated: 'dormisteis', sampleSentence: 'Vosotros dormisteis muy poco.', sampleTranslation: 'You all slept very little.' },
      ellosEllasUstedes: { conjugated: 'durmieron', sampleSentence: 'Ustedes durmieron siempre bien.', sampleTranslation: 'You all always slept well.' }
    },
    imperfect: {
      yo: { conjugated: 'dormía', sampleSentence: 'Yo dormía ya ocho horas.', sampleTranslation: 'I used to sleep eight hours.' },
      tu: { conjugated: 'dormías', sampleSentence: 'Tú dormías muy bien siempre.', sampleTranslation: 'You used to sleep very well.' },
      elEllaUsted: { conjugated: 'dormía', sampleSentence: 'Usted nunca dormía en clase.', sampleTranslation: 'You never used to sleep in class.' },
      nosotros: { conjugated: 'dormíamos', sampleSentence: 'Nosotros dormíamos ocho horas.', sampleTranslation: 'We used to sleep eight hours.' },
      vosotros: { conjugated: 'dormíais', sampleSentence: 'Vosotros dormíais muy poco.', sampleTranslation: 'You all used to sleep very little.' },
      ellosEllasUstedes: { conjugated: 'dormían', sampleSentence: 'Ustedes dormían siempre bien.', sampleTranslation: 'You all used to sleep well.' }
    }
  },
  {
    infinitive: 'empezar',
    definition: 'to begin/start',
    isImportant: false,
    present: {
      isIrregular: true,
      irregularDescription: 'stem-change e→ie',
      yo: { conjugated: 'empiezo', sampleSentence: 'Yo empiezo temprano también.', sampleTranslation: 'I also start early.' },
      tu: { conjugated: 'empiezas', sampleSentence: 'Tú empiezas temprano cada día.', sampleTranslation: 'You start early every day.' },
      elEllaUsted: { conjugated: 'empieza', sampleSentence: 'Usted nunca empieza el proyecto.', sampleTranslation: 'You never start the project.' },
      nosotros: { conjugated: 'empezamos', sampleSentence: 'Nosotros empezamos a trabajar.', sampleTranslation: 'We start to work.' },
      vosotros: { conjugated: 'empezáis', sampleSentence: 'Vosotros empezáis muy tarde.', sampleTranslation: 'You all start very late.' },
      ellosEllasUstedes: { conjugated: 'empiezan', sampleSentence: 'Ustedes empiezan ya el trabajo.', sampleTranslation: 'You all already start the work.' }
    },
    preterite: {
      isIrregular: true,
      irregularDescription: 'z→c in yo',
      yo: { conjugated: 'empecé', sampleSentence: 'Yo empecé temprano también.', sampleTranslation: 'I also started early.' },
      tu: { conjugated: 'empezaste', sampleSentence: 'Tú empezaste temprano ayer.', sampleTranslation: 'You started early yesterday.' },
      elEllaUsted: { conjugated: 'empezó', sampleSentence: 'Usted nunca empezó el proyecto.', sampleTranslation: 'You never started the project.' },
      nosotros: { conjugated: 'empezamos', sampleSentence: 'Nosotros empezamos a trabajar.', sampleTranslation: 'We started to work.' },
      vosotros: { conjugated: 'empezasteis', sampleSentence: 'Vosotros empezasteis muy tarde.', sampleTranslation: 'You all started very late.' },
      ellosEllasUstedes: { conjugated: 'empezaron', sampleSentence: 'Ustedes empezaron ya el trabajo.', sampleTranslation: 'You all already started the work.' }
    },
    imperfect: {
      yo: { conjugated: 'empezaba', sampleSentence: 'Yo empezaba temprano también.', sampleTranslation: 'I also used to start early.' },
      tu: { conjugated: 'empezabas', sampleSentence: 'Tú empezabas temprano cada día.', sampleTranslation: 'You used to start early every day.' },
      elEllaUsted: { conjugated: 'empezaba', sampleSentence: 'Usted nunca empezaba el proyecto.', sampleTranslation: 'You never used to start the project.' },
      nosotros: { conjugated: 'empezábamos', sampleSentence: 'Nosotros empezábamos a trabajar.', sampleTranslation: 'We used to start to work.' },
      vosotros: { conjugated: 'empezabais', sampleSentence: 'Vosotros empezabais muy tarde.', sampleTranslation: 'You all used to start very late.' },
      ellosEllasUstedes: { conjugated: 'empezaban', sampleSentence: 'Ustedes empezaban ya el trabajo.', sampleTranslation: 'You all already used to start the work.' }
    }
  },
  {
    infinitive: 'escribir',
    definition: 'to write',
    isImportant: false,
    present: {
      yo: { conjugated: 'escribo', sampleSentence: 'Yo escribo siempre con lápiz.', sampleTranslation: 'I always write with pencil.' },
      tu: { conjugated: 'escribes', sampleSentence: 'Tú escribes muy bien siempre.', sampleTranslation: 'You always write very well.' },
      elEllaUsted: { conjugated: 'escribe', sampleSentence: 'Usted no escribe nada tampoco.', sampleTranslation: 'You don\'t write anything either.' },
      nosotros: { conjugated: 'escribimos', sampleSentence: 'Nosotros escribimos cartas.', sampleTranslation: 'We write letters.' },
      vosotros: { conjugated: 'escribís', sampleSentence: 'Vosotros escribís en español.', sampleTranslation: 'You all write in Spanish.' },
      ellosEllasUstedes: { conjugated: 'escriben', sampleSentence: 'Ustedes escriben algo importante.', sampleTranslation: 'You all write something important.' }
    },
    preterite: {
      yo: { conjugated: 'escribí', sampleSentence: 'Yo escribí siempre con lápiz.', sampleTranslation: 'I always wrote with pencil.' },
      tu: { conjugated: 'escribiste', sampleSentence: 'Tú escribiste muy bien ayer.', sampleTranslation: 'You wrote very well yesterday.' },
      elEllaUsted: { conjugated: 'escribió', sampleSentence: 'Usted no escribió nada tampoco.', sampleTranslation: 'You didn\'t write anything either.' },
      nosotros: { conjugated: 'escribimos', sampleSentence: 'Nosotros escribimos cartas ayer.', sampleTranslation: 'We wrote letters yesterday.' },
      vosotros: { conjugated: 'escribisteis', sampleSentence: 'Vosotros escribisteis en español.', sampleTranslation: 'You all wrote in Spanish.' },
      ellosEllasUstedes: { conjugated: 'escribieron', sampleSentence: 'Ustedes escribieron algo importante.', sampleTranslation: 'You all wrote something important.' }
    },
    imperfect: {
      yo: { conjugated: 'escribía', sampleSentence: 'Yo escribía siempre con lápiz.', sampleTranslation: 'I used to write with pencil.' },
      tu: { conjugated: 'escribías', sampleSentence: 'Tú escribías muy bien siempre.', sampleTranslation: 'You used to write very well.' },
      elEllaUsted: { conjugated: 'escribía', sampleSentence: 'Usted no escribía nada tampoco.', sampleTranslation: 'You didn\'t use to write anything either.' },
      nosotros: { conjugated: 'escribíamos', sampleSentence: 'Nosotros escribíamos cartas.', sampleTranslation: 'We used to write letters.' },
      vosotros: { conjugated: 'escribíais', sampleSentence: 'Vosotros escribíais en español.', sampleTranslation: 'You all used to write in Spanish.' },
      ellosEllasUstedes: { conjugated: 'escribían', sampleSentence: 'Ustedes escribían algo importante.', sampleTranslation: 'You all used to write something important.' }
    }
  },
  {
    infinitive: 'estar',
    definition: 'to be (temporary/location)',
    isImportant: true,
    present: {
      isIrregular: true,
      irregularDescription: 'yo: estoy',
      yo: { conjugated: 'estoy', sampleSentence: 'Yo estoy siempre en casa.', sampleTranslation: 'I am always at home.' },
      tu: { conjugated: 'estás', sampleSentence: 'Tú estás muy feliz hoy.', sampleTranslation: 'You are very happy today.' },
      elEllaUsted: { conjugated: 'está', sampleSentence: 'Usted ya no está con alguien.', sampleTranslation: 'You are no longer with someone.' },
      nosotros: { conjugated: 'estamos', sampleSentence: 'Nosotros estamos en la escuela.', sampleTranslation: 'We are at school.' },
      vosotros: { conjugated: 'estáis', sampleSentence: 'Vosotros estáis muy cansados.', sampleTranslation: 'You all are very tired.' },
      ellosEllasUstedes: { conjugated: 'están', sampleSentence: 'Ustedes están también aquí.', sampleTranslation: 'You all are also here.' }
    },
    preterite: {
      isIrregular: true,
      yo: { conjugated: 'estuve', sampleSentence: 'Yo estuve siempre en casa.', sampleTranslation: 'I was always at home.' },
      tu: { conjugated: 'estuviste', sampleSentence: 'Tú estuviste muy feliz ayer.', sampleTranslation: 'You were very happy yesterday.' },
      elEllaUsted: { conjugated: 'estuvo', sampleSentence: 'Usted ya no estuvo con alguien.', sampleTranslation: 'You were no longer with someone.' },
      nosotros: { conjugated: 'estuvimos', sampleSentence: 'Nosotros estuvimos en la escuela.', sampleTranslation: 'We were at school.' },
      vosotros: { conjugated: 'estuvisteis', sampleSentence: 'Vosotros estuvisteis muy cansados.', sampleTranslation: 'You all were very tired.' },
      ellosEllasUstedes: { conjugated: 'estuvieron', sampleSentence: 'Ustedes estuvieron también aquí.', sampleTranslation: 'You all were also here.' }
    },
    imperfect: {
      yo: { conjugated: 'estaba', sampleSentence: 'Yo estaba siempre en casa.', sampleTranslation: 'I used to be at home.' },
      tu: { conjugated: 'estabas', sampleSentence: 'Tú estabas muy feliz entonces.', sampleTranslation: 'You used to be very happy then.' },
      elEllaUsted: { conjugated: 'estaba', sampleSentence: 'Usted ya no estaba con alguien.', sampleTranslation: 'You were no longer with someone.' },
      nosotros: { conjugated: 'estábamos', sampleSentence: 'Nosotros estábamos en la escuela.', sampleTranslation: 'We used to be at school.' },
      vosotros: { conjugated: 'estabais', sampleSentence: 'Vosotros estabais muy cansados.', sampleTranslation: 'You all used to be very tired.' },
      ellosEllasUstedes: { conjugated: 'estaban', sampleSentence: 'Ustedes estaban también aquí.', sampleTranslation: 'You all used to be here too.' }
    }
  },
  {
    infinitive: 'hablar',
    definition: 'to speak',
    isImportant: false,
    present: {
      yo: { conjugated: 'hablo', sampleSentence: 'Yo hablo siempre en español.', sampleTranslation: 'I always speak in Spanish.' },
      tu: { conjugated: 'hablas', sampleSentence: 'Tú hablas muy rápido siempre.', sampleTranslation: 'You always speak very fast.' },
      elEllaUsted: { conjugated: 'habla', sampleSentence: 'Usted no habla con nadie tampoco.', sampleTranslation: 'You don\'t speak with anyone either.' },
      nosotros: { conjugated: 'hablamos', sampleSentence: 'Nosotros hablamos en inglés.', sampleTranslation: 'We speak in English.' },
      vosotros: { conjugated: 'habláis', sampleSentence: 'Vosotros habláis muy alto.', sampleTranslation: 'You all speak very loud.' },
      ellosEllasUstedes: { conjugated: 'hablan', sampleSentence: 'Ustedes hablan también cada día.', sampleTranslation: 'You all also speak every day.' }
    },
    preterite: {
      yo: { conjugated: 'hablé', sampleSentence: 'Yo hablé siempre en español.', sampleTranslation: 'I always spoke in Spanish.' },
      tu: { conjugated: 'hablaste', sampleSentence: 'Tú hablaste muy rápido ayer.', sampleTranslation: 'You spoke very fast yesterday.' },
      elEllaUsted: { conjugated: 'habló', sampleSentence: 'Usted no habló con nadie tampoco.', sampleTranslation: 'You didn\'t speak with anyone either.' },
      nosotros: { conjugated: 'hablamos', sampleSentence: 'Nosotros hablamos en inglés.', sampleTranslation: 'We speak in English.' },
      vosotros: { conjugated: 'hablasteis', sampleSentence: 'Vosotros hablasteis muy alto.', sampleTranslation: 'You all spoke very loud.' },
      ellosEllasUstedes: { conjugated: 'hablaron', sampleSentence: 'Ustedes hablaron también ayer.', sampleTranslation: 'You all also spoke yesterday.' }
    },
    imperfect: {
      yo: { conjugated: 'hablaba', sampleSentence: 'Yo hablaba siempre en español.', sampleTranslation: 'I used to speak in Spanish.' },
      tu: { conjugated: 'hablabas', sampleSentence: 'Tú hablabas muy rápido siempre.', sampleTranslation: 'You used to speak very fast.' },
      elEllaUsted: { conjugated: 'hablaba', sampleSentence: 'Usted no hablaba con nadie tampoco.', sampleTranslation: 'You didn\'t use to speak with anyone either.' },
      nosotros: { conjugated: 'hablábamos', sampleSentence: 'Nosotros hablábamos en inglés.', sampleTranslation: 'We used to speak in English.' },
      vosotros: { conjugated: 'hablabais', sampleSentence: 'Vosotros hablabais muy alto.', sampleTranslation: 'You all used to speak very loud.' },
      ellosEllasUstedes: { conjugated: 'hablaban', sampleSentence: 'Ustedes hablaban también cada día.', sampleTranslation: 'You all also used to speak every day.' }
    }
  },
  {
    infinitive: 'hacer',
    definition: 'to do/make',
    isImportant: true,
    present: {
      isIrregular: true,
      irregularDescription: 'yo: hago',
      yo: { conjugated: 'hago', sampleSentence: 'Yo hago también la tarea.', sampleTranslation: 'I also do the homework.' },
      tu: { conjugated: 'haces', sampleSentence: 'Tú haces todo muy bien.', sampleTranslation: 'You do everything very well.' },
      elEllaUsted: { conjugated: 'hace', sampleSentence: 'Usted nunca hace nada malo.', sampleTranslation: 'You never do anything bad.' },
      nosotros: { conjugated: 'hacemos', sampleSentence: 'Nosotros hacemos la cena.', sampleTranslation: 'We make dinner.' },
      vosotros: { conjugated: 'hacéis', sampleSentence: 'Vosotros hacéis mucho ruido.', sampleTranslation: 'You all make a lot of noise.' },
      ellosEllasUstedes: { conjugated: 'hacen', sampleSentence: 'Ustedes hacen siempre algo bueno.', sampleTranslation: 'You all always do something good.' }
    },
    preterite: {
      isIrregular: true,
      yo: { conjugated: 'hice', sampleSentence: 'Yo hice también la tarea.', sampleTranslation: 'I also did the homework.' },
      tu: { conjugated: 'hiciste', sampleSentence: 'Tú hiciste todo muy bien.', sampleTranslation: 'You did everything very well.' },
      elEllaUsted: { conjugated: 'hizo', sampleSentence: 'Usted nunca hizo nada malo.', sampleTranslation: 'You never did anything bad.' },
      nosotros: { conjugated: 'hicimos', sampleSentence: 'Nosotros hicimos la cena.', sampleTranslation: 'We made dinner.' },
      vosotros: { conjugated: 'hicisteis', sampleSentence: 'Vosotros hicisteis mucho ruido.', sampleTranslation: 'You all made a lot of noise.' },
      ellosEllasUstedes: { conjugated: 'hicieron', sampleSentence: 'Ustedes hicieron siempre algo bueno.', sampleTranslation: 'You all always did something good.' }
    },
    imperfect: {
      yo: { conjugated: 'hacía', sampleSentence: 'Yo hacía también la tarea.', sampleTranslation: 'I also used to do the homework.' },
      tu: { conjugated: 'hacías', sampleSentence: 'Tú hacías todo muy bien.', sampleTranslation: 'You used to do everything very well.' },
      elEllaUsted: { conjugated: 'hacía', sampleSentence: 'Usted nunca hacía nada malo.', sampleTranslation: 'You never used to do anything bad.' },
      nosotros: { conjugated: 'hacíamos', sampleSentence: 'Nosotros hacíamos la cena.', sampleTranslation: 'We used to make dinner.' },
      vosotros: { conjugated: 'hacíais', sampleSentence: 'Vosotros hacíais mucho ruido.', sampleTranslation: 'You all used to make a lot of noise.' },
      ellosEllasUstedes: { conjugated: 'hacían', sampleSentence: 'Ustedes hacían siempre algo bueno.', sampleTranslation: 'You all used to do something good.' }
    }
  },
  {
    infinitive: 'ir',
    definition: 'to go',
    isImportant: true,
    present: {
      isIrregular: true,
      yo: { conjugated: 'voy', sampleSentence: 'Yo voy siempre solo.', sampleTranslation: 'I always go alone.' },
      tu: { conjugated: 'vas', sampleSentence: 'Tú vas al cine mucho.', sampleTranslation: 'You go to the movies a lot.' },
      elEllaUsted: { conjugated: 'va', sampleSentence: 'Usted ya no va a nadie.', sampleTranslation: 'You no longer go to anyone.' },
      nosotros: { conjugated: 'vamos', sampleSentence: 'Nosotros vamos al parque.', sampleTranslation: 'We go to the park.' },
      vosotros: { conjugated: 'vais', sampleSentence: 'Vosotros vais a la playa.', sampleTranslation: 'You all go to the beach.' },
      ellosEllasUstedes: { conjugated: 'van', sampleSentence: 'Ustedes van también juntos.', sampleTranslation: 'You all also go together.' }
    },
    preterite: {
      isIrregular: true,
      yo: { conjugated: 'fui', sampleSentence: 'Yo fui siempre solo.', sampleTranslation: 'I always went alone.' },
      tu: { conjugated: 'fuiste', sampleSentence: 'Tú fuiste al cine ayer.', sampleTranslation: 'You went to the movies yesterday.' },
      elEllaUsted: { conjugated: 'fue', sampleSentence: 'Usted ya no fue a nadie.', sampleTranslation: 'You no longer went to anyone.' },
      nosotros: { conjugated: 'fuimos', sampleSentence: 'Nosotros fuimos al parque.', sampleTranslation: 'We went to the park.' },
      vosotros: { conjugated: 'fuisteis', sampleSentence: 'Vosotros fuisteis a la playa.', sampleTranslation: 'You all went to the beach.' },
      ellosEllasUstedes: { conjugated: 'fueron', sampleSentence: 'Ustedes fueron también juntos.', sampleTranslation: 'You all also went together.' }
    },
    imperfect: {
      isIrregular: true,
      yo: { conjugated: 'iba', sampleSentence: 'Yo iba siempre solo.', sampleTranslation: 'I used to go alone.' },
      tu: { conjugated: 'ibas', sampleSentence: 'Tú ibas al cine mucho.', sampleTranslation: 'You used to go to the movies a lot.' },
      elEllaUsted: { conjugated: 'iba', sampleSentence: 'Usted ya no iba a nadie.', sampleTranslation: 'You no longer used to go to anyone.' },
      nosotros: { conjugated: 'íbamos', sampleSentence: 'Nosotros íbamos al parque.', sampleTranslation: 'We used to go to the park.' },
      vosotros: { conjugated: 'ibais', sampleSentence: 'Vosotros ibais a la playa.', sampleTranslation: 'You all used to go to the beach.' },
      ellosEllasUstedes: { conjugated: 'iban', sampleSentence: 'Ustedes iban también juntos.', sampleTranslation: 'You all also used to go together.' }
    }
  },
  {
    infinitive: 'pagar',
    definition: 'to pay',
    isImportant: false,
    present: {
      yo: { conjugated: 'pago', sampleSentence: 'Yo pago siempre las cuentas.', sampleTranslation: 'I always pay the bills.' },
      tu: { conjugated: 'pagas', sampleSentence: 'Tú pagas todo con tarjeta.', sampleTranslation: 'You pay for everything with a card.' },
      elEllaUsted: { conjugated: 'paga', sampleSentence: 'Usted no paga nada tampoco.', sampleTranslation: 'You don\'t pay anything either.' },
      nosotros: { conjugated: 'pagamos', sampleSentence: 'Nosotros pagamos la cuenta.', sampleTranslation: 'We pay the bill.' },
      vosotros: { conjugated: 'pagáis', sampleSentence: 'Vosotros pagáis muy poco.', sampleTranslation: 'You all pay very little.' },
      ellosEllasUstedes: { conjugated: 'pagan', sampleSentence: 'Ustedes pagan ya todo.', sampleTranslation: 'You all already pay everything.' }
    },
    preterite: {
      isIrregular: true,
      irregularDescription: 'g→gu in yo',
      yo: { conjugated: 'pagué', sampleSentence: 'Yo pagué siempre las cuentas.', sampleTranslation: 'I always paid the bills.' },
      tu: { conjugated: 'pagaste', sampleSentence: 'Tú pagaste todo con tarjeta.', sampleTranslation: 'You paid for everything with a card.' },
      elEllaUsted: { conjugated: 'pagó', sampleSentence: 'Usted no pagó nada tampoco.', sampleTranslation: 'You didn\'t pay anything either.' },
      nosotros: { conjugated: 'pagamos', sampleSentence: 'Nosotros pagamos la cuenta.', sampleTranslation: 'We paid the bill.' },
      vosotros: { conjugated: 'pagasteis', sampleSentence: 'Vosotros pagasteis muy poco.', sampleTranslation: 'You all paid very little.' },
      ellosEllasUstedes: { conjugated: 'pagaron', sampleSentence: 'Ustedes pagaron ya todo.', sampleTranslation: 'You all already paid everything.' }
    },
    imperfect: {
      yo: { conjugated: 'pagaba', sampleSentence: 'Yo pagaba siempre las cuentas.', sampleTranslation: 'I used to pay the bills.' },
      tu: { conjugated: 'pagabas', sampleSentence: 'Tú pagabas todo con tarjeta.', sampleTranslation: 'You used to pay for everything with a card.' },
      elEllaUsted: { conjugated: 'pagaba', sampleSentence: 'Usted no pagaba nada tampoco.', sampleTranslation: 'You didn\'t use to pay anything either.' },
      nosotros: { conjugated: 'pagábamos', sampleSentence: 'Nosotros pagábamos la cuenta.', sampleTranslation: 'We used to pay the bill.' },
      vosotros: { conjugated: 'pagabais', sampleSentence: 'Vosotros pagabais muy poco.', sampleTranslation: 'You all used to pay very little.' },
      ellosEllasUstedes: { conjugated: 'pagaban', sampleSentence: 'Ustedes pagaban ya todo.', sampleTranslation: 'You all used to pay everything.' }
    }
  },
  {
    infinitive: 'pedir',
    definition: 'to ask for / request',
    isImportant: false,
    present: {
      isIrregular: true,
      irregularDescription: 'ped→pid',
      yo: { conjugated: 'pido', sampleSentence: 'Yo pido ayuda a alguien.', sampleTranslation: 'I ask someone for help.' },
      tu: { conjugated: 'pides', sampleSentence: 'Tú pides favores siempre.', sampleTranslation: 'You always ask for favors.' },
      elEllaUsted: { conjugated: 'pide', sampleSentence: 'Usted nunca pide nada tampoco.', sampleTranslation: 'You never ask for anything either.' },
      nosotros: { conjugated: 'pedimos', sampleSentence: 'Nosotros pedimos pizza.', sampleTranslation: 'We ask for pizza.' },
      vosotros: { conjugated: 'pedís', sampleSentence: 'Vosotros pedís demasiado.', sampleTranslation: 'You all ask for too much.' },
      ellosEllasUstedes: { conjugated: 'piden', sampleSentence: 'Ustedes piden también comida.', sampleTranslation: 'You all also ask for food.' }
    },
    preterite: {
      isIrregular: true,
      irregularDescription: 'ped→pid in 3rd person',
      yo: { conjugated: 'pedí', sampleSentence: 'Yo pedí ayuda a alguien.', sampleTranslation: 'I asked someone for help.' },
      tu: { conjugated: 'pediste', sampleSentence: 'Tú pediste favores ayer.', sampleTranslation: 'You asked for favors yesterday.' },
      elEllaUsted: { conjugated: 'pidió', sampleSentence: 'Usted nunca pidió nada tampoco.', sampleTranslation: 'You never asked for anything either.' },
      nosotros: { conjugated: 'pedimos', sampleSentence: 'Nosotros pedimos pizza ayer.', sampleTranslation: 'We asked for pizza yesterday.' },
      vosotros: { conjugated: 'pedisteis', sampleSentence: 'Vosotros pedisteis demasiado.', sampleTranslation: 'You all asked for too much.' },
      ellosEllasUstedes: { conjugated: 'pidieron', sampleSentence: 'Ustedes pidieron también comida.', sampleTranslation: 'You all also asked for food.' }
    },
    imperfect: {
      yo: { conjugated: 'pedía', sampleSentence: 'Yo pedía ayuda a alguien.', sampleTranslation: 'I used to ask someone for help.' },
      tu: { conjugated: 'pedías', sampleSentence: 'Tú pedías favores siempre.', sampleTranslation: 'You used to ask for favors.' },
      elEllaUsted: { conjugated: 'pedía', sampleSentence: 'Usted nunca pedía nada tampoco.', sampleTranslation: 'You never used to ask for anything either.' },
      nosotros: { conjugated: 'pedíamos', sampleSentence: 'Nosotros pedíamos pizza.', sampleTranslation: 'We used to ask for pizza.' },
      vosotros: { conjugated: 'pedíais', sampleSentence: 'Vosotros pedíais demasiado.', sampleTranslation: 'You all used to ask for too much.' },
      ellosEllasUstedes: { conjugated: 'pedían', sampleSentence: 'Ustedes pedían también comida.', sampleTranslation: 'You all also used to ask for food.' }
    }
  },
  {
    infinitive: 'preferir',
    definition: 'to prefer',
    isImportant: false,
    present: {
      isIrregular: true,
      irregularDescription: 'stem-change e→ie',
      yo: { conjugated: 'prefiero', sampleSentence: 'Yo prefiero siempre el té.', sampleTranslation: 'I always prefer tea.' },
      tu: { conjugated: 'prefieres', sampleSentence: 'Tú prefieres el chocolate.', sampleTranslation: 'You prefer chocolate.' },
      elEllaUsted: { conjugated: 'prefiere', sampleSentence: 'Usted ya no prefiere a nadie.', sampleTranslation: 'You no longer prefer anyone.' },
      nosotros: { conjugated: 'preferimos', sampleSentence: 'Nosotros preferimos la música.', sampleTranslation: 'We prefer music.' },
      vosotros: { conjugated: 'preferís', sampleSentence: 'Vosotros preferís los deportes.', sampleTranslation: 'You all prefer sports.' },
      ellosEllasUstedes: { conjugated: 'prefieren', sampleSentence: 'Ustedes prefieren también café.', sampleTranslation: 'You all also prefer coffee.' }
    },
    preterite: {
      isIrregular: true,
      irregularDescription: 'e→i in 3rd person',
      yo: { conjugated: 'preferí', sampleSentence: 'Yo preferí siempre el té.', sampleTranslation: 'I always preferred tea.' },
      tu: { conjugated: 'preferiste', sampleSentence: 'Tú preferiste el chocolate.', sampleTranslation: 'You preferred chocolate.' },
      elEllaUsted: { conjugated: 'prefirió', sampleSentence: 'Usted ya no prefirió a nadie.', sampleTranslation: 'You no longer preferred anyone.' },
      nosotros: { conjugated: 'preferimos', sampleSentence: 'Nosotros preferimos la música.', sampleTranslation: 'We preferred music.' },
      vosotros: { conjugated: 'preferisteis', sampleSentence: 'Vosotros preferisteis los deportes.', sampleTranslation: 'You all preferred sports.' },
      ellosEllasUstedes: { conjugated: 'prefirieron', sampleSentence: 'Ustedes prefirieron también café.', sampleTranslation: 'You all also preferred coffee.' }
    },
    imperfect: {
      yo: { conjugated: 'prefería', sampleSentence: 'Yo prefería siempre el té.', sampleTranslation: 'I used to prefer tea.' },
      tu: { conjugated: 'preferías', sampleSentence: 'Tú preferías el chocolate.', sampleTranslation: 'You used to prefer chocolate.' },
      elEllaUsted: { conjugated: 'prefería', sampleSentence: 'Usted ya no prefería a nadie.', sampleTranslation: 'You no longer used to prefer anyone.' },
      nosotros: { conjugated: 'preferíamos', sampleSentence: 'Nosotros preferíamos la música.', sampleTranslation: 'We used to prefer music.' },
      vosotros: { conjugated: 'preferíais', sampleSentence: 'Vosotros preferíais los deportes.', sampleTranslation: 'You all used to prefer sports.' },
      ellosEllasUstedes: { conjugated: 'preferían', sampleSentence: 'Ustedes preferían también café.', sampleTranslation: 'You all also used to prefer coffee.' }
    }
  },
  {
    infinitive: 'ser',
    definition: 'to be (identity/origin)',
    isImportant: true,
    present: {
      isIrregular: true,
      yo: { conjugated: 'soy', sampleSentence: 'Yo soy siempre buen estudiante.', sampleTranslation: 'I am always a good student.' },
      tu: { conjugated: 'eres', sampleSentence: 'Tú eres muy inteligente.', sampleTranslation: 'You are very intelligent.' },
      elEllaUsted: { conjugated: 'es', sampleSentence: 'Usted nunca es nadie especial.', sampleTranslation: 'You are never anyone special.' },
      nosotros: { conjugated: 'somos', sampleSentence: 'Nosotros somos estudiantes.', sampleTranslation: 'We are students.' },
      vosotros: { conjugated: 'sois', sampleSentence: 'Vosotros sois muy divertidos.', sampleTranslation: 'You all are very fun.' },
      ellosEllasUstedes: { conjugated: 'son', sampleSentence: 'Ustedes son también buenos amigos.', sampleTranslation: 'You all are also good friends.' }
    },
    preterite: {
      isIrregular: true,
      yo: { conjugated: 'fui', sampleSentence: 'Yo fui siempre buen estudiante.', sampleTranslation: 'I was always a good student.' },
      tu: { conjugated: 'fuiste', sampleSentence: 'Tú fuiste al cine ayer.', sampleTranslation: 'You went to the movies yesterday.' },
      elEllaUsted: { conjugated: 'fue', sampleSentence: 'Usted nunca fue nadie especial.', sampleTranslation: 'You were never anyone special.' },
      nosotros: { conjugated: 'fuimos', sampleSentence: 'Nosotros fuimos al parque.', sampleTranslation: 'We went to the park.' },
      vosotros: { conjugated: 'fuisteis', sampleSentence: 'Vosotros fuisteis a la playa.', sampleTranslation: 'You all went to the beach.' },
      ellosEllasUstedes: { conjugated: 'fueron', sampleSentence: 'Ustedes fueron también buenos amigos.', sampleTranslation: 'You all were also good friends.' }
    },
    imperfect: {
      isIrregular: true,
      yo: { conjugated: 'era', sampleSentence: 'Yo era siempre buen estudiante.', sampleTranslation: 'I used to be a good student.' },
      tu: { conjugated: 'eras', sampleSentence: 'Tú eras muy inteligente.', sampleTranslation: 'You used to be very intelligent.' },
      elEllaUsted: { conjugated: 'era', sampleSentence: 'Usted nunca era nadie especial.', sampleTranslation: 'You were never anyone special.' },
      nosotros: { conjugated: 'éramos', sampleSentence: 'Nosotros éramos estudiantes.', sampleTranslation: 'We used to be students.' },
      vosotros: { conjugated: 'erais', sampleSentence: 'Vosotros erais muy divertidos.', sampleTranslation: 'You all used to be very fun.' },
      ellosEllasUstedes: { conjugated: 'eran', sampleSentence: 'Ustedes eran también buenos amigos.', sampleTranslation: 'You all used to be good friends.' }
    }
  },
  {
    infinitive: 'tener',
    definition: 'to have',
    isImportant: true,
    present: {
      isIrregular: true,
      irregularDescription: 'yo: tengo, stem-change e→ie',
      yo: { conjugated: 'tengo', sampleSentence: 'Yo tengo siempre buena suerte.', sampleTranslation: 'I always have good luck.' },
      tu: { conjugated: 'tienes', sampleSentence: 'Tú tienes mucha paciencia.', sampleTranslation: 'You have a lot of patience.' },
      elEllaUsted: { conjugated: 'tiene', sampleSentence: 'Usted no tiene nada tampoco.', sampleTranslation: 'You don\'t have anything either.' },
      nosotros: { conjugated: 'tenemos', sampleSentence: 'Nosotros tenemos tiempo libre.', sampleTranslation: 'We have free time.' },
      vosotros: { conjugated: 'tenéis', sampleSentence: 'Vosotros tenéis muchos amigos.', sampleTranslation: 'You all have many friends.' },
      ellosEllasUstedes: { conjugated: 'tienen', sampleSentence: 'Ustedes tienen también problemas.', sampleTranslation: 'You all also have problems.' }
    },
    preterite: {
      isIrregular: true,
      yo: { conjugated: 'tuve', sampleSentence: 'Yo tuve siempre buena suerte.', sampleTranslation: 'I always had good luck.' },
      tu: { conjugated: 'tuviste', sampleSentence: 'Tú tuviste mucha paciencia.', sampleTranslation: 'You had a lot of patience.' },
      elEllaUsted: { conjugated: 'tuvo', sampleSentence: 'Usted no tuvo nada tampoco.', sampleTranslation: 'You didn\'t have anything either.' },
      nosotros: { conjugated: 'tuvimos', sampleSentence: 'Nosotros tuvimos tiempo libre.', sampleTranslation: 'We had free time.' },
      vosotros: { conjugated: 'tuvisteis', sampleSentence: 'Vosotros tuvisteis muchos amigos.', sampleTranslation: 'You all had many friends.' },
      ellosEllasUstedes: { conjugated: 'tuvieron', sampleSentence: 'Ustedes tuvieron también problemas.', sampleTranslation: 'You all also had problems.' }
    },
    imperfect: {
      yo: { conjugated: 'tenía', sampleSentence: 'Yo tenía siempre buena suerte.', sampleTranslation: 'I used to have good luck.' },
      tu: { conjugated: 'tenías', sampleSentence: 'Tú tenías mucha paciencia.', sampleTranslation: 'You used to have a lot of patience.' },
      elEllaUsted: { conjugated: 'tenía', sampleSentence: 'Usted no tenía nada tampoco.', sampleTranslation: 'You didn\'t use to have anything either.' },
      nosotros: { conjugated: 'teníamos', sampleSentence: 'Nosotros teníamos tiempo libre.', sampleTranslation: 'We used to have free time.' },
      vosotros: { conjugated: 'teníais', sampleSentence: 'Vosotros teníais muchos amigos.', sampleTranslation: 'You all used to have many friends.' },
      ellosEllasUstedes: { conjugated: 'tenían', sampleSentence: 'Ustedes tenían también problemas.', sampleTranslation: 'You all also used to have problems.' }
    }
  },
  {
    infinitive: 'ver',
    definition: 'to see',
    isImportant: true,
    present: {
      isIrregular: true,
      irregularDescription: 'yo: veo',
      yo: { conjugated: 'veo', sampleSentence: 'Yo veo a alguien en la calle.', sampleTranslation: 'I see someone on the street.' },
      tu: { conjugated: 'ves', sampleSentence: 'Tú ves la televisión mucho.', sampleTranslation: 'You watch television a lot.' },
      elEllaUsted: { conjugated: 've', sampleSentence: 'Usted nunca ve nada tampoco.', sampleTranslation: 'You never see anything either.' },
      nosotros: { conjugated: 'vemos', sampleSentence: 'Nosotros vemos las noticias.', sampleTranslation: 'We watch the news.' },
      vosotros: { conjugated: 'veis', sampleSentence: 'Vosotros veis películas.', sampleTranslation: 'You all watch movies.' },
      ellosEllasUstedes: { conjugated: 'ven', sampleSentence: 'Ustedes ven también la película.', sampleTranslation: 'You all also see the movie.' }
    },
    preterite: {
      isIrregular: true,
      yo: { conjugated: 'vi', sampleSentence: 'Yo vi a alguien en la calle.', sampleTranslation: 'I saw someone on the street.' },
      tu: { conjugated: 'viste', sampleSentence: 'Tú viste la televisión ayer.', sampleTranslation: 'You watched television yesterday.' },
      elEllaUsted: { conjugated: 'vio', sampleSentence: 'Usted nunca vio nada tampoco.', sampleTranslation: 'You never saw anything either.' },
      nosotros: { conjugated: 'vimos', sampleSentence: 'Nosotros vimos las noticias.', sampleTranslation: 'We saw the news.' },
      vosotros: { conjugated: 'visteis', sampleSentence: 'Vosotros visteis películas.', sampleTranslation: 'You all watched movies.' },
      ellosEllasUstedes: { conjugated: 'vieron', sampleSentence: 'Ustedes vieron también la película.', sampleTranslation: 'You all also saw the movie.' }
    },
    imperfect: {
      isIrregular: true,
      yo: { conjugated: 'veía', sampleSentence: 'Yo veía a alguien en la calle.', sampleTranslation: 'I used to see someone on the street.' },
      tu: { conjugated: 'veías', sampleSentence: 'Tú veías la televisión mucho.', sampleTranslation: 'You used to watch television a lot.' },
      elEllaUsted: { conjugated: 'veía', sampleSentence: 'Usted nunca veía nada tampoco.', sampleTranslation: 'You never used to see anything either.' },
      nosotros: { conjugated: 'veíamos', sampleSentence: 'Nosotros veíamos las noticias.', sampleTranslation: 'We used to watch the news.' },
      vosotros: { conjugated: 'veíais', sampleSentence: 'Vosotros veíais películas.', sampleTranslation: 'You all used to watch movies.' },
      ellosEllasUstedes: { conjugated: 'veían', sampleSentence: 'Ustedes veían también la película.', sampleTranslation: 'You all also used to see the movie.' }
    }
  },
  {
    infinitive: 'visitar',
    definition: 'to visit',
    isImportant: false,
    present: {
      yo: { conjugated: 'visito', sampleSentence: 'Yo visito siempre a los abuelos.', sampleTranslation: 'I always visit the grandparents.' },
      tu: { conjugated: 'visitas', sampleSentence: 'Tú visitas a tus amigos.', sampleTranslation: 'You visit your friends.' },
      elEllaUsted: { conjugated: 'visita', sampleSentence: 'Usted ya no visita a nadie.', sampleTranslation: 'You no longer visit anyone.' },
      nosotros: { conjugated: 'visitamos', sampleSentence: 'Nosotros visitamos ciudades.', sampleTranslation: 'We visit cities.' },
      vosotros: { conjugated: 'visitáis', sampleSentence: 'Vosotros visitáis monumentos.', sampleTranslation: 'You all visit monuments.' },
      ellosEllasUstedes: { conjugated: 'visitan', sampleSentence: 'Ustedes visitan también el museo.', sampleTranslation: 'You all also visit the museum.' }
    },
    preterite: {
      yo: { conjugated: 'visité', sampleSentence: 'Yo visité siempre a los abuelos.', sampleTranslation: 'I always visited the grandparents.' },
      tu: { conjugated: 'visitaste', sampleSentence: 'Tú visitaste a tus amigos.', sampleTranslation: 'You visited your friends.' },
      elEllaUsted: { conjugated: 'visitó', sampleSentence: 'Usted ya no visitó a nadie.', sampleTranslation: 'You no longer visited anyone.' },
      nosotros: { conjugated: 'visitamos', sampleSentence: 'Nosotros visitamos ciudades.', sampleTranslation: 'We visited cities.' },
      vosotros: { conjugated: 'visitasteis', sampleSentence: 'Vosotros visitasteis monumentos.', sampleTranslation: 'You all visited monuments.' },
      ellosEllasUstedes: { conjugated: 'visitaron', sampleSentence: 'Ustedes visitaron también el museo.', sampleTranslation: 'You all also visited the museum.' }
    },
    imperfect: {
      yo: { conjugated: 'visitaba', sampleSentence: 'Yo visitaba siempre a los abuelos.', sampleTranslation: 'I used to visit the grandparents.' },
      tu: { conjugated: 'visitabas', sampleSentence: 'Tú visitabas a tus amigos.', sampleTranslation: 'You used to visit your friends.' },
      elEllaUsted: { conjugated: 'visitaba', sampleSentence: 'Usted ya no visitaba a nadie.', sampleTranslation: 'You no longer used to visit anyone.' },
      nosotros: { conjugated: 'visitábamos', sampleSentence: 'Nosotros visitábamos ciudades.', sampleTranslation: 'We used to visit cities.' },
      vosotros: { conjugated: 'visitabais', sampleSentence: 'Vosotros visitabais monumentos.', sampleTranslation: 'You all used to visit monuments.' },
      ellosEllasUstedes: { conjugated: 'visitaban', sampleSentence: 'Ustedes visitaban también el museo.', sampleTranslation: 'You all also used to visit the museum.' }
    }
  },
  {
    infinitive: 'vivir',
    definition: 'to live',
    isImportant: false,
    present: {
      yo: { conjugated: 'vivo', sampleSentence: 'Yo vivo siempre en España.', sampleTranslation: 'I always live in Spain.' },
      tu: { conjugated: 'vives', sampleSentence: 'Tú vives muy bien aquí.', sampleTranslation: 'You live very well here.' },
      elEllaUsted: { conjugated: 'vive', sampleSentence: 'Usted nunca vive con nadie.', sampleTranslation: 'You never live with anyone.' },
      nosotros: { conjugated: 'vivimos', sampleSentence: 'Nosotros vivimos en una casa.', sampleTranslation: 'We live in a house.' },
      vosotros: { conjugated: 'vivís', sampleSentence: 'Vosotros vivís en el centro.', sampleTranslation: 'You all live downtown.' },
      ellosEllasUstedes: { conjugated: 'viven', sampleSentence: 'Ustedes viven también aquí.', sampleTranslation: 'You all also live here.' }
    },
    preterite: {
      yo: { conjugated: 'viví', sampleSentence: 'Yo viví siempre en España.', sampleTranslation: 'I always lived in Spain.' },
      tu: { conjugated: 'viviste', sampleSentence: 'Tú viviste muy bien allí.', sampleTranslation: 'You lived very well there.' },
      elEllaUsted: { conjugated: 'vivió', sampleSentence: 'Usted nunca vivió con nadie.', sampleTranslation: 'You never lived with anyone.' },
      nosotros: { conjugated: 'vivimos', sampleSentence: 'Nosotros vivimos en una casa.', sampleTranslation: 'We lived in a house.' },
      vosotros: { conjugated: 'vivisteis', sampleSentence: 'Vosotros vivisteis en el centro.', sampleTranslation: 'You all lived downtown.' },
      ellosEllasUstedes: { conjugated: 'vivieron', sampleSentence: 'Ustedes vivieron también aquí.', sampleTranslation: 'You all also lived here.' }
    },
    imperfect: {
      yo: { conjugated: 'vivía', sampleSentence: 'Yo vivía siempre en España.', sampleTranslation: 'I used to live in Spain.' },
      tu: { conjugated: 'vivías', sampleSentence: 'Tú vivías muy bien aquí.', sampleTranslation: 'You used to live very well here.' },
      elEllaUsted: { conjugated: 'vivía', sampleSentence: 'Usted nunca vivía con nadie.', sampleTranslation: 'You never used to live with anyone.' },
      nosotros: { conjugated: 'vivíamos', sampleSentence: 'Nosotros vivíamos en una casa.', sampleTranslation: 'We used to live in a house.' },
      vosotros: { conjugated: 'vivíais', sampleSentence: 'Vosotros vivíais en el centro.', sampleTranslation: 'You all used to live downtown.' },
      ellosEllasUstedes: { conjugated: 'vivían', sampleSentence: 'Ustedes vivían también aquí.', sampleTranslation: 'You all also used to live here.' }
    }
  }
];




