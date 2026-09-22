import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Exercicio1 } from './exercicios/exercicio1/exercicio1';
import { Exercicio2 } from './exercicios/exercicio2/exercicio2';
import { Exercicio3 } from './exercicios/exercicio3/exercicio3';
import { Exercicio4 } from './exercicios/exercicio4/exercicio4';
import { Exercicio5 } from './exercicios/exercicio5/exercicio5';
import { Exercicio6 } from './exercicios/exercicio6/exercicio6';
import { Exercicio7 } from './exercicios/exercicio7/exercicio7';
import { Exercicio8 } from './exercicios/exercicio8/exercicio8';
import { Exercicio9 } from './exercicios/exercicio9/exercicio9';
import { Exercicio10 } from './exercicios/exercicio10/exercicio10';

@NgModule({
  declarations: [
    App,
    Exercicio1,
    Exercicio2,
    Exercicio3,
    Exercicio4,
    Exercicio5,
    Exercicio6,
    Exercicio7,
    Exercicio8,
    Exercicio9,
    Exercicio10,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
