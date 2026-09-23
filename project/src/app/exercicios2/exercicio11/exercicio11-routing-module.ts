import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Exercicio11 } from './exercicio11';

const routes: Routes = [
  {
    path: '',
    component: Exercicio11
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
export class Exercicio11RoutingModule {}