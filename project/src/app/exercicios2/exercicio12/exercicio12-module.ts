import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Exercicio12RoutingModule } from './exercicio12-routing-module';
import { Exercicio12 } from './exercicio12';

@NgModule({
  declarations: [
    Exercicio12
  ],
  imports: [
    CommonModule,
    FormsModule,
    Exercicio12RoutingModule
  ]
})
export class Exercicio12Module {}