import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exercicio2 } from './exercicio2';

const routes: Routes = [
  {
    path: '',
    component: Exercicio2
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Exercicio2RoutingModule {}