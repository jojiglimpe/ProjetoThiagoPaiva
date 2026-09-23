import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Exercicio7RoutingModule } from './exercicio7-routing-module';
import { Exercicio7 } from './exercicio7';

@NgModule({
  declarations: [
    Exercicio7
  ],
  imports: [
    CommonModule,
    Exercicio7RoutingModule
  ]
})
export class Exercicio7Module {}