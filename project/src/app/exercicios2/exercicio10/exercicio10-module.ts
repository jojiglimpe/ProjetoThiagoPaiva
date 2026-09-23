import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Exercicio10RoutingModule } from './exercicio10-routing-module';
import { Exercicio10 } from './exercicio10';

@NgModule({
  declarations: [
    Exercicio10
  ],
  imports: [
    CommonModule,
    Exercicio10RoutingModule
  ]
})
export class Exercicio10Module {}