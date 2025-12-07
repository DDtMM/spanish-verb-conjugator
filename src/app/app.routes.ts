import { Routes } from '@angular/router';

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
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
