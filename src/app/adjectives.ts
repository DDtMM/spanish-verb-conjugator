export interface Adjective {
  word: string;
  definition: string;
  masculineSingular: string;
  feminineSingular: string;
  masculinePlural: string;
  femininePlural: string;
  sampleSentence: string;
  sampleTranslation: string;
}

export const ADJECTIVES: Adjective[] = [
  {
    word: 'alto',
    definition: 'tall/high',
    masculineSingular: 'alto',
    feminineSingular: 'alta',
    masculinePlural: 'altos',
    femininePlural: 'altas',
    sampleSentence: 'El edificio es muy alto.',
    sampleTranslation: 'The building is very tall.'
  },
  {
    word: 'bajo',
    definition: 'short/low',
    masculineSingular: 'bajo',
    feminineSingular: 'baja',
    masculinePlural: 'bajos',
    femininePlural: 'bajas',
    sampleSentence: 'La mesa es muy baja.',
    sampleTranslation: 'The table is very low.'
  },
  {
    word: 'bonito',
    definition: 'pretty/nice',
    masculineSingular: 'bonito',
    feminineSingular: 'bonita',
    masculinePlural: 'bonitos',
    femininePlural: 'bonitas',
    sampleSentence: 'Es un día muy bonito.',
    sampleTranslation: 'It is a very nice day.'
  },
  {
    word: 'bueno',
    definition: 'good',
    masculineSingular: 'bueno',
    feminineSingular: 'buena',
    masculinePlural: 'buenos',
    femininePlural: 'buenas',
    sampleSentence: 'Es un buen amigo.',
    sampleTranslation: 'He is a good friend.'
  },
  {
    word: 'cansado',
    definition: 'tired',
    masculineSingular: 'cansado',
    feminineSingular: 'cansada',
    masculinePlural: 'cansados',
    femininePlural: 'cansadas',
    sampleSentence: 'Estoy muy cansado hoy.',
    sampleTranslation: 'I am very tired today.'
  },
  {
    word: 'caro',
    definition: 'expensive',
    masculineSingular: 'caro',
    feminineSingular: 'cara',
    masculinePlural: 'caros',
    femininePlural: 'caras',
    sampleSentence: 'Este coche es muy caro.',
    sampleTranslation: 'This car is very expensive.'
  },
  {
    word: 'contento',
    definition: 'happy/content',
    masculineSingular: 'contento',
    feminineSingular: 'contenta',
    masculinePlural: 'contentos',
    femininePlural: 'contentas',
    sampleSentence: 'Ella está muy contenta.',
    sampleTranslation: 'She is very happy.'
  },
  {
    word: 'delgado',
    definition: 'thin/slim',
    masculineSingular: 'delgado',
    feminineSingular: 'delgada',
    masculinePlural: 'delgados',
    femininePlural: 'delgadas',
    sampleSentence: 'Mi hermano es muy delgado.',
    sampleTranslation: 'My brother is very thin.'
  },
  {
    word: 'difícil',
    definition: 'difficult',
    masculineSingular: 'difícil',
    feminineSingular: 'difícil',
    masculinePlural: 'difíciles',
    femininePlural: 'difíciles',
    sampleSentence: 'El examen es muy difícil.',
    sampleTranslation: 'The exam is very difficult.'
  },
  {
    word: 'divertido',
    definition: 'fun/amusing',
    masculineSingular: 'divertido',
    feminineSingular: 'divertida',
    masculinePlural: 'divertidos',
    femininePlural: 'divertidas',
    sampleSentence: 'La fiesta fue muy divertida.',
    sampleTranslation: 'The party was very fun.'
  },
  {
    word: 'enfermo',
    definition: 'sick/ill',
    masculineSingular: 'enfermo',
    feminineSingular: 'enferma',
    masculinePlural: 'enfermos',
    femininePlural: 'enfermas',
    sampleSentence: 'Mi padre está enfermo.',
    sampleTranslation: 'My father is sick.'
  },
  {
    word: 'fácil',
    definition: 'easy',
    masculineSingular: 'fácil',
    feminineSingular: 'fácil',
    masculinePlural: 'fáciles',
    femininePlural: 'fáciles',
    sampleSentence: 'Este ejercicio es muy fácil.',
    sampleTranslation: 'This exercise is very easy.'
  },
  {
    word: 'feliz',
    definition: 'happy',
    masculineSingular: 'feliz',
    feminineSingular: 'feliz',
    masculinePlural: 'felices',
    femininePlural: 'felices',
    sampleSentence: 'Soy muy feliz aquí.',
    sampleTranslation: 'I am very happy here.'
  },
  {
    word: 'feo',
    definition: 'ugly',
    masculineSingular: 'feo',
    feminineSingular: 'fea',
    masculinePlural: 'feos',
    femininePlural: 'feas',
    sampleSentence: 'El edificio es muy feo.',
    sampleTranslation: 'The building is very ugly.'
  },
  {
    word: 'frío',
    definition: 'cold',
    masculineSingular: 'frío',
    feminineSingular: 'fría',
    masculinePlural: 'fríos',
    femininePlural: 'frías',
    sampleSentence: 'El agua está muy fría.',
    sampleTranslation: 'The water is very cold.'
  },
  {
    word: 'gordo',
    definition: 'fat',
    masculineSingular: 'gordo',
    feminineSingular: 'gorda',
    masculinePlural: 'gordos',
    femininePlural: 'gordas',
    sampleSentence: 'El gato está muy gordo.',
    sampleTranslation: 'The cat is very fat.'
  },
  {
    word: 'grande',
    definition: 'big/large/great',
    masculineSingular: 'grande',
    feminineSingular: 'grande',
    masculinePlural: 'grandes',
    femininePlural: 'grandes',
    sampleSentence: 'La casa es muy grande.',
    sampleTranslation: 'The house is very big.'
  },
  {
    word: 'hermoso',
    definition: 'beautiful',
    masculineSingular: 'hermoso',
    feminineSingular: 'hermosa',
    masculinePlural: 'hermosos',
    femininePlural: 'hermosas',
    sampleSentence: 'Es una ciudad muy hermosa.',
    sampleTranslation: 'It is a very beautiful city.'
  },
  {
    word: 'importante',
    definition: 'important',
    masculineSingular: 'importante',
    feminineSingular: 'importante',
    masculinePlural: 'importantes',
    femininePlural: 'importantes',
    sampleSentence: 'Es un tema muy importante.',
    sampleTranslation: 'It is a very important topic.'
  },
  {
    word: 'inteligente',
    definition: 'intelligent',
    masculineSingular: 'inteligente',
    feminineSingular: 'inteligente',
    masculinePlural: 'inteligentes',
    femininePlural: 'inteligentes',
    sampleSentence: 'Ella es muy inteligente.',
    sampleTranslation: 'She is very intelligent.'
  },
  {
    word: 'interesante',
    definition: 'interesting',
    masculineSingular: 'interesante',
    feminineSingular: 'interesante',
    masculinePlural: 'interesantes',
    femininePlural: 'interesantes',
    sampleSentence: 'El libro es muy interesante.',
    sampleTranslation: 'The book is very interesting.'
  },
  {
    word: 'joven',
    definition: 'young',
    masculineSingular: 'joven',
    feminineSingular: 'joven',
    masculinePlural: 'jóvenes',
    femininePlural: 'jóvenes',
    sampleSentence: 'Mi hermana es muy joven.',
    sampleTranslation: 'My sister is very young.'
  },
  {
    word: 'largo',
    definition: 'long',
    masculineSingular: 'largo',
    feminineSingular: 'larga',
    masculinePlural: 'largos',
    femininePlural: 'largas',
    sampleSentence: 'Es una calle muy larga.',
    sampleTranslation: 'It is a very long street.'
  },
  {
    word: 'limpio',
    definition: 'clean',
    masculineSingular: 'limpio',
    feminineSingular: 'limpia',
    masculinePlural: 'limpios',
    femininePlural: 'limpias',
    sampleSentence: 'La casa está muy limpia.',
    sampleTranslation: 'The house is very clean.'
  },
  {
    word: 'listo',
    definition: 'ready/smart',
    masculineSingular: 'listo',
    feminineSingular: 'lista',
    masculinePlural: 'listos',
    femininePlural: 'listas',
    sampleSentence: 'Estoy listo para salir.',
    sampleTranslation: 'I am ready to leave.'
  },
  {
    word: 'malo',
    definition: 'bad',
    masculineSingular: 'malo',
    feminineSingular: 'mala',
    masculinePlural: 'malos',
    femininePlural: 'malas',
    sampleSentence: 'Es una mala idea.',
    sampleTranslation: 'It is a bad idea.'
  },
  {
    word: 'mejor',
    definition: 'better/best',
    masculineSingular: 'mejor',
    feminineSingular: 'mejor',
    masculinePlural: 'mejores',
    femininePlural: 'mejores',
    sampleSentence: 'Este es el mejor restaurante.',
    sampleTranslation: 'This is the best restaurant.'
  },
  {
    word: 'nuevo',
    definition: 'new',
    masculineSingular: 'nuevo',
    feminineSingular: 'nueva',
    masculinePlural: 'nuevos',
    femininePlural: 'nuevas',
    sampleSentence: 'Tengo un coche nuevo.',
    sampleTranslation: 'I have a new car.'
  },
  {
    word: 'pequeño',
    definition: 'small',
    masculineSingular: 'pequeño',
    feminineSingular: 'pequeña',
    masculinePlural: 'pequeños',
    femininePlural: 'pequeñas',
    sampleSentence: 'Es un perro muy pequeño.',
    sampleTranslation: 'It is a very small dog.'
  },
  {
    word: 'peor',
    definition: 'worse/worst',
    masculineSingular: 'peor',
    feminineSingular: 'peor',
    masculinePlural: 'peores',
    femininePlural: 'peores',
    sampleSentence: 'Este es el peor día.',
    sampleTranslation: 'This is the worst day.'
  },
  {
    word: 'pobre',
    definition: 'poor',
    masculineSingular: 'pobre',
    feminineSingular: 'pobre',
    masculinePlural: 'pobres',
    femininePlural: 'pobres',
    sampleSentence: 'Es una familia muy pobre.',
    sampleTranslation: 'It is a very poor family.'
  },
  {
    word: 'rápido',
    definition: 'fast/quick',
    masculineSingular: 'rápido',
    feminineSingular: 'rápida',
    masculinePlural: 'rápidos',
    femininePlural: 'rápidas',
    sampleSentence: 'El coche es muy rápido.',
    sampleTranslation: 'The car is very fast.'
  },
  {
    word: 'rico',
    definition: 'rich/delicious',
    masculineSingular: 'rico',
    feminineSingular: 'rica',
    masculinePlural: 'ricos',
    femininePlural: 'ricas',
    sampleSentence: 'La comida está muy rica.',
    sampleTranslation: 'The food is very delicious.'
  },
  {
    word: 'rojo',
    definition: 'red',
    masculineSingular: 'rojo',
    feminineSingular: 'roja',
    masculinePlural: 'rojos',
    femininePlural: 'rojas',
    sampleSentence: 'Tengo un coche rojo.',
    sampleTranslation: 'I have a red car.'
  },
  {
    word: 'sucio',
    definition: 'dirty',
    masculineSingular: 'sucio',
    feminineSingular: 'sucia',
    masculinePlural: 'sucios',
    femininePlural: 'sucias',
    sampleSentence: 'La ropa está muy sucia.',
    sampleTranslation: 'The clothes are very dirty.'
  },
  {
    word: 'triste',
    definition: 'sad',
    masculineSingular: 'triste',
    feminineSingular: 'triste',
    masculinePlural: 'tristes',
    femininePlural: 'tristes',
    sampleSentence: 'Estoy muy triste hoy.',
    sampleTranslation: 'I am very sad today.'
  },
  {
    word: 'viejo',
    definition: 'old',
    masculineSingular: 'viejo',
    feminineSingular: 'vieja',
    masculinePlural: 'viejos',
    femininePlural: 'viejas',
    sampleSentence: 'Es un libro muy viejo.',
    sampleTranslation: 'It is a very old book.'
  },
  {
    word: 'azul',
    definition: 'blue',
    masculineSingular: 'azul',
    feminineSingular: 'azul',
    masculinePlural: 'azules',
    femininePlural: 'azules',
    sampleSentence: 'El cielo es azul.',
    sampleTranslation: 'The sky is blue.'
  },
  {
    word: 'blanco',
    definition: 'white',
    masculineSingular: 'blanco',
    feminineSingular: 'blanca',
    masculinePlural: 'blancos',
    femininePlural: 'blancas',
    sampleSentence: 'La nieve es blanca.',
    sampleTranslation: 'The snow is white.'
  },
  {
    word: 'negro',
    definition: 'black',
    masculineSingular: 'negro',
    feminineSingular: 'negra',
    masculinePlural: 'negros',
    femininePlural: 'negras',
    sampleSentence: 'Tengo un gato negro.',
    sampleTranslation: 'I have a black cat.'
  },
  {
    word: 'verde',
    definition: 'green',
    masculineSingular: 'verde',
    feminineSingular: 'verde',
    masculinePlural: 'verdes',
    femininePlural: 'verdes',
    sampleSentence: 'El árbol es verde.',
    sampleTranslation: 'The tree is green.'
  },
  {
    word: 'amarillo',
    definition: 'yellow',
    masculineSingular: 'amarillo',
    feminineSingular: 'amarilla',
    masculinePlural: 'amarillos',
    femininePlural: 'amarillas',
    sampleSentence: 'El sol es amarillo.',
    sampleTranslation: 'The sun is yellow.'
  },
  {
    word: 'caliente',
    definition: 'hot',
    masculineSingular: 'caliente',
    feminineSingular: 'caliente',
    masculinePlural: 'calientes',
    femininePlural: 'calientes',
    sampleSentence: 'El café está muy caliente.',
    sampleTranslation: 'The coffee is very hot.'
  },
  {
    word: 'fuerte',
    definition: 'strong',
    masculineSingular: 'fuerte',
    feminineSingular: 'fuerte',
    masculinePlural: 'fuertes',
    femininePlural: 'fuertes',
    sampleSentence: 'Mi hermano es muy fuerte.',
    sampleTranslation: 'My brother is very strong.'
  },
  {
    word: 'dulce',
    definition: 'sweet',
    masculineSingular: 'dulce',
    feminineSingular: 'dulce',
    masculinePlural: 'dulces',
    femininePlural: 'dulces',
    sampleSentence: 'El pastel es muy dulce.',
    sampleTranslation: 'The cake is very sweet.'
  },
  {
    word: 'corto',
    definition: 'short',
    masculineSingular: 'corto',
    feminineSingular: 'corta',
    masculinePlural: 'cortos',
    femininePlural: 'cortas',
    sampleSentence: 'Es una historia muy corta.',
    sampleTranslation: 'It is a very short story.'
  },
  {
    word: 'lleno',
    definition: 'full',
    masculineSingular: 'lleno',
    feminineSingular: 'llena',
    masculinePlural: 'llenos',
    femininePlural: 'llenas',
    sampleSentence: 'El vaso está lleno.',
    sampleTranslation: 'The glass is full.'
  },
  {
    word: 'vacío',
    definition: 'empty',
    masculineSingular: 'vacío',
    feminineSingular: 'vacía',
    masculinePlural: 'vacíos',
    femininePlural: 'vacías',
    sampleSentence: 'La caja está vacía.',
    sampleTranslation: 'The box is empty.'
  },
  {
    word: 'abierto',
    definition: 'open',
    masculineSingular: 'abierto',
    feminineSingular: 'abierta',
    masculinePlural: 'abiertos',
    femininePlural: 'abiertas',
    sampleSentence: 'La puerta está abierta.',
    sampleTranslation: 'The door is open.'
  },
  {
    word: 'cerrado',
    definition: 'closed',
    masculineSingular: 'cerrado',
    feminineSingular: 'cerrada',
    masculinePlural: 'cerrados',
    femininePlural: 'cerradas',
    sampleSentence: 'La ventana está cerrada.',
    sampleTranslation: 'The window is closed.'
  }
];
