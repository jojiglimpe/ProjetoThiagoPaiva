import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Exercicio5RoutingModule } from './exercicio5-routing-module';
import { Exercicio5 } from './exercicio5';

@NgModule({
  declarations: [
    Exercicio5
  ],
  imports: [
    CommonModule,
    Exercicio5RoutingModule
  ]
})
export class Exercicio5Module {}