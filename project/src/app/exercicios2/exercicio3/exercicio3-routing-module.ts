import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exercicio3 } from './exercicio3';

const routes: Routes = [
  {
    path: '',
    component: Exercicio3
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Exercicio3RoutingModule {}