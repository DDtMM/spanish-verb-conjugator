
export interface VerbConjugationWithSample {
  conjugated: string;
  englishTranslation: string;
  sampleSentence: string;
  sampleTranslation: string;
}
export const CONJUGATION_CATEGORIES = ['yo', 'tu', 'elEllaUsted', 'nosotros', 'vosotros', 'ellosEllasUstedes'] as const;

export type ConjugationCategory = (typeof CONJUGATION_CATEGORIES)[number];

export const TENSES = ['present', 'preterite', 'imperfect'] as const;

export type Tense = (typeof TENSES)[number];

export type TenseConjugations = {
  [key in ConjugationCategory]: VerbConjugationWithSample;
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
      yo: { conjugated: 'bajo', englishTranslation: 'I go down', sampleSentence: 'Yo bajo las escaleras siempre muy rápido.', sampleTranslation: 'I always go down the stairs very fast.' },
      tu: { conjugated: 'bajas', englishTranslation: 'you go down', sampleSentence: 'Tú bajas muy despacio cada mañana.', sampleTranslation: 'You go down very slowly every morning.' },
      elEllaUsted: { conjugated: 'baja', englishTranslation: 'he/she goes down', sampleSentence: 'Usted baja con cuidado todos los días.', sampleTranslation: 'You go down carefully every day.' },
      nosotros: { conjugated: 'bajamos', englishTranslation: 'we go down', sampleSentence: 'Nosotros bajamos todos los días.', sampleTranslation: 'We go down every day.' },
      vosotros: { conjugated: 'bajáis', englishTranslation: 'you all go down', sampleSentence: 'Vosotros bajáis siempre juntos.', sampleTranslation: 'You all always go down together.' },
      ellosEllasUstedes: { conjugated: 'bajan', englishTranslation: 'they go down', sampleSentence: 'Ustedes nunca bajan al sótano.', sampleTranslation: 'You all never go down to the basement.' }
    },
    preterite: {
      yo: { conjugated: 'bajé', englishTranslation: 'I went down', sampleSentence: 'Yo bajé las escaleras muy rápido.', sampleTranslation: 'I went down the stairs very fast.' },
      tu: { conjugated: 'bajaste', englishTranslation: 'you went down', sampleSentence: 'Tú bajaste muy despacio ayer.', sampleTranslation: 'You went down very slowly yesterday.' },
      elEllaUsted: { conjugated: 'bajó', englishTranslation: 'he/she went down', sampleSentence: 'Usted bajó siempre con cuidado.', sampleTranslation: 'You always went down carefully.' },
      nosotros: { conjugated: 'bajamos', englishTranslation: 'we went down', sampleSentence: 'Nosotros bajamos ayer también.', sampleTranslation: 'We also went down yesterday.' },
      vosotros: { conjugated: 'bajasteis', englishTranslation: 'you all went down', sampleSentence: 'Vosotros bajasteis juntos anoche.', sampleTranslation: 'You all went down together last night.' },
      ellosEllasUstedes: { conjugated: 'bajaron', englishTranslation: 'they went down', sampleSentence: 'Ustedes nunca bajaron al sótano.', sampleTranslation: 'You all never went down to the basement.' }
    },
    imperfect: {
      yo: { conjugated: 'bajaba', englishTranslation: 'I used to go down', sampleSentence: 'Yo bajaba las escaleras siempre muy rápido.', sampleTranslation: 'I used to go down the stairs very fast.' },
      tu: { conjugated: 'bajabas', englishTranslation: 'you used to go down', sampleSentence: 'Tú bajabas muy despacio cada mañana.', sampleTranslation: 'You used to go down very slowly every morning.' },
      elEllaUsted: { conjugated: 'bajaba', englishTranslation: 'he/she used to go down', sampleSentence: 'Usted bajaba con cuidado todos los días.', sampleTranslation: 'You used to go down carefully every day.' },
      nosotros: { conjugated: 'bajábamos', englishTranslation: 'we used to go down', sampleSentence: 'Nosotros bajábamos todos los días.', sampleTranslation: 'We used to go down every day.' },
      vosotros: { conjugated: 'bajabais', englishTranslation: 'you all used to go down', sampleSentence: 'Vosotros bajabais siempre juntos.', sampleTranslation: 'You all used to go down together.' },
      ellosEllasUstedes: { conjugated: 'bajaban', englishTranslation: 'they used to go down', sampleSentence: 'Ustedes nunca bajaban al sótano.', sampleTranslation: 'You all never used to go down to the basement.' }
    }
  },
  {
    infinitive: 'buscar',
    definition: 'to look for',
    isImportant: false,
    present: {
      yo: { conjugated: 'busco', englishTranslation: 'I look for', sampleSentence: 'Yo busco a alguien en la biblioteca.', sampleTranslation: 'I look for someone in the library.' },
      tu: { conjugated: 'buscas', englishTranslation: 'you look for', sampleSentence: 'Tú buscas trabajo cada día.', sampleTranslation: 'You look for a job every day.' },
      elEllaUsted: { conjugated: 'busca', englishTranslation: 'he/she looks for', sampleSentence: 'Usted también busca las llaves.', sampleTranslation: 'You also look for the keys.' },
      nosotros: { conjugated: 'buscamos', englishTranslation: 'we look for', sampleSentence: 'Nosotros buscamos una solución.', sampleTranslation: 'We look for a solution.' },
      vosotros: { conjugated: 'buscáis', englishTranslation: 'you all look for', sampleSentence: 'Vosotros buscáis siempre problemas.', sampleTranslation: 'You all always look for trouble.' },
      ellosEllasUstedes: { conjugated: 'buscan', englishTranslation: 'they look for', sampleSentence: 'Ustedes nunca buscan nada tampoco.', sampleTranslation: 'You all never look for anything either.' }
    },
    preterite: {
      yo: { conjugated: 'busqué', englishTranslation: 'I looked for', sampleSentence: 'Yo busqué a alguien en la biblioteca.', sampleTranslation: 'I looked for someone in the library.' },
      tu: { conjugated: 'buscaste', englishTranslation: 'you looked for', sampleSentence: 'Tú buscaste trabajo toda la semana.', sampleTranslation: 'You looked for a job all week.' },
      elEllaUsted: { conjugated: 'buscó', englishTranslation: 'he/she looked for', sampleSentence: 'Usted también buscó las llaves.', sampleTranslation: 'You also looked for the keys.' },
      nosotros: { conjugated: 'buscamos', englishTranslation: 'we looked for', sampleSentence: 'Nosotros buscamos una solución ayer.', sampleTranslation: 'We looked for a solution yesterday.' },
      vosotros: { conjugated: 'buscasteis', englishTranslation: 'you all looked for', sampleSentence: 'Vosotros buscasteis problemas anoche.', sampleTranslation: 'You all looked for trouble last night.' },
      ellosEllasUstedes: { conjugated: 'buscaron', englishTranslation: 'they looked for', sampleSentence: 'Ustedes nunca buscaron nada tampoco.', sampleTranslation: 'You all never looked for anything either.' }
    },
    imperfect: {
      yo: { conjugated: 'buscaba', englishTranslation: 'I used to look for', sampleSentence: 'Yo buscaba a alguien en la biblioteca.', sampleTranslation: 'I used to look for someone in the library.' },
      tu: { conjugated: 'buscabas', englishTranslation: 'you used to look for', sampleSentence: 'Tú buscabas trabajo cada día.', sampleTranslation: 'You used to look for a job every day.' },
      elEllaUsted: { conjugated: 'buscaba', englishTranslation: 'he/she used to look for', sampleSentence: 'Usted también buscaba las llaves.', sampleTranslation: 'You also used to look for the keys.' },
      nosotros: { conjugated: 'buscábamos', englishTranslation: 'we used to look for', sampleSentence: 'Nosotros buscábamos una solución.', sampleTranslation: 'We used to look for a solution.' },
      vosotros: { conjugated: 'buscabais', englishTranslation: 'you all used to look for', sampleSentence: 'Vosotros buscabais siempre problemas.', sampleTranslation: 'You all always used to look for trouble.' },
      ellosEllasUstedes: { conjugated: 'buscaban', englishTranslation: 'they used to look for', sampleSentence: 'Ustedes nunca buscaban nada tampoco.', sampleTranslation: 'You all never used to look for anything either.' }
    }
  },
  {
    infinitive: 'correr',
    definition: 'to run',
    isImportant: false,
    present: {
      yo: { conjugated: 'corro', englishTranslation: 'I run', sampleSentence: 'Yo corro siempre en las mañanas.', sampleTranslation: 'I always run in the mornings.' },
      tu: { conjugated: 'corres', englishTranslation: 'you run', sampleSentence: 'Tú corres muy rápido siempre.', sampleTranslation: 'You always run very fast.' },
      elEllaUsted: { conjugated: 'corre', englishTranslation: 'he/she runs', sampleSentence: 'Usted nunca corre en la lluvia.', sampleTranslation: 'You never run in the rain.' },
      nosotros: { conjugated: 'corremos', englishTranslation: 'we run', sampleSentence: 'Nosotros corremos juntos cada día.', sampleTranslation: 'We run together every day.' },
      vosotros: { conjugated: 'corréis', englishTranslation: 'you all run', sampleSentence: 'Vosotros corréis en el parque.', sampleTranslation: 'You all run in the park.' },
      ellosEllasUstedes: { conjugated: 'corren', englishTranslation: 'they run', sampleSentence: 'Ustedes corren también cada día.', sampleTranslation: 'You all also run every day.' }
    },
    preterite: {
      yo: { conjugated: 'corrí', englishTranslation: 'I ran', sampleSentence: 'Yo corrí siempre en las mañanas.', sampleTranslation: 'I always ran in the mornings.' },
      tu: { conjugated: 'corriste', englishTranslation: 'you ran', sampleSentence: 'Tú corriste muy rápido ayer.', sampleTranslation: 'You ran very fast yesterday.' },
      elEllaUsted: { conjugated: 'corrió', englishTranslation: 'he/she ran', sampleSentence: 'Usted nunca corrió en la lluvia.', sampleTranslation: 'You never ran in the rain.' },
      nosotros: { conjugated: 'corrimos', englishTranslation: 'we ran', sampleSentence: 'Nosotros corrimos juntos ayer.', sampleTranslation: 'We ran together yesterday.' },
      vosotros: { conjugated: 'corristeis', englishTranslation: 'you all ran', sampleSentence: 'Vosotros corristeis en el parque.', sampleTranslation: 'You all ran in the park.' },
      ellosEllasUstedes: { conjugated: 'corrieron', englishTranslation: 'they ran', sampleSentence: 'Ustedes corrieron también ayer.', sampleTranslation: 'You all also ran yesterday.' }
    },
    imperfect: {
      yo: { conjugated: 'corría', englishTranslation: 'I used to run', sampleSentence: 'Yo corría siempre en las mañanas.', sampleTranslation: 'I used to run in the mornings.' },
      tu: { conjugated: 'corrías', englishTranslation: 'you used to run', sampleSentence: 'Tú corrías muy rápido siempre.', sampleTranslation: 'You used to run very fast.' },
      elEllaUsted: { conjugated: 'corría', englishTranslation: 'he/she used to run', sampleSentence: 'Usted nunca corría en la lluvia.', sampleTranslation: 'You never used to run in the rain.' },
      nosotros: { conjugated: 'corríamos', englishTranslation: 'we used to run', sampleSentence: 'Nosotros corríamos juntos cada día.', sampleTranslation: 'We used to run together every day.' },
      vosotros: { conjugated: 'corríais', englishTranslation: 'you all used to run', sampleSentence: 'Vosotros corríais en el parque.', sampleTranslation: 'You all used to run in the park.' },
      ellosEllasUstedes: { conjugated: 'corrían', englishTranslation: 'they used to run', sampleSentence: 'Ustedes corrían también cada día.', sampleTranslation: 'You all also used to run every day.' }
    }
  },
  {
    infinitive: 'dar',
    definition: 'to give',
    isImportant: false,
    present: {
      yo: { conjugated: 'doy', englishTranslation: 'I give', sampleSentence: 'Yo doy regalos a todos.', sampleTranslation: 'I give gifts to everyone.' },
      tu: { conjugated: 'das', englishTranslation: 'you give', sampleSentence: 'Tú das consejos buenos siempre.', sampleTranslation: 'You always give good advice.' },
      elEllaUsted: { conjugated: 'da', englishTranslation: 'he/she gives', sampleSentence: 'Usted no da nada a nadie.', sampleTranslation: 'You don\'t give anything to anyone.' },
      nosotros: { conjugated: 'damos', englishTranslation: 'we give', sampleSentence: 'Nosotros damos ayuda a otros.', sampleTranslation: 'We give help to others.' },
      vosotros: { conjugated: 'dais', englishTranslation: 'you all give', sampleSentence: 'Vosotros dais dinero a veces.', sampleTranslation: 'You all sometimes give money.' },
      ellosEllasUstedes: { conjugated: 'dan', englishTranslation: 'they give', sampleSentence: 'Ustedes dan ayuda también.', sampleTranslation: 'You all also give help.' }
    },
    preterite: {
      yo: { conjugated: 'di', englishTranslation: 'I gave', sampleSentence: 'Yo di regalos a todos.', sampleTranslation: 'I gave gifts to everyone.' },
      tu: { conjugated: 'diste', englishTranslation: 'you gave', sampleSentence: 'Tú diste consejos buenos ayer.', sampleTranslation: 'You gave good advice yesterday.' },
      elEllaUsted: { conjugated: 'dio', englishTranslation: 'he/she gave', sampleSentence: 'Usted no dio nada a nadie.', sampleTranslation: 'You didn\'t give anything to anyone.' },
      nosotros: { conjugated: 'dimos', englishTranslation: 'we gave', sampleSentence: 'Nosotros dimos ayuda a otros.', sampleTranslation: 'We gave help to others.' },
      vosotros: { conjugated: 'disteis', englishTranslation: 'you all gave', sampleSentence: 'Vosotros disteis dinero ayer.', sampleTranslation: 'You all gave money yesterday.' },
      ellosEllasUstedes: { conjugated: 'dieron', englishTranslation: 'they gave', sampleSentence: 'Ustedes dieron ayuda también.', sampleTranslation: 'You all also gave help.' }
    },
    imperfect: {
      yo: { conjugated: 'daba', englishTranslation: 'I used to give', sampleSentence: 'Yo daba regalos a todos.', sampleTranslation: 'I used to give gifts to everyone.' },
      tu: { conjugated: 'dabas', englishTranslation: 'you used to give', sampleSentence: 'Tú dabas consejos buenos siempre.', sampleTranslation: 'You used to give good advice.' },
      elEllaUsted: { conjugated: 'daba', englishTranslation: 'he/she used to give', sampleSentence: 'Usted no daba nada a nadie.', sampleTranslation: 'You didn\'t use to give anything to anyone.' },
      nosotros: { conjugated: 'dábamos', englishTranslation: 'we used to give', sampleSentence: 'Nosotros dábamos ayuda a otros.', sampleTranslation: 'We used to give help to others.' },
      vosotros: { conjugated: 'dabais', englishTranslation: 'you all used to give', sampleSentence: 'Vosotros dabais dinero a veces.', sampleTranslation: 'You all used to give money sometimes.' },
      ellosEllasUstedes: { conjugated: 'daban', englishTranslation: 'they used to give', sampleSentence: 'Ustedes daban ayuda también.', sampleTranslation: 'You all also used to give help.' }
    }
  },
  {
    infinitive: 'decir',
    definition: 'to say/tell',
    isImportant: false,
    present: {
      isIrregular: true,
      irregularDescription: 'yo: digo, stem-change e→i',
      yo: { conjugated: 'digo', englishTranslation: 'I say', sampleSentence: 'Yo digo siempre la verdad.', sampleTranslation: 'I always tell the truth.' },
      tu: { conjugated: 'dices', englishTranslation: 'you say', sampleSentence: 'Tú dices cosas interesantes siempre.', sampleTranslation: 'You always say interesting things.' },
      elEllaUsted: { conjugated: 'dice', englishTranslation: 'he/she says', sampleSentence: 'Usted no dice nada tampoco.', sampleTranslation: 'You don\'t say anything either.' },
      nosotros: { conjugated: 'decimos', englishTranslation: 'we say', sampleSentence: 'Nosotros decimos la verdad.', sampleTranslation: 'We tell the truth.' },
      vosotros: { conjugated: 'decís', englishTranslation: 'you all say', sampleSentence: 'Vosotros decís muchas mentiras.', sampleTranslation: 'You all tell many lies.' },
      ellosEllasUstedes: { conjugated: 'dicen', englishTranslation: 'they say', sampleSentence: 'Ustedes dicen algo importante.', sampleTranslation: 'You all say something important.' }
    },
    preterite: {
      isIrregular: true,
      yo: { conjugated: 'dije', englishTranslation: 'I said', sampleSentence: 'Yo dije siempre la verdad.', sampleTranslation: 'I always told the truth.' },
      tu: { conjugated: 'dijiste', englishTranslation: 'you said', sampleSentence: 'Tú dijiste cosas interesantes ayer.', sampleTranslation: 'You said interesting things yesterday.' },
      elEllaUsted: { conjugated: 'dijo', englishTranslation: 'he/she said', sampleSentence: 'Usted no dijo nada tampoco.', sampleTranslation: 'You didn\'t say anything either.' },
      nosotros: { conjugated: 'dijimos', englishTranslation: 'we said', sampleSentence: 'Nosotros dijimos la verdad.', sampleTranslation: 'We told the truth.' },
      vosotros: { conjugated: 'dijisteis', englishTranslation: 'you all said', sampleSentence: 'Vosotros dijisteis muchas mentiras.', sampleTranslation: 'You all told many lies.' },
      ellosEllasUstedes: { conjugated: 'dijeron', englishTranslation: 'they said', sampleSentence: 'Ustedes dijeron algo importante.', sampleTranslation: 'You all said something important.' }
    },
    imperfect: {
      yo: { conjugated: 'decía', englishTranslation: 'I used to say', sampleSentence: 'Yo decía siempre la verdad.', sampleTranslation: 'I used to tell the truth.' },
      tu: { conjugated: 'decías', englishTranslation: 'you used to say', sampleSentence: 'Tú decías cosas interesantes siempre.', sampleTranslation: 'You used to say interesting things.' },
      elEllaUsted: { conjugated: 'decía', englishTranslation: 'he/she used to say', sampleSentence: 'Usted no decía nada tampoco.', sampleTranslation: 'You didn\'t use to say anything either.' },
      nosotros: { conjugated: 'decíamos', englishTranslation: 'we used to say', sampleSentence: 'Nosotros decíamos la verdad.', sampleTranslation: 'We used to tell the truth.' },
      vosotros: { conjugated: 'decíais', englishTranslation: 'you all used to say', sampleSentence: 'Vosotros decíais muchas mentiras.', sampleTranslation: 'You all used to tell many lies.' },
      ellosEllasUstedes: { conjugated: 'decían', englishTranslation: 'they used to say', sampleSentence: 'Ustedes decían algo importante.', sampleTranslation: 'You all used to say something important.' }
    }
  },
  {
    infinitive: 'dormir',
    definition: 'to sleep',
    isImportant: false,
    present: {
      isIrregular: true,
      irregularDescription: 'stem-change o→ue',
      yo: { conjugated: 'duermo', englishTranslation: 'I sleep', sampleSentence: 'Yo duermo ya ocho horas.', sampleTranslation: 'I already sleep eight hours.' },
      tu: { conjugated: 'duermes', englishTranslation: 'you sleep', sampleSentence: 'Tú duermes muy bien siempre.', sampleTranslation: 'You always sleep very well.' },
      elEllaUsted: { conjugated: 'duerme', englishTranslation: 'he/she sleeps', sampleSentence: 'Usted nunca duerme en clase.', sampleTranslation: 'You never sleep in class.' },
      nosotros: { conjugated: 'dormimos', englishTranslation: 'we sleep', sampleSentence: 'Nosotros dormimos ocho horas.', sampleTranslation: 'We sleep eight hours.' },
      vosotros: { conjugated: 'dormís', englishTranslation: 'you all sleep', sampleSentence: 'Vosotros dormís muy poco.', sampleTranslation: 'You all sleep very little.' },
      ellosEllasUstedes: { conjugated: 'duermen', englishTranslation: 'they sleep', sampleSentence: 'Ustedes duermen siempre bien.', sampleTranslation: 'You all always sleep well.' }
    },
    preterite: {
      isIrregular: true,
      irregularDescription: 'o→u in 3rd person',
      yo: { conjugated: 'dormí', englishTranslation: 'I slept', sampleSentence: 'Yo dormí ya ocho horas.', sampleTranslation: 'I already slept eight hours.' },
      tu: { conjugated: 'dormiste', englishTranslation: 'you slept', sampleSentence: 'Tú dormiste muy bien anoche.', sampleTranslation: 'You slept very well last night.' },
      elEllaUsted: { conjugated: 'durmió', englishTranslation: 'he/she slept', sampleSentence: 'Usted nunca durmió en clase.', sampleTranslation: 'You never slept in class.' },
      nosotros: { conjugated: 'dormimos', englishTranslation: 'we slept', sampleSentence: 'Nosotros dormimos ocho horas.', sampleTranslation: 'We slept eight hours.' },
      vosotros: { conjugated: 'dormisteis', englishTranslation: 'you all slept', sampleSentence: 'Vosotros dormisteis muy poco.', sampleTranslation: 'You all slept very little.' },
      ellosEllasUstedes: { conjugated: 'durmieron', englishTranslation: 'they slept', sampleSentence: 'Ustedes durmieron siempre bien.', sampleTranslation: 'You all always slept well.' }
    },
    imperfect: {
      yo: { conjugated: 'dormía', englishTranslation: 'I used to sleep', sampleSentence: 'Yo dormía ya ocho horas.', sampleTranslation: 'I used to sleep eight hours.' },
      tu: { conjugated: 'dormías', englishTranslation: 'you used to sleep', sampleSentence: 'Tú dormías muy bien siempre.', sampleTranslation: 'You used to sleep very well.' },
      elEllaUsted: { conjugated: 'dormía', englishTranslation: 'he/she used to sleep', sampleSentence: 'Usted nunca dormía en clase.', sampleTranslation: 'You never used to sleep in class.' },
      nosotros: { conjugated: 'dormíamos', englishTranslation: 'we used to sleep', sampleSentence: 'Nosotros dormíamos ocho horas.', sampleTranslation: 'We used to sleep eight hours.' },
      vosotros: { conjugated: 'dormíais', englishTranslation: 'you all used to sleep', sampleSentence: 'Vosotros dormíais muy poco.', sampleTranslation: 'You all used to sleep very little.' },
      ellosEllasUstedes: { conjugated: 'dormían', englishTranslation: 'they used to sleep', sampleSentence: 'Ustedes dormían siempre bien.', sampleTranslation: 'You all used to sleep well.' }
    }
  },
  {
    infinitive: 'empezar',
    definition: 'to begin/start',
    isImportant: false,
    present: {
      isIrregular: true,
      irregularDescription: 'stem-change e→ie',
      yo: { conjugated: 'empiezo', englishTranslation: 'I begin', sampleSentence: 'Yo empiezo temprano también.', sampleTranslation: 'I also start early.' },
      tu: { conjugated: 'empiezas', englishTranslation: 'you begin', sampleSentence: 'Tú empiezas temprano cada día.', sampleTranslation: 'You start early every day.' },
      elEllaUsted: { conjugated: 'empieza', englishTranslation: 'he/she begins', sampleSentence: 'Usted nunca empieza el proyecto.', sampleTranslation: 'You never start the project.' },
      nosotros: { conjugated: 'empezamos', englishTranslation: 'we begin', sampleSentence: 'Nosotros empezamos a trabajar.', sampleTranslation: 'We start to work.' },
      vosotros: { conjugated: 'empezáis', englishTranslation: 'you all begin', sampleSentence: 'Vosotros empezáis muy tarde.', sampleTranslation: 'You all start very late.' },
      ellosEllasUstedes: { conjugated: 'empiezan', englishTranslation: 'they begin', sampleSentence: 'Ustedes empiezan ya el trabajo.', sampleTranslation: 'You all already start the work.' }
    },
    preterite: {
      isIrregular: true,
      irregularDescription: 'z→c in yo',
      yo: { conjugated: 'empecé', englishTranslation: 'I began', sampleSentence: 'Yo empecé temprano también.', sampleTranslation: 'I also started early.' },
      tu: { conjugated: 'empezaste', englishTranslation: 'you began', sampleSentence: 'Tú empezaste temprano ayer.', sampleTranslation: 'You started early yesterday.' },
      elEllaUsted: { conjugated: 'empezó', englishTranslation: 'he/she began', sampleSentence: 'Usted nunca empezó el proyecto.', sampleTranslation: 'You never started the project.' },
      nosotros: { conjugated: 'empezamos', englishTranslation: 'we began', sampleSentence: 'Nosotros empezamos a trabajar.', sampleTranslation: 'We started to work.' },
      vosotros: { conjugated: 'empezasteis', englishTranslation: 'you all began', sampleSentence: 'Vosotros empezasteis muy tarde.', sampleTranslation: 'You all started very late.' },
      ellosEllasUstedes: { conjugated: 'empezaron', englishTranslation: 'they began', sampleSentence: 'Ustedes empezaron ya el trabajo.', sampleTranslation: 'You all already started the work.' }
    },
    imperfect: {
      yo: { conjugated: 'empezaba', englishTranslation: 'I used to begin', sampleSentence: 'Yo empezaba temprano también.', sampleTranslation: 'I also used to start early.' },
      tu: { conjugated: 'empezabas', englishTranslation: 'you used to begin', sampleSentence: 'Tú empezabas temprano cada día.', sampleTranslation: 'You used to start early every day.' },
      elEllaUsted: { conjugated: 'empezaba', englishTranslation: 'he/she used to begin', sampleSentence: 'Usted nunca empezaba el proyecto.', sampleTranslation: 'You never used to start the project.' },
      nosotros: { conjugated: 'empezábamos', englishTranslation: 'we used to begin', sampleSentence: 'Nosotros empezábamos a trabajar.', sampleTranslation: 'We used to start to work.' },
      vosotros: { conjugated: 'empezabais', englishTranslation: 'you all used to begin', sampleSentence: 'Vosotros empezabais muy tarde.', sampleTranslation: 'You all used to start very late.' },
      ellosEllasUstedes: { conjugated: 'empezaban', englishTranslation: 'they used to begin', sampleSentence: 'Ustedes empezaban ya el trabajo.', sampleTranslation: 'You all already used to start the work.' }
    }
  },
  {
    infinitive: 'escribir',
    definition: 'to write',
    isImportant: false,
    present: {
      yo: { conjugated: 'escribo', englishTranslation: 'I write', sampleSentence: 'Yo escribo siempre con lápiz.', sampleTranslation: 'I always write with pencil.' },
      tu: { conjugated: 'escribes', englishTranslation: 'you write', sampleSentence: 'Tú escribes muy bien siempre.', sampleTranslation: 'You always write very well.' },
      elEllaUsted: { conjugated: 'escribe', englishTranslation: 'he/she writes', sampleSentence: 'Usted no escribe nada tampoco.', sampleTranslation: 'You don\'t write anything either.' },
      nosotros: { conjugated: 'escribimos', englishTranslation: 'we write', sampleSentence: 'Nosotros escribimos cartas.', sampleTranslation: 'We write letters.' },
      vosotros: { conjugated: 'escribís', englishTranslation: 'you all write', sampleSentence: 'Vosotros escribís en español.', sampleTranslation: 'You all write in Spanish.' },
      ellosEllasUstedes: { conjugated: 'escriben', englishTranslation: 'they write', sampleSentence: 'Ustedes escriben algo importante.', sampleTranslation: 'You all write something important.' }
    },
    preterite: {
      yo: { conjugated: 'escribí', englishTranslation: 'I wrote', sampleSentence: 'Yo escribí siempre con lápiz.', sampleTranslation: 'I always wrote with pencil.' },
      tu: { conjugated: 'escribiste', englishTranslation: 'you wrote', sampleSentence: 'Tú escribiste muy bien ayer.', sampleTranslation: 'You wrote very well yesterday.' },
      elEllaUsted: { conjugated: 'escribió', englishTranslation: 'he/she wrote', sampleSentence: 'Usted no escribió nada tampoco.', sampleTranslation: 'You didn\'t write anything either.' },
      nosotros: { conjugated: 'escribimos', englishTranslation: 'we wrote', sampleSentence: 'Nosotros escribimos cartas ayer.', sampleTranslation: 'We wrote letters yesterday.' },
      vosotros: { conjugated: 'escribisteis', englishTranslation: 'you all wrote', sampleSentence: 'Vosotros escribisteis en español.', sampleTranslation: 'You all wrote in Spanish.' },
      ellosEllasUstedes: { conjugated: 'escribieron', englishTranslation: 'they wrote', sampleSentence: 'Ustedes escribieron algo importante.', sampleTranslation: 'You all wrote something important.' }
    },
    imperfect: {
      yo: { conjugated: 'escribía', englishTranslation: 'I used to write', sampleSentence: 'Yo escribía siempre con lápiz.', sampleTranslation: 'I used to write with pencil.' },
      tu: { conjugated: 'escribías', englishTranslation: 'you used to write', sampleSentence: 'Tú escribías muy bien siempre.', sampleTranslation: 'You used to write very well.' },
      elEllaUsted: { conjugated: 'escribía', englishTranslation: 'he/she used to write', sampleSentence: 'Usted no escribía nada tampoco.', sampleTranslation: 'You didn\'t use to write anything either.' },
      nosotros: { conjugated: 'escribíamos', englishTranslation: 'we used to write', sampleSentence: 'Nosotros escribíamos cartas.', sampleTranslation: 'We used to write letters.' },
      vosotros: { conjugated: 'escribíais', englishTranslation: 'you all used to write', sampleSentence: 'Vosotros escribíais en español.', sampleTranslation: 'You all used to write in Spanish.' },
      ellosEllasUstedes: { conjugated: 'escribían', englishTranslation: 'they used to write', sampleSentence: 'Ustedes escribían algo importante.', sampleTranslation: 'You all used to write something important.' }
    }
  },
  {
    infinitive: 'estar',
    definition: 'to be (temporary/location)',
    isImportant: true,
    present: {
      isIrregular: true,
      irregularDescription: 'yo: estoy',
      yo: { conjugated: 'estoy', englishTranslation: 'I am', sampleSentence: 'Yo estoy siempre en casa.', sampleTranslation: 'I am always at home.' },
      tu: { conjugated: 'estás', englishTranslation: 'you are', sampleSentence: 'Tú estás muy feliz hoy.', sampleTranslation: 'You are very happy today.' },
      elEllaUsted: { conjugated: 'está', englishTranslation: 'he/she is', sampleSentence: 'Usted ya no está con alguien.', sampleTranslation: 'You are no longer with someone.' },
      nosotros: { conjugated: 'estamos', englishTranslation: 'we are', sampleSentence: 'Nosotros estamos en la escuela.', sampleTranslation: 'We are at school.' },
      vosotros: { conjugated: 'estáis', englishTranslation: 'you all are', sampleSentence: 'Vosotros estáis muy cansados.', sampleTranslation: 'You all are very tired.' },
      ellosEllasUstedes: { conjugated: 'están', englishTranslation: 'they are', sampleSentence: 'Ustedes están también aquí.', sampleTranslation: 'You all are also here.' }
    },
    preterite: {
      isIrregular: true,
      yo: { conjugated: 'estuve', englishTranslation: 'I was', sampleSentence: 'Yo estuve siempre en casa.', sampleTranslation: 'I was always at home.' },
      tu: { conjugated: 'estuviste', englishTranslation: 'you were', sampleSentence: 'Tú estuviste muy feliz ayer.', sampleTranslation: 'You were very happy yesterday.' },
      elEllaUsted: { conjugated: 'estuvo', englishTranslation: 'he/she was', sampleSentence: 'Usted ya no estuvo con alguien.', sampleTranslation: 'You were no longer with someone.' },
      nosotros: { conjugated: 'estuvimos', englishTranslation: 'we were', sampleSentence: 'Nosotros estuvimos en la escuela.', sampleTranslation: 'We were at school.' },
      vosotros: { conjugated: 'estuvisteis', englishTranslation: 'you all were', sampleSentence: 'Vosotros estuvisteis muy cansados.', sampleTranslation: 'You all were very tired.' },
      ellosEllasUstedes: { conjugated: 'estuvieron', englishTranslation: 'they were', sampleSentence: 'Ustedes estuvieron también aquí.', sampleTranslation: 'You all were also here.' }
    },
    imperfect: {
      yo: { conjugated: 'estaba', englishTranslation: 'I used to be', sampleSentence: 'Yo estaba siempre en casa.', sampleTranslation: 'I used to be at home.' },
      tu: { conjugated: 'estabas', englishTranslation: 'you used to be', sampleSentence: 'Tú estabas muy feliz entonces.', sampleTranslation: 'You used to be very happy then.' },
      elEllaUsted: { conjugated: 'estaba', englishTranslation: 'he/she used to be', sampleSentence: 'Usted ya no estaba con alguien.', sampleTranslation: 'You were no longer with someone.' },
      nosotros: { conjugated: 'estábamos', englishTranslation: 'we used to be', sampleSentence: 'Nosotros estábamos en la escuela.', sampleTranslation: 'We used to be at school.' },
      vosotros: { conjugated: 'estabais', englishTranslation: 'you all used to be', sampleSentence: 'Vosotros estabais muy cansados.', sampleTranslation: 'You all used to be very tired.' },
      ellosEllasUstedes: { conjugated: 'estaban', englishTranslation: 'they used to be', sampleSentence: 'Ustedes estaban también aquí.', sampleTranslation: 'You all used to be here too.' }
    }
  },
  {
    infinitive: 'hablar',
    definition: 'to speak',
    isImportant: false,
    present: {
      yo: { conjugated: 'hablo', englishTranslation: 'I speak', sampleSentence: 'Yo hablo siempre en español.', sampleTranslation: 'I always speak in Spanish.' },
      tu: { conjugated: 'hablas', englishTranslation: 'you speak', sampleSentence: 'Tú hablas muy rápido siempre.', sampleTranslation: 'You always speak very fast.' },
      elEllaUsted: { conjugated: 'habla', englishTranslation: 'he/she speaks', sampleSentence: 'Usted no habla con nadie tampoco.', sampleTranslation: 'You don\'t speak with anyone either.' },
      nosotros: { conjugated: 'hablamos', englishTranslation: 'we speak', sampleSentence: 'Nosotros hablamos en inglés.', sampleTranslation: 'We speak in English.' },
      vosotros: { conjugated: 'habláis', englishTranslation: 'you all speak', sampleSentence: 'Vosotros habláis muy alto.', sampleTranslation: 'You all speak very loud.' },
      ellosEllasUstedes: { conjugated: 'hablan', englishTranslation: 'they speak', sampleSentence: 'Ustedes hablan también cada día.', sampleTranslation: 'You all also speak every day.' }
    },
    preterite: {
      yo: { conjugated: 'hablé', englishTranslation: 'I spoke', sampleSentence: 'Yo hablé siempre en español.', sampleTranslation: 'I always spoke in Spanish.' },
      tu: { conjugated: 'hablaste', englishTranslation: 'you spoke', sampleSentence: 'Tú hablaste muy rápido ayer.', sampleTranslation: 'You spoke very fast yesterday.' },
      elEllaUsted: { conjugated: 'habló', englishTranslation: 'he/she spoke', sampleSentence: 'Usted no habló con nadie tampoco.', sampleTranslation: 'You didn\'t speak with anyone either.' },
      nosotros: { conjugated: 'hablamos', englishTranslation: 'we spoke', sampleSentence: 'Nosotros hablamos en inglés.', sampleTranslation: 'We speak in English.' },
      vosotros: { conjugated: 'hablasteis', englishTranslation: 'you all spoke', sampleSentence: 'Vosotros hablasteis muy alto.', sampleTranslation: 'You all spoke very loud.' },
      ellosEllasUstedes: { conjugated: 'hablaron', englishTranslation: 'they spoke', sampleSentence: 'Ustedes hablaron también ayer.', sampleTranslation: 'You all also spoke yesterday.' }
    },
    imperfect: {
      yo: { conjugated: 'hablaba', englishTranslation: 'I used to speak', sampleSentence: 'Yo hablaba siempre en español.', sampleTranslation: 'I used to speak in Spanish.' },
      tu: { conjugated: 'hablabas', englishTranslation: 'you used to speak', sampleSentence: 'Tú hablabas muy rápido siempre.', sampleTranslation: 'You used to speak very fast.' },
      elEllaUsted: { conjugated: 'hablaba', englishTranslation: 'he/she used to speak', sampleSentence: 'Usted no hablaba con nadie tampoco.', sampleTranslation: 'You didn\'t use to speak with anyone either.' },
      nosotros: { conjugated: 'hablábamos', englishTranslation: 'we used to speak', sampleSentence: 'Nosotros hablábamos en inglés.', sampleTranslation: 'We used to speak in English.' },
      vosotros: { conjugated: 'hablabais', englishTranslation: 'you all used to speak', sampleSentence: 'Vosotros hablabais muy alto.', sampleTranslation: 'You all used to speak very loud.' },
      ellosEllasUstedes: { conjugated: 'hablaban', englishTranslation: 'they used to speak', sampleSentence: 'Ustedes hablaban también cada día.', sampleTranslation: 'You all also used to speak every day.' }
    }
  },
  {
    infinitive: 'hacer',
    definition: 'to do/make',
    isImportant: true,
    present: {
      isIrregular: true,
      irregularDescription: 'yo: hago',
      yo: { conjugated: 'hago', englishTranslation: 'I do/make', sampleSentence: 'Yo hago también la tarea.', sampleTranslation: 'I also do the homework.' },
      tu: { conjugated: 'haces', englishTranslation: 'you do/make', sampleSentence: 'Tú haces todo muy bien.', sampleTranslation: 'You do everything very well.' },
      elEllaUsted: { conjugated: 'hace', englishTranslation: 'he/she does/makes', sampleSentence: 'Usted nunca hace nada malo.', sampleTranslation: 'You never do anything bad.' },
      nosotros: { conjugated: 'hacemos', englishTranslation: 'we do/make', sampleSentence: 'Nosotros hacemos la cena.', sampleTranslation: 'We make dinner.' },
      vosotros: { conjugated: 'hacéis', englishTranslation: 'you all do/make', sampleSentence: 'Vosotros hacéis mucho ruido.', sampleTranslation: 'You all make a lot of noise.' },
      ellosEllasUstedes: { conjugated: 'hacen', englishTranslation: 'they do/make', sampleSentence: 'Ustedes hacen siempre algo bueno.', sampleTranslation: 'You all always do something good.' }
    },
    preterite: {
      isIrregular: true,
      yo: { conjugated: 'hice', englishTranslation: 'I did/made', sampleSentence: 'Yo hice también la tarea.', sampleTranslation: 'I also did the homework.' },
      tu: { conjugated: 'hiciste', englishTranslation: 'you did/made', sampleSentence: 'Tú hiciste todo muy bien.', sampleTranslation: 'You did everything very well.' },
      elEllaUsted: { conjugated: 'hizo', englishTranslation: 'he/she did/made', sampleSentence: 'Usted nunca hizo nada malo.', sampleTranslation: 'You never did anything bad.' },
      nosotros: { conjugated: 'hicimos', englishTranslation: 'we did/made', sampleSentence: 'Nosotros hicimos la cena.', sampleTranslation: 'We made dinner.' },
      vosotros: { conjugated: 'hicisteis', englishTranslation: 'you all did/made', sampleSentence: 'Vosotros hicisteis mucho ruido.', sampleTranslation: 'You all made a lot of noise.' },
      ellosEllasUstedes: { conjugated: 'hicieron', englishTranslation: 'they did/made', sampleSentence: 'Ustedes hicieron siempre algo bueno.', sampleTranslation: 'You all always did something good.' }
    },
    imperfect: {
      yo: { conjugated: 'hacía', englishTranslation: 'I used to do/make', sampleSentence: 'Yo hacía también la tarea.', sampleTranslation: 'I also used to do the homework.' },
      tu: { conjugated: 'hacías', englishTranslation: 'you used to do/make', sampleSentence: 'Tú hacías todo muy bien.', sampleTranslation: 'You used to do everything very well.' },
      elEllaUsted: { conjugated: 'hacía', englishTranslation: 'he/she used to do/make', sampleSentence: 'Usted nunca hacía nada malo.', sampleTranslation: 'You never used to do anything bad.' },
      nosotros: { conjugated: 'hacíamos', englishTranslation: 'we used to do/make', sampleSentence: 'Nosotros hacíamos la cena.', sampleTranslation: 'We used to make dinner.' },
      vosotros: { conjugated: 'hacíais', englishTranslation: 'you all used to do/make', sampleSentence: 'Vosotros hacíais mucho ruido.', sampleTranslation: 'You all used to make a lot of noise.' },
      ellosEllasUstedes: { conjugated: 'hacían', englishTranslation: 'they used to do/make', sampleSentence: 'Ustedes hacían siempre algo bueno.', sampleTranslation: 'You all used to do something good.' }
    }
  },
  {
    infinitive: 'ir',
    definition: 'to go',
    isImportant: true,
    present: {
      isIrregular: true,
      yo: { conjugated: 'voy', englishTranslation: 'I go', sampleSentence: 'Yo voy siempre solo.', sampleTranslation: 'I always go alone.' },
      tu: { conjugated: 'vas', englishTranslation: 'you go', sampleSentence: 'Tú vas al cine mucho.', sampleTranslation: 'You go to the movies a lot.' },
      elEllaUsted: { conjugated: 'va', englishTranslation: 'he/she goes', sampleSentence: 'Usted ya no va a nadie.', sampleTranslation: 'You no longer go to anyone.' },
      nosotros: { conjugated: 'vamos', englishTranslation: 'we go', sampleSentence: 'Nosotros vamos al parque.', sampleTranslation: 'We go to the park.' },
      vosotros: { conjugated: 'vais', englishTranslation: 'you all go', sampleSentence: 'Vosotros vais a la playa.', sampleTranslation: 'You all go to the beach.' },
      ellosEllasUstedes: { conjugated: 'van', englishTranslation: 'they go', sampleSentence: 'Ustedes van también juntos.', sampleTranslation: 'You all also go together.' }
    },
    preterite: {
      isIrregular: true,
      yo: { conjugated: 'fui', englishTranslation: 'I went', sampleSentence: 'Yo fui siempre solo.', sampleTranslation: 'I always went alone.' },
      tu: { conjugated: 'fuiste', englishTranslation: 'you went', sampleSentence: 'Tú fuiste al cine ayer.', sampleTranslation: 'You went to the movies yesterday.' },
      elEllaUsted: { conjugated: 'fue', englishTranslation: 'he/she went', sampleSentence: 'Usted ya no fue a nadie.', sampleTranslation: 'You no longer went to anyone.' },
      nosotros: { conjugated: 'fuimos', englishTranslation: 'we went', sampleSentence: 'Nosotros fuimos al parque.', sampleTranslation: 'We went to the park.' },
      vosotros: { conjugated: 'fuisteis', englishTranslation: 'you all went', sampleSentence: 'Vosotros fuisteis a la playa.', sampleTranslation: 'You all went to the beach.' },
      ellosEllasUstedes: { conjugated: 'fueron', englishTranslation: 'they went', sampleSentence: 'Ustedes fueron también juntos.', sampleTranslation: 'You all also went together.' }
    },
    imperfect: {
      isIrregular: true,
      yo: { conjugated: 'iba', englishTranslation: 'I used to go', sampleSentence: 'Yo iba siempre solo.', sampleTranslation: 'I used to go alone.' },
      tu: { conjugated: 'ibas', englishTranslation: 'you used to go', sampleSentence: 'Tú ibas al cine mucho.', sampleTranslation: 'You used to go to the movies a lot.' },
      elEllaUsted: { conjugated: 'iba', englishTranslation: 'he/she used to go', sampleSentence: 'Usted ya no iba a ninguna parte.', sampleTranslation: 'You no longer used to go anywhere.' },
      nosotros: { conjugated: 'íbamos', englishTranslation: 'we used to go', sampleSentence: 'Nosotros íbamos al parque.', sampleTranslation: 'We used to go to the park.' },
      vosotros: { conjugated: 'ibais', englishTranslation: 'you all used to go', sampleSentence: 'Vosotros ibais a la playa.', sampleTranslation: 'You all used to go to the beach.' },
      ellosEllasUstedes: { conjugated: 'iban', englishTranslation: 'they used to go', sampleSentence: 'Ustedes iban también juntos.', sampleTranslation: 'You all also used to go together.' }
    }
  },
  {
    infinitive: 'llegar',
    definition: 'to arrive',
    isImportant: false,
    present: {
      yo: { conjugated: 'llego', englishTranslation: 'I arrive', sampleSentence: 'Yo llego temprano al trabajo.', sampleTranslation: 'I arrive early to work.' },
      tu: { conjugated: 'llegas', englishTranslation: 'you arrive', sampleSentence: 'Tú llegas siempre a tiempo.', sampleTranslation: 'You always arrive on time.' },
      elEllaUsted: { conjugated: 'llega', englishTranslation: 'he/she arrives', sampleSentence: 'Ella llega tarde cada día.', sampleTranslation: 'She arrives late every day.' },
      nosotros: { conjugated: 'llegamos', englishTranslation: 'we arrive', sampleSentence: 'Nosotros llegamos juntos.', sampleTranslation: 'We arrive together.' },
      vosotros: { conjugated: 'llegáis', englishTranslation: 'you all arrive', sampleSentence: 'Vosotros llegáis muy tarde.', sampleTranslation: 'You all arrive very late.' },
      ellosEllasUstedes: { conjugated: 'llegan', englishTranslation: 'they arrive', sampleSentence: 'Ellos llegan mañana.', sampleTranslation: 'They arrive tomorrow.' }
    },
    preterite: {
      isIrregular: true,
      irregularDescription: 'g→gu in yo',
      yo: { conjugated: 'llegué', englishTranslation: 'I arrived', sampleSentence: 'Yo llegué temprano ayer.', sampleTranslation: 'I arrived early yesterday.' },
      tu: { conjugated: 'llegaste', englishTranslation: 'you arrived', sampleSentence: 'Tú llegaste a tiempo.', sampleTranslation: 'You arrived on time.' },
      elEllaUsted: { conjugated: 'llegó', englishTranslation: 'he/she arrived', sampleSentence: 'Ella llegó tarde anoche.', sampleTranslation: 'She arrived late last night.' },
      nosotros: { conjugated: 'llegamos', englishTranslation: 'we arrived', sampleSentence: 'Nosotros llegamos juntos.', sampleTranslation: 'We arrived together.' },
      vosotros: { conjugated: 'llegasteis', englishTranslation: 'you all arrived', sampleSentence: 'Vosotros llegasteis muy tarde.', sampleTranslation: 'You all arrived very late.' },
      ellosEllasUstedes: { conjugated: 'llegaron', englishTranslation: 'they arrived', sampleSentence: 'Ellos llegaron ayer.', sampleTranslation: 'They arrived yesterday.' }
    },
    imperfect: {
      yo: { conjugated: 'llegaba', englishTranslation: 'I used to arrive', sampleSentence: 'Yo llegaba temprano al trabajo.', sampleTranslation: 'I used to arrive early to work.' },
      tu: { conjugated: 'llegabas', englishTranslation: 'you used to arrive', sampleSentence: 'Tú llegabas siempre a tiempo.', sampleTranslation: 'You used to arrive on time.' },
      elEllaUsted: { conjugated: 'llegaba', englishTranslation: 'he/she used to arrive', sampleSentence: 'Ella llegaba tarde cada día.', sampleTranslation: 'She used to arrive late every day.' },
      nosotros: { conjugated: 'llegábamos', englishTranslation: 'we used to arrive', sampleSentence: 'Nosotros llegábamos juntos.', sampleTranslation: 'We used to arrive together.' },
      vosotros: { conjugated: 'llegabais', englishTranslation: 'you all used to arrive', sampleSentence: 'Vosotros llegabais muy tarde.', sampleTranslation: 'You all used to arrive very late.' },
      ellosEllasUstedes: { conjugated: 'llegaban', englishTranslation: 'they used to arrive', sampleSentence: 'Ellos llegaban tarde.', sampleTranslation: 'They used to arrive late.' }
    }
  },
  {
    infinitive: 'pagar',
    definition: 'to pay',
    isImportant: false,
    present: {
      yo: { conjugated: 'pago', englishTranslation: 'I pay', sampleSentence: 'Yo pago siempre las cuentas.', sampleTranslation: 'I always pay the bills.' },
      tu: { conjugated: 'pagas', englishTranslation: 'you pay', sampleSentence: 'Tú pagas todo con tarjeta.', sampleTranslation: 'You pay for everything with a card.' },
      elEllaUsted: { conjugated: 'paga', englishTranslation: 'he/she pays', sampleSentence: 'Usted no paga nada tampoco.', sampleTranslation: 'You don\'t pay anything either.' },
      nosotros: { conjugated: 'pagamos', englishTranslation: 'we pay', sampleSentence: 'Nosotros pagamos la cuenta.', sampleTranslation: 'We pay the bill.' },
      vosotros: { conjugated: 'pagáis', englishTranslation: 'you all pay', sampleSentence: 'Vosotros pagáis muy poco.', sampleTranslation: 'You all pay very little.' },
      ellosEllasUstedes: { conjugated: 'pagan', englishTranslation: 'they pay', sampleSentence: 'Ustedes pagan ya todo.', sampleTranslation: 'You all already pay everything.' }
    },
    preterite: {
      isIrregular: true,
      irregularDescription: 'g→gu in yo',
      yo: { conjugated: 'pagué', englishTranslation: 'I paid', sampleSentence: 'Yo pagué siempre las cuentas.', sampleTranslation: 'I always paid the bills.' },
      tu: { conjugated: 'pagaste', englishTranslation: 'you paid', sampleSentence: 'Tú pagaste todo con tarjeta.', sampleTranslation: 'You paid for everything with a card.' },
      elEllaUsted: { conjugated: 'pagó', englishTranslation: 'he/she paid', sampleSentence: 'Usted no pagó nada tampoco.', sampleTranslation: 'You didn\'t pay anything either.' },
      nosotros: { conjugated: 'pagamos', englishTranslation: 'we paid', sampleSentence: 'Nosotros pagamos la cuenta.', sampleTranslation: 'We paid the bill.' },
      vosotros: { conjugated: 'pagasteis', englishTranslation: 'you all paid', sampleSentence: 'Vosotros pagasteis muy poco.', sampleTranslation: 'You all paid very little.' },
      ellosEllasUstedes: { conjugated: 'pagaron', englishTranslation: 'they paid', sampleSentence: 'Ustedes pagaron ya todo.', sampleTranslation: 'You all already paid everything.' }
    },
    imperfect: {
      yo: { conjugated: 'pagaba', englishTranslation: 'I used to pay', sampleSentence: 'Yo pagaba siempre las cuentas.', sampleTranslation: 'I used to pay the bills.' },
      tu: { conjugated: 'pagabas', englishTranslation: 'you used to pay', sampleSentence: 'Tú pagabas todo con tarjeta.', sampleTranslation: 'You used to pay for everything with a card.' },
      elEllaUsted: { conjugated: 'pagaba', englishTranslation: 'he/she used to pay', sampleSentence: 'Usted no pagaba nada tampoco.', sampleTranslation: 'You didn\'t use to pay anything either.' },
      nosotros: { conjugated: 'pagábamos', englishTranslation: 'we used to pay', sampleSentence: 'Nosotros pagábamos la cuenta.', sampleTranslation: 'We used to pay the bill.' },
      vosotros: { conjugated: 'pagabais', englishTranslation: 'you all used to pay', sampleSentence: 'Vosotros pagabais muy poco.', sampleTranslation: 'You all used to pay very little.' },
      ellosEllasUstedes: { conjugated: 'pagaban', englishTranslation: 'they used to pay', sampleSentence: 'Ustedes pagaban ya todo.', sampleTranslation: 'You all used to pay everything.' }
    }
  },
  {
    infinitive: 'pedir',
    definition: 'to ask for / request',
    isImportant: false,
    present: {
      isIrregular: true,
      irregularDescription: 'ped→pid',
      yo: { conjugated: 'pido', englishTranslation: 'I ask for', sampleSentence: 'Yo pido ayuda a alguien.', sampleTranslation: 'I ask someone for help.' },
      tu: { conjugated: 'pides', englishTranslation: 'you ask for', sampleSentence: 'Tú pides favores siempre.', sampleTranslation: 'You always ask for favors.' },
      elEllaUsted: { conjugated: 'pide', englishTranslation: 'he/she asks for', sampleSentence: 'Usted nunca pide nada tampoco.', sampleTranslation: 'You never ask for anything either.' },
      nosotros: { conjugated: 'pedimos', englishTranslation: 'we ask for', sampleSentence: 'Nosotros pedimos pizza.', sampleTranslation: 'We ask for pizza.' },
      vosotros: { conjugated: 'pedís', englishTranslation: 'you all ask for', sampleSentence: 'Vosotros pedís demasiado.', sampleTranslation: 'You all ask for too much.' },
      ellosEllasUstedes: { conjugated: 'piden', englishTranslation: 'they ask for', sampleSentence: 'Ustedes piden también comida.', sampleTranslation: 'You all also ask for food.' }
    },
    preterite: {
      isIrregular: true,
      irregularDescription: 'ped→pid in 3rd person',
      yo: { conjugated: 'pedí', englishTranslation: 'I asked for', sampleSentence: 'Yo pedí ayuda a alguien.', sampleTranslation: 'I asked someone for help.' },
      tu: { conjugated: 'pediste', englishTranslation: 'you asked for', sampleSentence: 'Tú pediste favores ayer.', sampleTranslation: 'You asked for favors yesterday.' },
      elEllaUsted: { conjugated: 'pidió', englishTranslation: 'he/she asked for', sampleSentence: 'Usted nunca pidió nada tampoco.', sampleTranslation: 'You never asked for anything either.' },
      nosotros: { conjugated: 'pedimos', englishTranslation: 'we asked for', sampleSentence: 'Nosotros pedimos pizza ayer.', sampleTranslation: 'We asked for pizza yesterday.' },
      vosotros: { conjugated: 'pedisteis', englishTranslation: 'you all asked for', sampleSentence: 'Vosotros pedisteis demasiado.', sampleTranslation: 'You all asked for too much.' },
      ellosEllasUstedes: { conjugated: 'pidieron', englishTranslation: 'they asked for', sampleSentence: 'Ustedes pidieron también comida.', sampleTranslation: 'You all also asked for food.' }
    },
    imperfect: {
      yo: { conjugated: 'pedía', englishTranslation: 'I used to ask for', sampleSentence: 'Yo pedía ayuda a alguien.', sampleTranslation: 'I used to ask someone for help.' },
      tu: { conjugated: 'pedías', englishTranslation: 'you used to ask for', sampleSentence: 'Tú pedías favores siempre.', sampleTranslation: 'You used to ask for favors.' },
      elEllaUsted: { conjugated: 'pedía', englishTranslation: 'he/she used to ask for', sampleSentence: 'Usted nunca pedía nada tampoco.', sampleTranslation: 'You never used to ask for anything either.' },
      nosotros: { conjugated: 'pedíamos', englishTranslation: 'we used to ask for', sampleSentence: 'Nosotros pedíamos pizza.', sampleTranslation: 'We used to ask for pizza.' },
      vosotros: { conjugated: 'pedíais', englishTranslation: 'you all used to ask for', sampleSentence: 'Vosotros pedíais demasiado.', sampleTranslation: 'You all used to ask for too much.' },
      ellosEllasUstedes: { conjugated: 'pedían', englishTranslation: 'they used to ask for', sampleSentence: 'Ustedes pedían también comida.', sampleTranslation: 'You all also used to ask for food.' }
    }
  },
  {
    infinitive: 'poner',
    definition: 'to put/place',
    isImportant: false,
    present: {
      isIrregular: true,
      irregularDescription: 'yo: pongo',
      yo: { conjugated: 'pongo', englishTranslation: 'I put', sampleSentence: 'Yo pongo la mesa cada día.', sampleTranslation: 'I set the table every day.' },
      tu: { conjugated: 'pones', englishTranslation: 'you put', sampleSentence: 'Tú pones los libros aquí.', sampleTranslation: 'You put the books here.' },
      elEllaUsted: { conjugated: 'pone', englishTranslation: 'he/she puts', sampleSentence: 'Ella pone música.', sampleTranslation: 'She puts on music.' },
      nosotros: { conjugated: 'ponemos', englishTranslation: 'we put', sampleSentence: 'Nosotros ponemos atención.', sampleTranslation: 'We pay attention.' },
      vosotros: { conjugated: 'ponéis', englishTranslation: 'you all put', sampleSentence: 'Vosotros ponéis las llaves allí.', sampleTranslation: 'You all put the keys there.' },
      ellosEllasUstedes: { conjugated: 'ponen', englishTranslation: 'they put', sampleSentence: 'Ellos ponen las cosas en orden.', sampleTranslation: 'They put things in order.' }
    },
    preterite: {
      isIrregular: true,
      irregularDescription: 'irregular stem: pus-',
      yo: { conjugated: 'puse', englishTranslation: 'I put', sampleSentence: 'Yo puse la mesa ayer.', sampleTranslation: 'I set the table yesterday.' },
      tu: { conjugated: 'pusiste', englishTranslation: 'you put', sampleSentence: 'Tú pusiste los libros aquí.', sampleTranslation: 'You put the books here.' },
      elEllaUsted: { conjugated: 'puso', englishTranslation: 'he/she put', sampleSentence: 'Ella puso música.', sampleTranslation: 'She put on music.' },
      nosotros: { conjugated: 'pusimos', englishTranslation: 'we put', sampleSentence: 'Nosotros pusimos atención.', sampleTranslation: 'We paid attention.' },
      vosotros: { conjugated: 'pusisteis', englishTranslation: 'you all put', sampleSentence: 'Vosotros pusisteis las llaves allí.', sampleTranslation: 'You all put the keys there.' },
      ellosEllasUstedes: { conjugated: 'pusieron', englishTranslation: 'they put', sampleSentence: 'Ellos pusieron las cosas en orden.', sampleTranslation: 'They put things in order.' }
    },
    imperfect: {
      yo: { conjugated: 'ponía', englishTranslation: 'I used to put', sampleSentence: 'Yo ponía la mesa cada día.', sampleTranslation: 'I used to set the table every day.' },
      tu: { conjugated: 'ponías', englishTranslation: 'you used to put', sampleSentence: 'Tú ponías los libros aquí.', sampleTranslation: 'You used to put the books here.' },
      elEllaUsted: { conjugated: 'ponía', englishTranslation: 'he/she used to put', sampleSentence: 'Ella ponía música.', sampleTranslation: 'She used to put on music.' },
      nosotros: { conjugated: 'poníamos', englishTranslation: 'we used to put', sampleSentence: 'Nosotros poníamos atención.', sampleTranslation: 'We used to pay attention.' },
      vosotros: { conjugated: 'poníais', englishTranslation: 'you all used to put', sampleSentence: 'Vosotros poníais las llaves allí.', sampleTranslation: 'You all used to put the keys there.' },
      ellosEllasUstedes: { conjugated: 'ponían', englishTranslation: 'they used to put', sampleSentence: 'Ellos ponían las cosas en orden.', sampleTranslation: 'They used to put things in order.' }
    }
  },
  {
    infinitive: 'preferir',
    definition: 'to prefer',
    isImportant: false,
    present: {
      isIrregular: true,
      irregularDescription: 'stem-change e→ie',
      yo: { conjugated: 'prefiero', englishTranslation: 'I prefer', sampleSentence: 'Yo prefiero siempre el té.', sampleTranslation: 'I always prefer tea.' },
      tu: { conjugated: 'prefieres', englishTranslation: 'you prefer', sampleSentence: 'Tú prefieres el chocolate.', sampleTranslation: 'You prefer chocolate.' },
      elEllaUsted: { conjugated: 'prefiere', englishTranslation: 'he/she prefers', sampleSentence: 'Usted ya no prefiere a nadie.', sampleTranslation: 'You no longer prefer anyone.' },
      nosotros: { conjugated: 'preferimos', englishTranslation: 'we prefer', sampleSentence: 'Nosotros preferimos la música.', sampleTranslation: 'We prefer music.' },
      vosotros: { conjugated: 'preferís', englishTranslation: 'you all prefer', sampleSentence: 'Vosotros preferís los deportes.', sampleTranslation: 'You all prefer sports.' },
      ellosEllasUstedes: { conjugated: 'prefieren', englishTranslation: 'they prefer', sampleSentence: 'Ustedes prefieren también café.', sampleTranslation: 'You all also prefer coffee.' }
    },
    preterite: {
      isIrregular: true,
      irregularDescription: 'e→i in 3rd person',
      yo: { conjugated: 'preferí', englishTranslation: 'I preferred', sampleSentence: 'Yo preferí siempre el té.', sampleTranslation: 'I always preferred tea.' },
      tu: { conjugated: 'preferiste', englishTranslation: 'you preferred', sampleSentence: 'Tú preferiste el chocolate.', sampleTranslation: 'You preferred chocolate.' },
      elEllaUsted: { conjugated: 'prefirió', englishTranslation: 'he/she preferred', sampleSentence: 'Usted ya no prefirió a nadie.', sampleTranslation: 'You no longer preferred anyone.' },
      nosotros: { conjugated: 'preferimos', englishTranslation: 'we preferred', sampleSentence: 'Nosotros preferimos la música.', sampleTranslation: 'We preferred music.' },
      vosotros: { conjugated: 'preferisteis', englishTranslation: 'you all preferred', sampleSentence: 'Vosotros preferisteis los deportes.', sampleTranslation: 'You all preferred sports.' },
      ellosEllasUstedes: { conjugated: 'prefirieron', englishTranslation: 'they preferred', sampleSentence: 'Ustedes prefirieron también café.', sampleTranslation: 'You all also preferred coffee.' }
    },
    imperfect: {
      yo: { conjugated: 'prefería', englishTranslation: 'I used to prefer', sampleSentence: 'Yo prefería siempre el té.', sampleTranslation: 'I used to prefer tea.' },
      tu: { conjugated: 'preferías', englishTranslation: 'you used to prefer', sampleSentence: 'Tú preferías el chocolate.', sampleTranslation: 'You used to prefer chocolate.' },
      elEllaUsted: { conjugated: 'prefería', englishTranslation: 'he/she used to prefer', sampleSentence: 'Usted ya no prefería nada especial.', sampleTranslation: 'You no longer used to prefer anything special.' },
      nosotros: { conjugated: 'preferíamos', englishTranslation: 'we used to prefer', sampleSentence: 'Nosotros preferíamos la música.', sampleTranslation: 'We used to prefer music.' },
      vosotros: { conjugated: 'preferíais', englishTranslation: 'you all used to prefer', sampleSentence: 'Vosotros preferíais los deportes.', sampleTranslation: 'You all used to prefer sports.' },
      ellosEllasUstedes: { conjugated: 'preferían', englishTranslation: 'they used to prefer', sampleSentence: 'Ustedes preferían también café.', sampleTranslation: 'You all also used to prefer coffee.' }
    }
  },
  {
    infinitive: 'salir',
    definition: 'to leave/go out',
    isImportant: false,
    present: {
      isIrregular: true,
      irregularDescription: 'yo: salgo',
      yo: { conjugated: 'salgo', englishTranslation: 'I leave', sampleSentence: 'Yo salgo de casa a las ocho.', sampleTranslation: 'I leave home at eight.' },
      tu: { conjugated: 'sales', englishTranslation: 'you leave', sampleSentence: 'Tú sales con tus amigos.', sampleTranslation: 'You go out with your friends.' },
      elEllaUsted: { conjugated: 'sale', englishTranslation: 'he/she leaves', sampleSentence: 'Ella sale temprano del trabajo.', sampleTranslation: 'She leaves work early.' },
      nosotros: { conjugated: 'salimos', englishTranslation: 'we leave', sampleSentence: 'Nosotros salimos juntos.', sampleTranslation: 'We go out together.' },
      vosotros: { conjugated: 'salís', englishTranslation: 'you all leave', sampleSentence: 'Vosotros salís los viernes.', sampleTranslation: 'You all go out on Fridays.' },
      ellosEllasUstedes: { conjugated: 'salen', englishTranslation: 'they leave', sampleSentence: 'Ellos salen de viaje.', sampleTranslation: 'They leave on a trip.' }
    },
    preterite: {
      yo: { conjugated: 'salí', englishTranslation: 'I left', sampleSentence: 'Yo salí de casa a las ocho.', sampleTranslation: 'I left home at eight.' },
      tu: { conjugated: 'saliste', englishTranslation: 'you left', sampleSentence: 'Tú saliste con tus amigos.', sampleTranslation: 'You went out with your friends.' },
      elEllaUsted: { conjugated: 'salió', englishTranslation: 'he/she left', sampleSentence: 'Ella salió temprano del trabajo.', sampleTranslation: 'She left work early.' },
      nosotros: { conjugated: 'salimos', englishTranslation: 'we left', sampleSentence: 'Nosotros salimos juntos.', sampleTranslation: 'We went out together.' },
      vosotros: { conjugated: 'salisteis', englishTranslation: 'you all left', sampleSentence: 'Vosotros salisteis el viernes.', sampleTranslation: 'You all went out on Friday.' },
      ellosEllasUstedes: { conjugated: 'salieron', englishTranslation: 'they left', sampleSentence: 'Ellos salieron de viaje.', sampleTranslation: 'They left on a trip.' }
    },
    imperfect: {
      yo: { conjugated: 'salía', englishTranslation: 'I used to leave', sampleSentence: 'Yo salía de casa a las ocho.', sampleTranslation: 'I used to leave home at eight.' },
      tu: { conjugated: 'salías', englishTranslation: 'you used to leave', sampleSentence: 'Tú salías con tus amigos.', sampleTranslation: 'You used to go out with your friends.' },
      elEllaUsted: { conjugated: 'salía', englishTranslation: 'he/she used to leave', sampleSentence: 'Ella salía temprano del trabajo.', sampleTranslation: 'She used to leave work early.' },
      nosotros: { conjugated: 'salíamos', englishTranslation: 'we used to leave', sampleSentence: 'Nosotros salíamos juntos.', sampleTranslation: 'We used to go out together.' },
      vosotros: { conjugated: 'salíais', englishTranslation: 'you all used to leave', sampleSentence: 'Vosotros salíais los viernes.', sampleTranslation: 'You all used to go out on Fridays.' },
      ellosEllasUstedes: { conjugated: 'salían', englishTranslation: 'they used to leave', sampleSentence: 'Ellos salían de viaje.', sampleTranslation: 'They used to leave on trips.' }
    }
  },
  {
    infinitive: 'ser',
    definition: 'to be (identity/origin)',
    isImportant: true,
    present: {
      isIrregular: true,
      yo: { conjugated: 'soy', englishTranslation: 'I am', sampleSentence: 'Yo soy siempre buen estudiante.', sampleTranslation: 'I am always a good student.' },
      tu: { conjugated: 'eres', englishTranslation: 'you are', sampleSentence: 'Tú eres muy inteligente.', sampleTranslation: 'You are very intelligent.' },
      elEllaUsted: { conjugated: 'es', englishTranslation: 'he/she is', sampleSentence: 'Usted nunca es nadie especial.', sampleTranslation: 'You are never anyone special.' },
      nosotros: { conjugated: 'somos', englishTranslation: 'we are', sampleSentence: 'Nosotros somos estudiantes.', sampleTranslation: 'We are students.' },
      vosotros: { conjugated: 'sois', englishTranslation: 'you all are', sampleSentence: 'Vosotros sois muy divertidos.', sampleTranslation: 'You all are very fun.' },
      ellosEllasUstedes: { conjugated: 'son', englishTranslation: 'they are', sampleSentence: 'Ustedes son también buenos amigos.', sampleTranslation: 'You all are also good friends.' }
    },
    preterite: {
      isIrregular: true,
      yo: { conjugated: 'fui', englishTranslation: 'I was', sampleSentence: 'Yo fui siempre buen estudiante.', sampleTranslation: 'I was always a good student.' },
      tu: { conjugated: 'fuiste', englishTranslation: 'you were', sampleSentence: 'Tú fuiste al cine ayer.', sampleTranslation: 'You went to the movies yesterday.' },
      elEllaUsted: { conjugated: 'fue', englishTranslation: 'he/she was', sampleSentence: 'Usted nunca fue nadie especial.', sampleTranslation: 'You were never anyone special.' },
      nosotros: { conjugated: 'fuimos', englishTranslation: 'we were', sampleSentence: 'Nosotros fuimos al parque.', sampleTranslation: 'We went to the park.' },
      vosotros: { conjugated: 'fuisteis', englishTranslation: 'you all were', sampleSentence: 'Vosotros fuisteis a la playa.', sampleTranslation: 'You all went to the beach.' },
      ellosEllasUstedes: { conjugated: 'fueron', englishTranslation: 'they were', sampleSentence: 'Ustedes fueron también buenos amigos.', sampleTranslation: 'You all were also good friends.' }
    },
    imperfect: {
      isIrregular: true,
      yo: { conjugated: 'era', englishTranslation: 'I used to be', sampleSentence: 'Yo era siempre buen estudiante.', sampleTranslation: 'I used to be a good student.' },
      tu: { conjugated: 'eras', englishTranslation: 'you used to be', sampleSentence: 'Tú eras muy inteligente.', sampleTranslation: 'You used to be very intelligent.' },
      elEllaUsted: { conjugated: 'era', englishTranslation: 'he/she used to be', sampleSentence: 'Usted nunca era nadie especial.', sampleTranslation: 'You were never anyone special.' },
      nosotros: { conjugated: 'éramos', englishTranslation: 'we used to be', sampleSentence: 'Nosotros éramos estudiantes.', sampleTranslation: 'We used to be students.' },
      vosotros: { conjugated: 'erais', englishTranslation: 'you all used to be', sampleSentence: 'Vosotros erais muy divertidos.', sampleTranslation: 'You all used to be very fun.' },
      ellosEllasUstedes: { conjugated: 'eran', englishTranslation: 'they used to be', sampleSentence: 'Ustedes eran también buenos amigos.', sampleTranslation: 'You all used to be good friends.' }
    }
  },
  {
    infinitive: 'tener',
    definition: 'to have',
    isImportant: true,
    present: {
      isIrregular: true,
      irregularDescription: 'yo: tengo, stem-change e→ie',
      yo: { conjugated: 'tengo', englishTranslation: 'I have', sampleSentence: 'Yo tengo siempre buena suerte.', sampleTranslation: 'I always have good luck.' },
      tu: { conjugated: 'tienes', englishTranslation: 'you have', sampleSentence: 'Tú tienes mucha paciencia.', sampleTranslation: 'You have a lot of patience.' },
      elEllaUsted: { conjugated: 'tiene', englishTranslation: 'he/she has', sampleSentence: 'Usted no tiene nada tampoco.', sampleTranslation: 'You don\'t have anything either.' },
      nosotros: { conjugated: 'tenemos', englishTranslation: 'we have', sampleSentence: 'Nosotros tenemos tiempo libre.', sampleTranslation: 'We have free time.' },
      vosotros: { conjugated: 'tenéis', englishTranslation: 'you all have', sampleSentence: 'Vosotros tenéis muchos amigos.', sampleTranslation: 'You all have many friends.' },
      ellosEllasUstedes: { conjugated: 'tienen', englishTranslation: 'they have', sampleSentence: 'Ustedes tienen también problemas.', sampleTranslation: 'You all also have problems.' }
    },
    preterite: {
      isIrregular: true,
      yo: { conjugated: 'tuve', englishTranslation: 'I had', sampleSentence: 'Yo tuve siempre buena suerte.', sampleTranslation: 'I always had good luck.' },
      tu: { conjugated: 'tuviste', englishTranslation: 'you had', sampleSentence: 'Tú tuviste mucha paciencia.', sampleTranslation: 'You had a lot of patience.' },
      elEllaUsted: { conjugated: 'tuvo', englishTranslation: 'he/she had', sampleSentence: 'Usted no tuvo nada tampoco.', sampleTranslation: 'You didn\'t have anything either.' },
      nosotros: { conjugated: 'tuvimos', englishTranslation: 'we had', sampleSentence: 'Nosotros tuvimos tiempo libre.', sampleTranslation: 'We had free time.' },
      vosotros: { conjugated: 'tuvisteis', englishTranslation: 'you all had', sampleSentence: 'Vosotros tuvisteis muchos amigos.', sampleTranslation: 'You all had many friends.' },
      ellosEllasUstedes: { conjugated: 'tuvieron', englishTranslation: 'they had', sampleSentence: 'Ustedes tuvieron también problemas.', sampleTranslation: 'You all also had problems.' }
    },
    imperfect: {
      yo: { conjugated: 'tenía', englishTranslation: 'I used to have', sampleSentence: 'Yo tenía siempre buena suerte.', sampleTranslation: 'I used to have good luck.' },
      tu: { conjugated: 'tenías', englishTranslation: 'you used to have', sampleSentence: 'Tú tenías mucha paciencia.', sampleTranslation: 'You used to have a lot of patience.' },
      elEllaUsted: { conjugated: 'tenía', englishTranslation: 'he/she used to have', sampleSentence: 'Usted no tenía nada tampoco.', sampleTranslation: 'You didn\'t use to have anything either.' },
      nosotros: { conjugated: 'teníamos', englishTranslation: 'we used to have', sampleSentence: 'Nosotros teníamos tiempo libre.', sampleTranslation: 'We used to have free time.' },
      vosotros: { conjugated: 'teníais', englishTranslation: 'you all used to have', sampleSentence: 'Vosotros teníais muchos amigos.', sampleTranslation: 'You all used to have many friends.' },
      ellosEllasUstedes: { conjugated: 'tenían', englishTranslation: 'they used to have', sampleSentence: 'Ustedes tenían también problemas.', sampleTranslation: 'You all also used to have problems.' }
    }
  },
  {
    infinitive: 'tomar',
    definition: 'to take/drink',
    isImportant: false,
    present: {
      yo: { conjugated: 'tomo', englishTranslation: 'I take', sampleSentence: 'Yo tomo café cada mañana.', sampleTranslation: 'I drink coffee every morning.' },
      tu: { conjugated: 'tomas', englishTranslation: 'you take', sampleSentence: 'Tú tomas el autobús.', sampleTranslation: 'You take the bus.' },
      elEllaUsted: { conjugated: 'toma', englishTranslation: 'he/she takes', sampleSentence: 'Ella toma agua.', sampleTranslation: 'She drinks water.' },
      nosotros: { conjugated: 'tomamos', englishTranslation: 'we take', sampleSentence: 'Nosotros tomamos notas.', sampleTranslation: 'We take notes.' },
      vosotros: { conjugated: 'tomáis', englishTranslation: 'you all take', sampleSentence: 'Vosotros tomáis el tren.', sampleTranslation: 'You all take the train.' },
      ellosEllasUstedes: { conjugated: 'toman', englishTranslation: 'they take', sampleSentence: 'Ellos toman té.', sampleTranslation: 'They drink tea.' }
    },
    preterite: {
      yo: { conjugated: 'tomé', englishTranslation: 'I took', sampleSentence: 'Yo tomé café esta mañana.', sampleTranslation: 'I drank coffee this morning.' },
      tu: { conjugated: 'tomaste', englishTranslation: 'you took', sampleSentence: 'Tú tomaste el autobús.', sampleTranslation: 'You took the bus.' },
      elEllaUsted: { conjugated: 'tomó', englishTranslation: 'he/she took', sampleSentence: 'Ella tomó agua.', sampleTranslation: 'She drank water.' },
      nosotros: { conjugated: 'tomamos', englishTranslation: 'we took', sampleSentence: 'Nosotros tomamos notas.', sampleTranslation: 'We took notes.' },
      vosotros: { conjugated: 'tomasteis', englishTranslation: 'you all took', sampleSentence: 'Vosotros tomasteis el tren.', sampleTranslation: 'You all took the train.' },
      ellosEllasUstedes: { conjugated: 'tomaron', englishTranslation: 'they took', sampleSentence: 'Ellos tomaron té.', sampleTranslation: 'They drank tea.' }
    },
    imperfect: {
      yo: { conjugated: 'tomaba', englishTranslation: 'I used to take', sampleSentence: 'Yo tomaba café cada mañana.', sampleTranslation: 'I used to drink coffee every morning.' },
      tu: { conjugated: 'tomabas', englishTranslation: 'you used to take', sampleSentence: 'Tú tomabas el autobús.', sampleTranslation: 'You used to take the bus.' },
      elEllaUsted: { conjugated: 'tomaba', englishTranslation: 'he/she used to take', sampleSentence: 'Ella tomaba agua.', sampleTranslation: 'She used to drink water.' },
      nosotros: { conjugated: 'tomábamos', englishTranslation: 'we used to take', sampleSentence: 'Nosotros tomábamos notas.', sampleTranslation: 'We used to take notes.' },
      vosotros: { conjugated: 'tomabais', englishTranslation: 'you all used to take', sampleSentence: 'Vosotros tomabais el tren.', sampleTranslation: 'You all used to take the train.' },
      ellosEllasUstedes: { conjugated: 'tomaban', englishTranslation: 'they used to take', sampleSentence: 'Ellos tomaban té.', sampleTranslation: 'They used to drink tea.' }
    }
  },
  {
    infinitive: 'ver',
    definition: 'to see',
    isImportant: true,
    present: {
      isIrregular: true,
      irregularDescription: 'yo: veo',
      yo: { conjugated: 'veo', englishTranslation: 'I see', sampleSentence: 'Yo veo a alguien en la calle.', sampleTranslation: 'I see someone on the street.' },
      tu: { conjugated: 'ves', englishTranslation: 'you see', sampleSentence: 'Tú ves la televisión mucho.', sampleTranslation: 'You watch television a lot.' },
      elEllaUsted: { conjugated: 've', englishTranslation: 'he/she sees', sampleSentence: 'Usted nunca ve nada tampoco.', sampleTranslation: 'You never see anything either.' },
      nosotros: { conjugated: 'vemos', englishTranslation: 'we see', sampleSentence: 'Nosotros vemos las noticias.', sampleTranslation: 'We watch the news.' },
      vosotros: { conjugated: 'veis', englishTranslation: 'you all see', sampleSentence: 'Vosotros veis películas.', sampleTranslation: 'You all watch movies.' },
      ellosEllasUstedes: { conjugated: 'ven', englishTranslation: 'they see', sampleSentence: 'Ustedes ven también la película.', sampleTranslation: 'You all also see the movie.' }
    },
    preterite: {
      isIrregular: true,
      yo: { conjugated: 'vi', englishTranslation: 'I saw', sampleSentence: 'Yo vi a alguien en la calle.', sampleTranslation: 'I saw someone on the street.' },
      tu: { conjugated: 'viste', englishTranslation: 'you saw', sampleSentence: 'Tú viste la televisión ayer.', sampleTranslation: 'You watched television yesterday.' },
      elEllaUsted: { conjugated: 'vio', englishTranslation: 'he/she saw', sampleSentence: 'Usted nunca vio nada tampoco.', sampleTranslation: 'You never saw anything either.' },
      nosotros: { conjugated: 'vimos', englishTranslation: 'we saw', sampleSentence: 'Nosotros vimos las noticias.', sampleTranslation: 'We saw the news.' },
      vosotros: { conjugated: 'visteis', englishTranslation: 'you all saw', sampleSentence: 'Vosotros visteis películas.', sampleTranslation: 'You all watched movies.' },
      ellosEllasUstedes: { conjugated: 'vieron', englishTranslation: 'they saw', sampleSentence: 'Ustedes vieron también la película.', sampleTranslation: 'You all also saw the movie.' }
    },
    imperfect: {
      isIrregular: true,
      yo: { conjugated: 'veía', englishTranslation: 'I used to see', sampleSentence: 'Yo veía a alguien en la calle.', sampleTranslation: 'I used to see someone on the street.' },
      tu: { conjugated: 'veías', englishTranslation: 'you used to see', sampleSentence: 'Tú veías la televisión mucho.', sampleTranslation: 'You used to watch television a lot.' },
      elEllaUsted: { conjugated: 'veía', englishTranslation: 'he/she used to see', sampleSentence: 'Usted nunca veía nada tampoco.', sampleTranslation: 'You never used to see anything either.' },
      nosotros: { conjugated: 'veíamos', englishTranslation: 'we used to see', sampleSentence: 'Nosotros veíamos las noticias.', sampleTranslation: 'We used to watch the news.' },
      vosotros: { conjugated: 'veíais', englishTranslation: 'you all used to see', sampleSentence: 'Vosotros veíais películas.', sampleTranslation: 'You all used to watch movies.' },
      ellosEllasUstedes: { conjugated: 'veían', englishTranslation: 'they used to see', sampleSentence: 'Ustedes veían también la película.', sampleTranslation: 'You all also used to see the movie.' }
    }
  },
  {
    infinitive: 'visitar',
    definition: 'to visit',
    isImportant: false,
    present: {
      yo: { conjugated: 'visito', englishTranslation: 'I visit', sampleSentence: 'Yo visito siempre a los abuelos.', sampleTranslation: 'I always visit the grandparents.' },
      tu: { conjugated: 'visitas', englishTranslation: 'you visit', sampleSentence: 'Tú visitas a tus amigos.', sampleTranslation: 'You visit your friends.' },
      elEllaUsted: { conjugated: 'visita', englishTranslation: 'he/she visits', sampleSentence: 'Usted ya no visita a nadie.', sampleTranslation: 'You no longer visit anyone.' },
      nosotros: { conjugated: 'visitamos', englishTranslation: 'we visit', sampleSentence: 'Nosotros visitamos ciudades.', sampleTranslation: 'We visit cities.' },
      vosotros: { conjugated: 'visitáis', englishTranslation: 'you all visit', sampleSentence: 'Vosotros visitáis monumentos.', sampleTranslation: 'You all visit monuments.' },
      ellosEllasUstedes: { conjugated: 'visitan', englishTranslation: 'they visit', sampleSentence: 'Ustedes visitan también el museo.', sampleTranslation: 'You all also visit the museum.' }
    },
    preterite: {
      yo: { conjugated: 'visité', englishTranslation: 'I visited', sampleSentence: 'Yo visité siempre a los abuelos.', sampleTranslation: 'I always visited the grandparents.' },
      tu: { conjugated: 'visitaste', englishTranslation: 'you visited', sampleSentence: 'Tú visitaste a tus amigos.', sampleTranslation: 'You visited your friends.' },
      elEllaUsted: { conjugated: 'visitó', englishTranslation: 'he/she visited', sampleSentence: 'Usted ya no visitó a nadie.', sampleTranslation: 'You no longer visited anyone.' },
      nosotros: { conjugated: 'visitamos', englishTranslation: 'we visited', sampleSentence: 'Nosotros visitamos ciudades.', sampleTranslation: 'We visited cities.' },
      vosotros: { conjugated: 'visitasteis', englishTranslation: 'you all visited', sampleSentence: 'Vosotros visitasteis monumentos.', sampleTranslation: 'You all visited monuments.' },
      ellosEllasUstedes: { conjugated: 'visitaron', englishTranslation: 'they visited', sampleSentence: 'Ustedes visitaron también el museo.', sampleTranslation: 'You all also visited the museum.' }
    },
    imperfect: {
      yo: { conjugated: 'visitaba', englishTranslation: 'I used to visit', sampleSentence: 'Yo visitaba siempre a los abuelos.', sampleTranslation: 'I used to visit the grandparents.' },
      tu: { conjugated: 'visitabas', englishTranslation: 'you used to visit', sampleSentence: 'Tú visitabas a tus amigos.', sampleTranslation: 'You used to visit your friends.' },
      elEllaUsted: { conjugated: 'visitaba', englishTranslation: 'he/she used to visit', sampleSentence: 'Usted ya no visitaba a nadie.', sampleTranslation: 'You no longer used to visit anyone.' },
      nosotros: { conjugated: 'visitábamos', englishTranslation: 'we used to visit', sampleSentence: 'Nosotros visitábamos ciudades.', sampleTranslation: 'We used to visit cities.' },
      vosotros: { conjugated: 'visitabais', englishTranslation: 'you all used to visit', sampleSentence: 'Vosotros visitabais monumentos.', sampleTranslation: 'You all used to visit monuments.' },
      ellosEllasUstedes: { conjugated: 'visitaban', englishTranslation: 'they used to visit', sampleSentence: 'Ustedes visitaban también el museo.', sampleTranslation: 'You all also used to visit the museum.' }
    }
  },
  {
    infinitive: 'vivir',
    definition: 'to live',
    isImportant: false,
    present: {
      yo: { conjugated: 'vivo', englishTranslation: 'I live', sampleSentence: 'Yo vivo siempre en España.', sampleTranslation: 'I always live in Spain.' },
      tu: { conjugated: 'vives', englishTranslation: 'you live', sampleSentence: 'Tú vives muy bien aquí.', sampleTranslation: 'You live very well here.' },
      elEllaUsted: { conjugated: 'vive', englishTranslation: 'he/she lives', sampleSentence: 'Usted nunca vive con nadie.', sampleTranslation: 'You never live with anyone.' },
      nosotros: { conjugated: 'vivimos', englishTranslation: 'we live', sampleSentence: 'Nosotros vivimos en una casa.', sampleTranslation: 'We live in a house.' },
      vosotros: { conjugated: 'vivís', englishTranslation: 'you all live', sampleSentence: 'Vosotros vivís en el centro.', sampleTranslation: 'You all live downtown.' },
      ellosEllasUstedes: { conjugated: 'viven', englishTranslation: 'they live', sampleSentence: 'Ustedes viven también aquí.', sampleTranslation: 'You all also live here.' }
    },
    preterite: {
      yo: { conjugated: 'viví', englishTranslation: 'I lived', sampleSentence: 'Yo viví siempre en España.', sampleTranslation: 'I always lived in Spain.' },
      tu: { conjugated: 'viviste', englishTranslation: 'you lived', sampleSentence: 'Tú viviste muy bien allí.', sampleTranslation: 'You lived very well there.' },
      elEllaUsted: { conjugated: 'vivió', englishTranslation: 'he/she lived', sampleSentence: 'Usted nunca vivió con nadie.', sampleTranslation: 'You never lived with anyone.' },
      nosotros: { conjugated: 'vivimos', englishTranslation: 'we lived', sampleSentence: 'Nosotros vivimos en una casa.', sampleTranslation: 'We lived in a house.' },
      vosotros: { conjugated: 'vivisteis', englishTranslation: 'you all lived', sampleSentence: 'Vosotros vivisteis en el centro.', sampleTranslation: 'You all lived downtown.' },
      ellosEllasUstedes: { conjugated: 'vivieron', englishTranslation: 'they lived', sampleSentence: 'Ustedes vivieron también aquí.', sampleTranslation: 'You all also lived here.' }
    },
    imperfect: {
      yo: { conjugated: 'vivía', englishTranslation: 'I used to live', sampleSentence: 'Yo vivía siempre en España.', sampleTranslation: 'I used to live in Spain.' },
      tu: { conjugated: 'vivías', englishTranslation: 'you used to live', sampleSentence: 'Tú vivías muy bien aquí.', sampleTranslation: 'You used to live very well here.' },
      elEllaUsted: { conjugated: 'vivía', englishTranslation: 'he/she used to live', sampleSentence: 'Usted nunca vivía con nadie.', sampleTranslation: 'You never used to live with anyone.' },
      nosotros: { conjugated: 'vivíamos', englishTranslation: 'we used to live', sampleSentence: 'Nosotros vivíamos en una casa.', sampleTranslation: 'We used to live in a house.' },
      vosotros: { conjugated: 'vivíais', englishTranslation: 'you all used to live', sampleSentence: 'Vosotros vivíais en el centro.', sampleTranslation: 'You all used to live downtown.' },
      ellosEllasUstedes: { conjugated: 'vivían', englishTranslation: 'they used to live', sampleSentence: 'Ustedes vivían también aquí.', sampleTranslation: 'You all also used to live here.' }
    }
  }
];




