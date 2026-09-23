import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Exercicio12 } from './exercicio12';

const routes: Routes = [
  {
    path: '',
    component: Exercicio12
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
export class Exercicio12RoutingModule {}