import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Exercicio3RoutingModule } from './exercicio3-routing-module';
import { Exercicio3 } from './exercicio3';

@NgModule({
  declarations: [
    Exercicio3
  ],
  imports: [
    CommonModule,
    Exercicio3RoutingModule
  ]
})
export class Exercicio3Module {}