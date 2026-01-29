import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { QuizService } from '../services/quiz.service';

export const bodyPartsQuizGuard: CanActivateFn = () => {
  const quizService = inject(QuizService);
  quizService.setConfig({
    tags: ['head-part', 'body-part'],
    numberOfQuestions: 20
  });
  return true;
};

export const colorsQuizGuard: CanActivateFn = () => {
  const quizService = inject(QuizService);
  quizService.setConfig({
    tags: ['color'],
    numberOfQuestions: 20
  });
  return true;
};

export const timeQuizGuard: CanActivateFn = () => {
  const quizService = inject(QuizService);
  quizService.setConfig({
    tags: ['day-of-week', 'month'],
    numberOfQuestions: 20
  });
  return true;
};

export const chapter5QuizGuard: CanActivateFn = () => {
  const quizService = inject(QuizService);
  quizService.setConfig({
    words: ['aprender', 'pagar', 'mirar', 'decidir', 'salir', 'tomar', 'escribir', 'comprar', 'invitar', 'encontrar', 'buscar', 'ir', 'hablar', 'acostarse', 'comer'],
    tenses: ['preterite', 'imperfect'],
    numberOfQuestions: 20
  });
  return true;
};
