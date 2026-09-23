import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Exercicio6 } from './exercicio6';

const routes: Routes = [
  {
    path: '',
    component: Exercicio6
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
export class Exercicio6RoutingModule {}