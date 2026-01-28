export interface NumberInfo {
  value: number;
  spanish: string;
  notes?: string;
}

export interface NumberGroup {
  title: string;
  description: string;
  numbers: NumberInfo[];
  tips?: string[];
}

// Basic numbers 0-15 (memorize these!)
const BASIC_NUMBERS: NumberInfo[] = [
  { value: 0, spanish: 'cero' },
  { value: 1, spanish: 'uno' },
  { value: 2, spanish: 'dos' },
  { value: 3, spanish: 'tres' },
  { value: 4, spanish: 'cuatro' },
  { value: 5, spanish: 'cinco' },
  { value: 6, spanish: 'seis' },
  { value: 7, spanish: 'siete' },
  { value: 8, spanish: 'ocho' },
  { value: 9, spanish: 'nueve' },
  { value: 10, spanish: 'diez' },
  { value: 11, spanish: 'once' },
  { value: 12, spanish: 'doce' },
  { value: 13, spanish: 'trece' },
  { value: 14, spanish: 'catorce' },
  { value: 15, spanish: 'quince' }
];

// Numbers 16-19 (pattern: dieci + number)
const TEENS_16_19: NumberInfo[] = [
  { value: 16, spanish: 'dieciséis', notes: 'diez + y + seis → dieciséis' },
  { value: 17, spanish: 'diecisiete', notes: 'diez + y + siete → diecisiete' },
  { value: 18, spanish: 'dieciocho', notes: 'diez + y + ocho → dieciocho' },
  { value: 19, spanish: 'diecinueve', notes: 'diez + y + nueve → diecinueve' }
];

// Numbers 20-29
const TWENTIES: NumberInfo[] = [
  { value: 20, spanish: 'veinte' },
  { value: 21, spanish: 'veintiuno', notes: 'veinte + y + uno → veintiuno' },
  { value: 22, spanish: 'veintidós', notes: 'veinte + y + dos → veintidós' },
  { value: 23, spanish: 'veintitrés', notes: 'veinte + y + tres → veintitrés' },
  { value: 24, spanish: 'veinticuatro', notes: 'veinte + y + cuatro → veinticuatro' },
  { value: 25, spanish: 'veinticinco', notes: 'veinte + y + cinco → veinticinco' },
  { value: 26, spanish: 'veintiséis', notes: 'veinte + y + seis → veintiséis' },
  { value: 27, spanish: 'veintisiete', notes: 'veinte + y + siete → veintisiete' },
  { value: 28, spanish: 'veintiocho', notes: 'veinte + y + ocho → veintiocho' },
  { value: 29, spanish: 'veintinueve', notes: 'veinte + y + nueve → veintinueve' }
];

// Tens (30-90)
const TENS: NumberInfo[] = [
  { value: 30, spanish: 'treinta' },
  { value: 40, spanish: 'cuarenta' },
  { value: 50, spanish: 'cincuenta' },
  { value: 60, spanish: 'sesenta' },
  { value: 70, spanish: 'setenta' },
  { value: 80, spanish: 'ochenta' },
  { value: 90, spanish: 'noventa' }
];

// Sample compound numbers 31-99
const COMPOUND_NUMBERS: NumberInfo[] = [
  { value: 31, spanish: 'treinta y uno', notes: 'Pattern: thirty + and + one' },
  { value: 32, spanish: 'treinta y dos', notes: 'Pattern: thirty + and + two' },
  { value: 45, spanish: 'cuarenta y cinco', notes: 'Pattern: forty + and + five' },
  { value: 56, spanish: 'cincuenta y seis', notes: 'Pattern: fifty + and + six' },
  { value: 67, spanish: 'sesenta y siete', notes: 'Pattern: sixty + and + seven' },
  { value: 78, spanish: 'setenta y ocho', notes: 'Pattern: seventy + and + eight' },
  { value: 89, spanish: 'ochenta y nueve', notes: 'Pattern: eighty + and + nine' },
  { value: 99, spanish: 'noventa y nueve', notes: 'Pattern: ninety + and + nine' }
];

// Hundreds
const HUNDREDS: NumberInfo[] = [
  { value: 100, spanish: 'cien', notes: 'Used alone or before thousands/millions' },
  { value: 125, spanish: 'ciento veinticinco', notes: 'ciento + twenty-five - When adding a number of cien it becomes "ciento"' },
  { value: 200, spanish: 'doscientos' },
  { value: 300, spanish: 'trescientos' },
  { value: 400, spanish: 'cuatrocientos' },
  { value: 500, spanish: 'quinientos', notes: 'Irregular: not "cincocientos"' },
  { value: 600, spanish: 'seiscientos' },
  { value: 700, spanish: 'setecientos', notes: 'Irregular: not "sietecientos"' },
  { value: 800, spanish: 'ochocientos' },
  { value: 900, spanish: 'novecientos', notes: 'Irregular: not "nuevecientos"' },
  { value: 250, spanish: 'doscientos cincuenta', notes: 'two hundred + fifty' },
  { value: 375, spanish: 'trescientos setenta y cinco', notes: 'three hundred + seventy-five' },
  { value: 499, spanish: 'cuatrocientos noventa y nueve', notes: 'four hundred + ninety-nine' }
];

