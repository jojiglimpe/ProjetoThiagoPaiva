import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Exercicio13RoutingModule } from './exercicio13-routing-module';
import { Exercicio13 } from './exercicio13';

@NgModule({
  declarations: [
    Exercicio13
  ],
  imports: [
    CommonModule,
    Exercicio13RoutingModule
  ]
})
export class Exercicio13Module {}