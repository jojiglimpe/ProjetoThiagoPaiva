import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Exercicio1 } from './exercicios/exercicio1/exercicio1';
import { Exercicio2 } from './exercicios/exercicio2/exercicio2';
import { Exercicio3 } from './exercicios/exercicio3/exercicio3';
import { Exercicio4 } from './exercicios/exercicio4/exercicio4';
import { Exercicio5 } from './exercicios/exercicio5/exercicio5';

@NgModule({
  declarations: [App, Exercicio1, Exercicio2, Exercicio3, Exercicio4, Exercicio5],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
