import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Exercicio9 } from './exercicio9';

const routes: Routes = [
  {
    path: '',
    component: Exercicio9
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
export class Exercicio9RoutingModule {}