import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Exercicio13 } from './exercicio13';

const routes: Routes = [
  {
    path: '',
    component: Exercicio13
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
export class Exercicio13RoutingModule {}