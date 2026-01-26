export interface Noun {
  word: string;
  definition: string;
  gender: 'masculine' | 'feminine';
  sampleSentence: string;
  sampleTranslation: string;
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
  }
];
