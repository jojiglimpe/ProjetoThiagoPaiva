import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'livros',
    loadChildren: () =>
      import('./livros/livros-module').then(m => m.LivrosModule)
  },
  {
    path: 'exercicio1',
    loadChildren: () =>
      import('./exercicios2/exercicio1/exercicio1-module').then(m => m.Exercicio1Module)
  },
  {
    path: 'exercicio2',
    loadChildren: () =>
      import('./exercicios2/exercicio2/exercicio2-module').then(m => m.Exercicio2Module)
  },
  {
    path: 'exercicio3',
    loadChildren: () =>
      import('./exercicios2/exercicio3/exercicio3-module').then(m => m.Exercicio3Module)
  },
  {
    path: 'exercicio4',
    loadChildren: () =>
      import('./exercicios2/exercicio4/exercicio4-module').then(m => m.Exercicio4Module)
  },
  {
    path: 'exercicio5',
    loadChildren: () =>
      import('./exercicios2/exercicio5/exercicio5-module').then(m => m.Exercicio5Module)
  },
  {
    path: 'exercicio6',
    loadChildren: () =>
      import('./exercicios2/exercicio6/exercicio6-module').then(m => m.Exercicio6Module)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}