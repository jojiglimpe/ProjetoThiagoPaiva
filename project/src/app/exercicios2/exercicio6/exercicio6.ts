import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio6',
  standalone: false,
  templateUrl: './exercicio6.html',
  styleUrl: './exercicio6.scss'
})
export class Exercicio6 {

  listaInicial = [
    'Lorenzo',
    'Yuri',
    'Theo',
    'Isaque',
    'Caio'
  ];

  nomes = [...this.listaInicial];

  removerUltimo() {
    if (this.nomes.length > 0) {
      this.nomes.pop();
    }
  }

  limparLista() {
    this.nomes = [];
  }

  restaurarLista() {
    this.nomes = [...this.listaInicial];
  }
}