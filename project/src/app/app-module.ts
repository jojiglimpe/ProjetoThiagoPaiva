import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Exercicio1 } from './exercicios/exercicio1/exercicio1';
import { Exercicio2 } from './exercicios/exercicio2/exercicio2';

@NgModule({
  declarations: [App, Exercicio1, Exercicio2],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
