import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Exercicio8RoutingModule } from './exercicio8-routing-module';
import { Exercicio8 } from './exercicio8';

@NgModule({
  declarations: [
    Exercicio8
  ],
  imports: [
    CommonModule,
    Exercicio8RoutingModule
  ]
})
export class Exercicio8Module {}