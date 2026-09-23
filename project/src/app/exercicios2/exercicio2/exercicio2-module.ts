import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Exercicio2RoutingModule } from './exercicio2-routing-module';
import { Exercicio2 } from './exercicio2';

@NgModule({
  declarations: [
    Exercicio2
  ],
  imports: [
    CommonModule,
    Exercicio2RoutingModule
  ]
})
export class Exercicio2Module {}