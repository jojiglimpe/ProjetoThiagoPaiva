import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Exercicio7 } from './exercicio7';

const routes: Routes = [
  {
    path: '',
    component: Exercicio7
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class Exercicio7RoutingModule {}