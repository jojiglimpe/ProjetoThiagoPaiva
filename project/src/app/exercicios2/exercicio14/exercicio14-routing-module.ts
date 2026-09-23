import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Exercicio14 } from './exercicio14';

const routes: Routes = [
  {
    path: '',
    component: Exercicio14
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
export class Exercicio14RoutingModule {}