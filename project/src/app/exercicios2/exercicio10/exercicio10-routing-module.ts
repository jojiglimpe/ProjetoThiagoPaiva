import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Exercicio10 } from './exercicio10';

const routes: Routes = [
  {
    path: '',
    component: Exercicio10
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
export class Exercicio10RoutingModule {}