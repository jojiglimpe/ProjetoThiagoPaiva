import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exercicio4 } from './exercicio4';

const routes: Routes = [
  {
    path: '',
    component: Exercicio4
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Exercicio4RoutingModule {}