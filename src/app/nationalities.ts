export interface Nationality {
  country: string; // English name of country
  masculine: string; // Spanish masculine form
  feminine: string; // Spanish feminine form
  englishTranslation: string; // English translation (e.g., "Mexican")
}

export const NATIONALITIES: Nationality[] = [
  {
    country: 'Mexico',
    masculine: 'mexicano',
    feminine: 'mexicana',
    englishTranslation: 'Mexican'
  },
  {
    country: 'Colombia',
    masculine: 'colombiano',
    feminine: 'colombiana',
    englishTranslation: 'Colombian'
  },
  {
    country: 'Canada',
    masculine: 'canadiense',
    feminine: 'canadiense',
    englishTranslation: 'Canadian'
  },
  {
    country: 'United States',
    masculine: 'estadounidense',
    feminine: 'estadounidense',
    englishTranslation: 'American'
  },
  {
    country: 'Spain',
    masculine: 'español',
    feminine: 'española',
    englishTranslation: 'Spanish'
  },
  {
    country: 'Argentina',
    masculine: 'argentino',
    feminine: 'argentina',
    englishTranslation: 'Argentine/Argentinian'
  },
  {
    country: 'Brazil',
    masculine: 'brasileño',
    feminine: 'brasileña',
    englishTranslation: 'Brazilian'
  },
  {
    country: 'France',
    masculine: 'francés',
    feminine: 'francesa',
    englishTranslation: 'French'
  },
  {
    country: 'Germany',
    masculine: 'alemán',
    feminine: 'alemana',
    englishTranslation: 'German'
  },
  {
    country: 'Italy',
    masculine: 'italiano',
    feminine: 'italiana',
    englishTranslation: 'Italian'
  },
  {
    country: 'Japan',
    masculine: 'japonés',
    feminine: 'japonesa',
    englishTranslation: 'Japanese'
  },
  {
    country: 'China',
    masculine: 'chino',
    feminine: 'china',
    englishTranslation: 'Chinese'
  },
  {
    country: 'Peru',
    masculine: 'peruano',
    feminine: 'peruana',
    englishTranslation: 'Peruvian'
  },
  {
    country: 'Chile',
    masculine: 'chileno',
    feminine: 'chilena',
    englishTranslation: 'Chilean'
  },
  {
    country: 'Venezuela',
    masculine: 'venezolano',
    feminine: 'venezolana',
    englishTranslation: 'Venezuelan'
  }
];