// Thousands
const THOUSANDS: NumberInfo[] = [
  { value: 1000, spanish: 'mil', notes: 'Always "mil", never "un mil"' },
  { value: 1001, spanish: 'mil uno', notes: 'mil + one' },
  { value: 1500, spanish: 'mil quinientos', notes: 'mil + five hundred' },
  { value: 1999, spanish: 'mil novecientos noventa y nueve', notes: 'mil + 999' },
  { value: 2000, spanish: 'dos mil', notes: 'two + thousand' },
  { value: 2500, spanish: 'dos mil quinientos', notes: 'two thousand five hundred' },
  { value: 3000, spanish: 'tres mil' },
  { value: 4000, spanish: 'cuatro mil' },
  { value: 5000, spanish: 'cinco mil' },
  { value: 6000, spanish: 'seis mil' },
  { value: 7000, spanish: 'siete mil' },
  { value: 8000, spanish: 'ocho mil' },
  { value: 9000, spanish: 'nueve mil' },
  { value: 10000, spanish: 'diez mil' }
];


export const NUMBER_GROUPS: NumberGroup[] = [
  {
    title: '0-15: Essential Numbers',
    description: 'These are the foundation. Memorize them!',
    numbers: BASIC_NUMBERS,
    tips: [
      'These must be memorized - they don\'t follow a pattern',
      'Practice saying them out loud daily',
      'Once you know these, the rest becomes easier'
    ]
  },
  {
    title: '16-19: First Pattern',
    description: 'Your first pattern: diez (10) + y (and) + number',
    numbers: TEENS_16_19,
    tips: [
      'Notice how "diez y" becomes "dieci" when combined',
      'dieciséis = diez + y + seis (16 = 10 + and + 6)',
      'The accent marks are important!'
    ]
  },
  {
    title: '20-29: The Twenties',
    description: 'Another special pattern: veinte (20) + y + number',
    numbers: TWENTIES,
    tips: [
      'veinte (20) is the base',
      '"veinte y" becomes "veinti" when combined',
      'veintiuno = veinte + y + uno',
      'After 29, the pattern changes!'
    ]
  },
  {
    title: '30-90: The Tens',
    description: 'Learn these seven numbers to count by tens',
    numbers: TENS,
    tips: [
      'Notice the pattern: most end in "-enta"',
      'cuarenta (40) and cincuenta (50) are slightly different',
      'These are building blocks for 31-99'
    ]
  },
  {
    title: '31-99: Compound Numbers',
    description: 'Pattern: tens + y + ones (e.g., 31 = treinta y uno)',
    numbers: COMPOUND_NUMBERS,
    tips: [
      'Formula: [tens] + y + [ones]',
      'Unlike 16-29, these are written as separate words',
      'Example: 45 = cuarenta (40) + y + cinco (5)',
      'This pattern works for all numbers from 31-99'
    ]
  },
  {
    title: '100-999: Hundreds',
    description: 'Learning the hundreds unlocks all numbers up to 999',
    numbers: HUNDREDS,
    tips: [
      '100 = cien (alone) or ciento (before other numbers)',
      '200-900 end in "-cientos"',
      'Watch for irregulars: quinientos (500), setecientos (700), novecientos (900)',
      'Hundreds agree with gender: doscientos libros, doscientas páginas',
      'Pattern: [hundreds] + [tens] + y + [ones]'
    ]
  },
  {
    title: '1000-10000: Thousands',
    description: 'Master thousands to express large numbers',
    numbers: THOUSANDS,
    tips: [
      '1000 = mil (never "un mil")',
      '2000+ = number + mil (dos mil, tres mil, etc.)',
      'Pattern: [thousands] + [hundreds] + [tens] + y + [ones]',
      'mil doesn\'t change for gender'
    ]
  }
];

// Export all numbers in a flat array for quiz purposes
export const ALL_NUMBERS: NumberInfo[] = [
  ...BASIC_NUMBERS,
  ...TEENS_16_19,
  ...TWENTIES,
  ...TENS,
  ...COMPOUND_NUMBERS,
  ...HUNDREDS,
  ...THOUSANDS
];

// Helper function to generate a number in Spanish
export function numberToSpanish(num: number): string {
  if (num === 0) return 'cero';
  if (num === 1000) return 'mil';
  
  // Check if we have it in our data
  const found = ALL_NUMBERS.find(n => n.value === num);
  if (found) return found.spanish;
  
  // Otherwise construct it (basic algorithm for demonstration)
  if (num < 0 || num > 10000) return num.toString();
  
  let result = '';
  
  // Thousands
  if (num >= 1000) {
    const thousands = Math.floor(num / 1000);
    if (thousands === 1) {
      result += 'mil';
    } else {
      const thousandsWord = ALL_NUMBERS.find(n => n.value === thousands)?.spanish || '';
      result += thousandsWord + ' mil';
    }
    num %= 1000;
    if (num > 0) result += ' ';
  }
  
  // Hundreds
  if (num >= 100) {
    const hundreds = Math.floor(num / 100);
    if (num === 100) {
      result += 'cien';
      return result;
    }
    const hundredsWord = ALL_NUMBERS.find(n => n.value === hundreds * 100)?.spanish || '';
    result += hundredsWord;
    num %= 100;
    if (num > 0) result += ' ';
  }
  
  // Rest
  if (num > 0) {
    const found = ALL_NUMBERS.find(n => n.value === num);
    if (found) {
      result += found.spanish;
    } else if (num >= 30) {
      const tens = Math.floor(num / 10) * 10;
      const ones = num % 10;
      const tensWord = ALL_NUMBERS.find(n => n.value === tens)?.spanish || '';
      const onesWord = ALL_NUMBERS.find(n => n.value === ones)?.spanish || '';
      result += tensWord + (ones > 0 ? ' y ' + onesWord : '');
    }
  }
  
  return result.trim();
}
