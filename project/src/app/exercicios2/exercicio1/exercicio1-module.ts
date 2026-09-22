import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Exercicio1RoutingModule } from './exercicio1-routing-module';
import { Exercicio1 } from './exercicio1';

@NgModule({
  declarations: [Exercicio1],
  imports: [CommonModule, Exercicio1RoutingModule],
})
export class Exercicio1Module {}
