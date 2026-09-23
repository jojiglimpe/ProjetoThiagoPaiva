import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DesafioFinal } from './desafio-final';

const routes: Routes = [
  {
    path: '',
    component: DesafioFinal
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
export class DesafioFinalRoutingModule {}