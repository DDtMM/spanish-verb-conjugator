export interface Noun {
  word: string;
  definition: string;
  gender: 'masculine' | 'feminine';
  /** The origin of the word. (In English) */
  origin?: string;
  sampleSentence: string;
  sampleTranslation: string;
  /** Optional tags to identify the words. */
  tags?: string[];
}

export const NOUNS: Noun[] = [
  {
    word: 'agua',
    definition: 'water',
    gender: 'feminine',
    sampleSentence: 'El agua está muy fría hoy.',
    sampleTranslation: 'The water is very cold today.'
  },
  {
    word: 'amigo',
    definition: 'friend',
    gender: 'masculine',
    sampleSentence: 'Mi amigo vive en España.',
    sampleTranslation: 'My friend lives in Spain.'
  },
  {
    word: 'amiga',
    definition: 'friend (female)',
    gender: 'feminine',
    sampleSentence: 'Mi amiga vive en España.',
    sampleTranslation: 'My friend lives in Spain.'
  },
  {
    word: 'año',
    definition: 'year',
    gender: 'masculine',
    sampleSentence: 'Este año viajo a México.',
    sampleTranslation: 'This year I travel to Mexico.'
  },
  {
    word: 'árbol',
    definition: 'tree',
    gender: 'masculine',
    sampleSentence: 'El árbol es muy grande.',
    sampleTranslation: 'The tree is very big.'
  },
  {
    word: 'avión',
    definition: 'airplane',
    gender: 'masculine',
    sampleSentence: 'El avión sale a las tres.',
    sampleTranslation: 'The airplane leaves at three.'
  },
  {
    word: 'bebé',
    definition: 'baby',
    gender: 'masculine',
    sampleSentence: 'El bebé duerme mucho.',
    sampleTranslation: 'The baby sleeps a lot.'
  },
  {
    word: 'boca',
    definition: 'mouth',
    gender: 'feminine',
    sampleSentence: 'Cierra la boca cuando comes.',
    sampleTranslation: 'Close your mouth when you eat.'
  },
  {
    word: 'brazo',
    definition: 'arm',
    gender: 'masculine',
    sampleSentence: 'Me duele el brazo derecho.',
    sampleTranslation: 'My right arm hurts.'
  },
  {
    word: 'cabeza',
    definition: 'head',
    gender: 'feminine',
    sampleSentence: 'Me duele la cabeza hoy.',
    sampleTranslation: 'My head hurts today.'
  },
  {
    word: 'café',
    definition: 'coffee',
    gender: 'masculine',
    sampleSentence: 'Tomo café cada mañana.',
    sampleTranslation: 'I drink coffee every morning.'
  },
  {
    word: 'calle',
    definition: 'street',
    gender: 'feminine',
    sampleSentence: 'Vivo en esta calle.',
    sampleTranslation: 'I live on this street.'
  },
  {
    word: 'cama',
    definition: 'bed',
    gender: 'feminine',
    sampleSentence: 'Mi cama es muy cómoda.',
    sampleTranslation: 'My bed is very comfortable.'
  },
  {
    word: 'casa',
    definition: 'house',
    gender: 'feminine',
    sampleSentence: 'La casa tiene tres habitaciones.',
    sampleTranslation: 'The house has three bedrooms.'
  },
  {
    word: 'ciudad',
    definition: 'city',
    gender: 'feminine',
    sampleSentence: 'La ciudad es muy grande.',
    sampleTranslation: 'The city is very big.'
  },
  {
    word: 'coche',
    definition: 'car',
    gender: 'masculine',
    sampleSentence: 'Mi coche es rojo.',
    sampleTranslation: 'My car is red.'
  },
  {
    word: 'comida',
    definition: 'food',
    gender: 'feminine',
    sampleSentence: 'La comida está deliciosa.',
    sampleTranslation: 'The food is delicious.'
  },
  {
    word: 'cosa',
    definition: 'thing',
    gender: 'feminine',
    sampleSentence: 'Necesito comprar algunas cosas.',
    sampleTranslation: 'I need to buy some things.'
  },
  {
    word: 'día',
    definition: 'day',
    gender: 'masculine',
    sampleSentence: 'Hoy es un día muy bonito.',
    sampleTranslation: 'Today is a very nice day.'
  },
  {
    word: 'dinero',
    definition: 'money',
    gender: 'masculine',
    sampleSentence: 'No tengo dinero ahora.',
    sampleTranslation: "I don't have money now."
  },
  {
    word: 'escuela',
    definition: 'school',
    gender: 'feminine',
    sampleSentence: 'Los niños van a la escuela.',
    sampleTranslation: 'The children go to school.'
  },
  {
    word: 'familia',
    definition: 'family',
    gender: 'feminine',
    sampleSentence: 'Mi familia es muy grande.',
    sampleTranslation: 'My family is very big.'
  },
  {
    word: 'flor',
    definition: 'flower',
    gender: 'feminine',
    sampleSentence: 'La flor es muy hermosa.',
    sampleTranslation: 'The flower is very beautiful.'
  },
  {
    word: 'gato',
    definition: 'cat',
    gender: 'masculine',
    sampleSentence: 'El gato está en el jardín.',
    sampleTranslation: 'The cat is in the garden.'
  },
  {
    word: 'gata',
    definition: 'cat (female)',
    gender: 'feminine',
    sampleSentence: 'La gata está en el jardín.',
    sampleTranslation: 'The cat is in the garden.'
  },
  {
    word: 'hermano',
    definition: 'brother',
    gender: 'masculine',
    sampleSentence: 'Mi hermano vive en Madrid.',
    sampleTranslation: 'My brother lives in Madrid.'
  },
  {
    word: 'hermana',
    definition: 'sister',
    gender: 'feminine',
    sampleSentence: 'Mi hermana vive en Madrid.',
    sampleTranslation: 'My sister lives in Madrid.'
  },
  {
    word: 'hijo',
    definition: 'son/child',
    gender: 'masculine',
    sampleSentence: 'Mi hijo tiene diez años.',
    sampleTranslation: 'My son is ten years old.'
  },
  {
    word: 'hija',
    definition: 'daughter',
    gender: 'feminine',
    sampleSentence: 'Mi hija tiene diez años.',
    sampleTranslation: 'My daughter is ten years old.'
  },
  {
    word: 'hombre',
    definition: 'man',
    gender: 'masculine',
    sampleSentence: 'El hombre camina por la calle.',
    sampleTranslation: 'The man walks down the street.'
  },
  {
    word: 'hora',
    definition: 'hour',
    gender: 'feminine',
    sampleSentence: 'Espero una hora cada día.',
    sampleTranslation: 'I wait one hour every day.'
  },
  {
    word: 'jardín',
    definition: 'garden',
    gender: 'masculine',
    sampleSentence: 'El jardín tiene muchas flores.',
    sampleTranslation: 'The garden has many flowers.'
  },
  {
    word: 'libro',
    definition: 'book',
    gender: 'masculine',
    sampleSentence: 'Leo un libro interesante.',
    sampleTranslation: 'I read an interesting book.'
  },
  {
    word: 'lluvia',
    definition: 'rain',
    gender: 'feminine',
    sampleSentence: 'La lluvia comienza ahora.',
    sampleTranslation: 'The rain starts now.'
  },
  {
    word: 'madre',
    definition: 'mother',
    gender: 'feminine',
    sampleSentence: 'Mi madre cocina muy bien.',
    sampleTranslation: 'My mother cooks very well.'
  },
  {
    word: 'mano',
    definition: 'hand',
    gender: 'feminine',
    sampleSentence: 'Levanta la mano si sabes.',
    sampleTranslation: 'Raise your hand if you know.'
  },
  {
    word: 'mesa',
    definition: 'table',
    gender: 'feminine',
    sampleSentence: 'La mesa está en la cocina.',
    sampleTranslation: 'The table is in the kitchen.'
  },
  {
    word: 'mujer',
    definition: 'woman',
    gender: 'feminine',
    sampleSentence: 'La mujer trabaja en la oficina.',
    sampleTranslation: 'The woman works in the office.'
  },
  {
    word: 'mundo',
    definition: 'world',
    gender: 'masculine',
    sampleSentence: 'Quiero viajar por el mundo.',
    sampleTranslation: 'I want to travel around the world.'
  },
  {
    word: 'niño',
    definition: 'child',
    gender: 'masculine',
    sampleSentence: 'El niño juega en el parque.',
    sampleTranslation: 'The child plays in the park.'
  },
  {
    word: 'niña',
    definition: 'child (female)/girl',
    gender: 'feminine',
    sampleSentence: 'La niña juega en el parque.',
    sampleTranslation: 'The girl plays in the park.'
  },
  {
    word: 'noche',
    definition: 'night',
    gender: 'feminine',
    sampleSentence: 'La noche es muy tranquila.',
    sampleTranslation: 'The night is very quiet.'
  },
  {
    word: 'nombre',
    definition: 'name',
    gender: 'masculine',
    sampleSentence: 'Mi nombre es María.',
    sampleTranslation: 'My name is María.'
  },
  {
    word: 'ojo',
    definition: 'eye',
    gender: 'masculine',
    sampleSentence: 'Tiene los ojos azules.',
    sampleTranslation: 'He/she has blue eyes.'
  },
  {
    word: 'padre',
    definition: 'father',
    gender: 'masculine',
    sampleSentence: 'Mi padre trabaja mucho.',
    sampleTranslation: 'My father works a lot.'
  },
  {
    word: 'país',
    definition: 'country',
    gender: 'masculine',
    sampleSentence: 'España es un país hermoso.',
    sampleTranslation: 'Spain is a beautiful country.'
  },
  {
    word: 'palabra',
    definition: 'word',
    gender: 'feminine',
    sampleSentence: 'Esa palabra es muy difícil.',
    sampleTranslation: 'That word is very difficult.'
  },
  {
    word: 'pan',
    definition: 'bread',
    gender: 'masculine',
    sampleSentence: 'Compro pan fresco cada día.',
    sampleTranslation: 'I buy fresh bread every day.'
  },
  {
    word: 'papel',
    definition: 'paper',
    gender: 'masculine',
    sampleSentence: 'Necesito papel para escribir.',
    sampleTranslation: 'I need paper to write.'
  },
  {
    word: 'perro',
    definition: 'dog',
    gender: 'masculine',
    sampleSentence: 'El perro corre en el parque.',
    sampleTranslation: 'The dog runs in the park.'
  },
  {
    word: 'perra',
    definition: 'dog (female)',
    gender: 'feminine',
    sampleSentence: 'La perra corre en el parque.',
    sampleTranslation: 'The dog runs in the park.'
  },
  {
    word: 'persona',
    definition: 'person',
    gender: 'feminine',
    sampleSentence: 'Esa persona es muy amable.',
    sampleTranslation: 'That person is very kind.'
  },
  {
    word: 'pie',
    definition: 'foot',
    gender: 'masculine',
    sampleSentence: 'Me duele el pie izquierdo.',
    sampleTranslation: 'My left foot hurts.'
  },
  {
    word: 'puerta',
    definition: 'door',
    gender: 'feminine',
    sampleSentence: 'Cierra la puerta por favor.',
    sampleTranslation: 'Close the door please.'
  },
  {
    word: 'sol',
    definition: 'sun',
    gender: 'masculine',
    sampleSentence: 'El sol brilla mucho hoy.',
    sampleTranslation: 'The sun shines a lot today.'
  },
  {
    word: 'tiempo',
    definition: 'time/weather',
    gender: 'masculine',
    sampleSentence: 'No tengo tiempo ahora.',
    sampleTranslation: "I don't have time now."
  },
  {
    word: 'trabajo',
    definition: 'work/job',
    gender: 'masculine',
    sampleSentence: 'Mi trabajo es muy interesante.',
    sampleTranslation: 'My work is very interesting.'
  },
  {
    word: 'ventana',
    definition: 'window',
    gender: 'feminine',
    sampleSentence: 'Abre la ventana por favor.',
    sampleTranslation: 'Open the window please.'
  },
  {
    word: 'vida',
    definition: 'life',
    gender: 'feminine',
    sampleSentence: 'La vida es muy bonita.',
    sampleTranslation: 'Life is very beautiful.'
  },
  {
    word: 'viento',
    definition: 'wind',
    gender: 'masculine',
    sampleSentence: 'Hace mucho viento hoy.',
    sampleTranslation: "It's very windy today."
  },
  // Days of the week
  {
    word: 'lunes',
    definition: 'Monday',
    gender: 'masculine',
    origin: 'From Latin "dies lunae" (day of the Moon).  Think of Mr.s Lunes from Morty\'s Mind Blowers.',
    sampleSentence: 'El lunes tengo una reunión.',
    sampleTranslation: 'On Monday I have a meeting.',
    tags: ['day-of-week']
  },
  {
    word: 'martes',
    definition: 'Tuesday',
    gender: 'masculine',
    origin: 'From Latin "dies Martis" (day of Mars, Roman god of war)',
    sampleSentence: 'El martes voy al gimnasio.',
    sampleTranslation: 'On Tuesday I go to the gym.',
    tags: ['day-of-week']
  },
  {
    word: 'miércoles',
    definition: 'Wednesday',
    gender: 'masculine',
    origin: 'From Latin "dies Mercurii" (day of Mercury, Roman god of commerce)',
    sampleSentence: 'El miércoles es mi día favorito.',
    sampleTranslation: 'Wednesday is my favorite day.',
    tags: ['day-of-week']
  },
  {
    word: 'jueves',
    definition: 'Thursday',
    gender: 'masculine',
    origin: 'From Latin "dies Iovis" (day of Jupiter, king of the Roman gods)',
    sampleSentence: 'El jueves vamos al cine.',
    sampleTranslation: 'On Thursday we go to the movies.',
    tags: ['day-of-week']
  },
  {
    word: 'viernes',
    definition: 'Friday',
    gender: 'masculine',
    origin: 'From Latin "dies Veneris" (day of Venus, Roman goddess of love)',
    sampleSentence: 'El viernes salgo con amigos.',
    sampleTranslation: 'On Friday I go out with friends.',
    tags: ['day-of-week']
  },
  {
    word: 'sábado',
    definition: 'Saturday',
    gender: 'masculine',
    origin: 'From Hebrew "shabbat" (Sabbath) via Latin "sabbatum"',
    sampleSentence: 'El sábado voy de compras.',
    sampleTranslation: 'On Saturday I go shopping.',
    tags: ['day-of-week']
  },
  {
    word: 'domingo',
    definition: 'Sunday',
    gender: 'masculine',
    origin: 'From Latin "dies Dominicus" (day of the Lord)',
    sampleSentence: 'El domingo descansamos.',
    sampleTranslation: 'On Sunday we rest.',
    tags: ['day-of-week']
  },
  // Months
  {
    word: 'enero',
    definition: 'January',
    gender: 'masculine',
    origin: 'From Latin "Ianuarius", named after Janus, Roman god of beginnings and transitions',
    sampleSentence: 'Enero es el primer mes del año.',
    sampleTranslation: 'January is the first month of the year.',
    tags: ['month']
  },
  {
    word: 'febrero',
    definition: 'February',
    gender: 'masculine',
    origin: 'From Latin "Februarius", named after Februa, a Roman purification festival',
    sampleSentence: 'Febrero tiene 28 días.',
    sampleTranslation: 'February has 28 days.',
    tags: ['month']
  },
  {
    word: 'marzo',
    definition: 'March',
    gender: 'masculine',
    origin: 'From Latin "Martius", named after Mars, Roman god of war',
    sampleSentence: 'Marzo es el mes de la primavera.',
    sampleTranslation: 'March is the month of spring.',
    tags: ['month']
  },
  {
    word: 'abril',
    definition: 'April',
    gender: 'masculine',
    origin: 'From Latin "Aprilis", possibly from "aperire" (to open), referring to opening buds',
    sampleSentence: 'En abril llueve mucho.',
    sampleTranslation: 'In April it rains a lot.',
    tags: ['month']
  },
  {
    word: 'mayo',
    definition: 'May',
    gender: 'masculine',
    origin: 'From Latin "Maius", named after Maia, Roman goddess of spring and growth',
    sampleSentence: 'Mayo es un mes muy bonito.',
    sampleTranslation: 'May is a very beautiful month.',
    tags: ['month']
  },
  {
    word: 'junio',
    definition: 'June',
    gender: 'masculine',
    origin: 'From Latin "Iunius", named after Juno, Roman goddess of marriage and queen of the gods',
    sampleSentence: 'En junio empieza el verano.',
    sampleTranslation: 'In June summer begins.',
    tags: ['month']
  },
  {
    word: 'julio',
    definition: 'July',
    gender: 'masculine',
    origin: 'From Latin "Iulius", named after Julius Caesar',
    sampleSentence: 'Julio es un mes muy caluroso.',
    sampleTranslation: 'July is a very hot month.',
    tags: ['month']
  },
  {
    word: 'agosto',
    definition: 'August',
    gender: 'masculine',
    origin: 'From Latin "Augustus", named after Emperor Augustus Caesar',
    sampleSentence: 'En agosto voy de vacaciones.',
    sampleTranslation: 'In August I go on vacation.',
    tags: ['month']
  },
  {
    word: 'septiembre',
    definition: 'September',
    gender: 'masculine',
    origin: 'From Latin "September" (seventh month in the original Roman calendar)',
    sampleSentence: 'Septiembre es el mes de regreso a la escuela.',
    sampleTranslation: 'September is the month of return to school.',
    tags: ['month']
  },
  {
    word: 'octubre',
    definition: 'October',
    gender: 'masculine',
    origin: 'From Latin "October" (eighth month in the original Roman calendar)',
    sampleSentence: 'En octubre celebramos Halloween.',
    sampleTranslation: 'In October we celebrate Halloween.',
    tags: ['month']
  },
  {
    word: 'noviembre',
    definition: 'November',
    gender: 'masculine',
    origin: 'From Latin "November" (ninth month in the original Roman calendar)',
    sampleSentence: 'Noviembre es un mes de otoño.',
    sampleTranslation: 'November is an autumn month.',
    tags: ['month']
  },
  {
    word: 'diciembre',
    definition: 'December',
    gender: 'masculine',
    origin: 'From Latin "December" (tenth month in the original Roman calendar)',
    sampleSentence: 'En diciembre celebramos Navidad.',
    sampleTranslation: 'In December we celebrate Christmas.',
    tags: ['month']
  },
  // Parts of the head
  {
    word: 'cara',
    definition: 'face',
    gender: 'feminine',
    sampleSentence: 'Tiene una cara muy bonita.',
    sampleTranslation: 'She has a very pretty face.',
    tags: ['head-part']
  },
  {
    word: 'frente',
    definition: 'forehead',
    gender: 'feminine',
    sampleSentence: 'Me duele la frente.',
    sampleTranslation: 'My forehead hurts.',
    tags: ['head-part']
  },
  {
    word: 'ceja',
    definition: 'eyebrow',
    gender: 'feminine',
    sampleSentence: 'Tiene las cejas muy pobladas.',
    sampleTranslation: 'He has very thick eyebrows.',
    tags: ['head-part']
  },
  {
    word: 'oreja',
    definition: 'ear',
    gender: 'feminine',
    sampleSentence: 'Me duele la oreja izquierda.',
    sampleTranslation: 'My left ear hurts.',
    tags: ['head-part']
  },
  {
    word: 'nariz',
    definition: 'nose',
    gender: 'feminine',
    sampleSentence: 'Tiene la nariz pequeña.',
    sampleTranslation: 'She has a small nose.',
    tags: ['head-part']
  },
  {
    word: 'mejilla',
    definition: 'cheek',
    gender: 'feminine',
    sampleSentence: 'Las mejillas del bebé son rosadas.',
    sampleTranslation: "The baby's cheeks are pink.",
    tags: ['head-part']
  },
  {
    word: 'labio',
    definition: 'lip',
    gender: 'masculine',
    sampleSentence: 'Tiene los labios rojos.',
    sampleTranslation: 'She has red lips.',
    tags: ['head-part']
  },
  {
    word: 'diente',
    definition: 'tooth',
    gender: 'masculine',
    sampleSentence: 'Me duele un diente.',
    sampleTranslation: 'One of my teeth hurts.',
    tags: ['head-part']
  },
  {
    word: 'lengua',
    definition: 'tongue',
    gender: 'feminine',
    sampleSentence: 'Me quemé la lengua con el café.',
    sampleTranslation: 'I burned my tongue with coffee.',
    tags: ['head-part']
  },
  {
    word: 'barbilla',
    definition: 'chin',
    gender: 'feminine',
    sampleSentence: 'Tiene un lunar en la barbilla.',
    sampleTranslation: 'He has a mole on his chin.',
    tags: ['head-part']
  },
  {
    word: 'pelo',
    definition: 'hair',
    gender: 'masculine',
    sampleSentence: 'Tiene el pelo largo y negro.',
    sampleTranslation: 'She has long, black hair.',
    tags: ['head-part']
  },
  {
    word: 'cuello',
    definition: 'neck',
    gender: 'masculine',
    sampleSentence: 'Me duele el cuello.',
    sampleTranslation: 'My neck hurts.',
    tags: ['head-part']
  }
];
