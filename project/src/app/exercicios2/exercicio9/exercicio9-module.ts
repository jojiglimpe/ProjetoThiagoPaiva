import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Exercicio9RoutingModule } from './exercicio9-routing-module';
import { Exercicio9 } from './exercicio9';

@NgModule({
  declarations: [
    Exercicio9
  ],
  imports: [
    CommonModule,
    Exercicio9RoutingModule
  ]
})
export class Exercicio9Module {}