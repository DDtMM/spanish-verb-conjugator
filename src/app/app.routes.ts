import { Routes } from '@angular/router';
import { bodyPartsQuizGuard, colorsQuizGuard, timeQuizGuard, chapter5QuizGuard } from './guards/quiz.guards';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/layout.component').then(m => m.LayoutComponent),
    title: 'Home',
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'present-tense',
        title: 'Present Tense',
        loadComponent: () => import('./pages/present-tense.component').then(m => m.PresentTenseComponent)
      },
      {
        path: 'preterite',
        title: 'Preterite Tense',
        loadComponent: () => import('./pages/preterite.component').then(m => m.PreteriteComponent)
      },
      {
        path: 'imperfect',
        title: 'Imperfect Tense',
        loadComponent: () => import('./pages/imperfect.component').then(m => m.ImperfectComponent)
      },
      {
        path: 'sentence-generator',
        title: 'Sentence Generator',
        loadComponent: () => import('./pages/sentence-generator.component').then(m => m.SentenceGeneratorComponent)
      },
      {
        path: 'nationality-quiz',
        title: 'Nationality Quiz',
        loadComponent: () => import('./pages/nationality-quiz.component').then(m => m.NationalityQuizComponent)
      },
      {
        path: 'quiz',
        title: 'Quiz',
        loadComponent: () => import('./pages/quiz.component').then(m => m.QuizComponent)
      },
      {
        path: 'chapter5-quiz',
        title: 'Chapter 5 Quiz',
        canActivate: [chapter5QuizGuard],
        loadComponent: () => import('./pages/quiz.component').then(m => m.QuizComponent)
      },
      {
        path: 'numbers',
        title: 'Numbers',
        loadComponent: () => import('./pages/numbers.component').then(m => m.NumbersComponent)
      },
      {
        path: 'body-parts-tutorial',
        title: 'Parts of the Body',
        loadComponent: () => import('./pages/body-parts-tutorial.component').then(m => m.BodyPartsTutorialComponent)
      },
      {
        path: 'parts-of-face',
        redirectTo: 'body-parts-tutorial'
      },
      {
        path: 'dates-days-explained',
        title: 'Dates & Days Explained',
        loadComponent: () => import('./pages/dates-days-explained.component').then(m => m.DatesAndDaysExplainedComponent)
      },
      {
        path: 'time-quiz',
        title: 'Time Quiz',
        canActivate: [timeQuizGuard],
        loadComponent: () => import('./pages/quiz.component').then(m => m.QuizComponent)
      },
      {
        path: 'body-parts-quiz',
        title: 'Body Parts Quiz',
        canActivate: [bodyPartsQuizGuard],
        loadComponent: () => import('./pages/quiz.component').then(m => m.QuizComponent)
      },
      {
        path: 'head-parts-quiz',
        redirectTo: 'body-parts-quiz'
      },
      {
        path: 'colors-explained',
        title: 'Colors in Spanish',
        loadComponent: () => import('./pages/colors-explained.component').then(m => m.ColorsExplainedComponent)
      },
      {
        path: 'colors-quiz',
        title: 'Colors Quiz',
        canActivate: [colorsQuizGuard],
        loadComponent: () => import('./pages/quiz.component').then(m => m.QuizComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
