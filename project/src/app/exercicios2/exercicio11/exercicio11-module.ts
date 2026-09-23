import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Exercicio11RoutingModule } from './exercicio11-routing-module';
import { Exercicio11 } from './exercicio11';

@NgModule({
  declarations: [
    Exercicio11
  ],
  imports: [
    CommonModule,
    Exercicio11RoutingModule
  ]
})
export class Exercicio11Module {}