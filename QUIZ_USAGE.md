# Quiz Component

The Quiz component allows users to test their knowledge of Spanish nouns, verbs, and adjectives.

## Usage

Navigate to the quiz page with query parameters:

### Parameters

- `words` (required): Comma-separated list of words to test
- `tense` (optional): For verbs, specify the tense (present, preterite, imperfect). Default is 'present'

### Example URLs

**Test specific nouns:**
```
/quiz?words=casa,perro,gato
```

**Test specific verbs in present tense:**
```
/quiz?words=hablar,comer,vivir&tense=present
```

**Test verbs in preterite:**
```
/quiz?words=ir,ser,tener&tense=preterite
```

**Mix of words:**
```
/quiz?words=casa,hablar,grande,perro&tense=present
```

## Question Types

### Nouns
- Basic questions with 4 choices
- Shows gender
- Example: "What is the Spanish word for 'house'?"
  - casa (feminine) ✓
  - perro (masculine)
  - gato (masculine)
  - árbol (masculine)

### Adjectives
- Basic questions with 4 choices
- Asks for specific form (masculine/feminine, singular/plural)
- Example: "What is the feminine singular form of 'beautiful'?"
  - hermosa ✓
  - hermoso
  - alto
  - alta

### Verbs
- Advanced questions with 8 choices
- Includes pronoun conjugation
- 8 options from 4 verbs (2 conjugations each)
- Example: "What word means 'I speak'? (present)"
  - hablo ✓
  - hablas
  - como
  - comes
  - vivo
  - vives
  - escribo
  - escribes

## Features

- **Progress tracking**: Shows current question number and progress bar
- **Immediate feedback**: Shows if answer is correct/incorrect
- **Correct answer display**: Shows the right answer when wrong
- **Retry incorrect**: After completing, retry only the questions you got wrong
- **Score summary**: Final score with percentage
- **Restart option**: Start the quiz again with shuffled questions
