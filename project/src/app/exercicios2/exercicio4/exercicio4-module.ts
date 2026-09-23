import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Exercicio4RoutingModule } from './exercicio4-routing-module';
import { Exercicio4 } from './exercicio4';

@NgModule({
  declarations: [
    Exercicio4
  ],
  imports: [
    CommonModule,
    Exercicio4RoutingModule
  ]
})
export class Exercicio4Module {}