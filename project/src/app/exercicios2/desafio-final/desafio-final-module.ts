import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesafioFinalRoutingModule } from './desafio-final-routing-module';
import { DesafioFinal } from './desafio-final';

@NgModule({
  declarations: [
    DesafioFinal
  ],
  imports: [
    CommonModule,
    DesafioFinalRoutingModule
  ]
})
export class DesafioFinalModule {}