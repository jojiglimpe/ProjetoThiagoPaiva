import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Exercicio8 } from './exercicio8';

const routes: Routes = [
  {
    path: '',
    component: Exercicio8
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
export class Exercicio8RoutingModule {}