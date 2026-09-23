import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Exercicio5 } from './exercicio5';

const routes: Routes = [
  {
    path: '',
    component: Exercicio5
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
export class Exercicio5RoutingModule {}