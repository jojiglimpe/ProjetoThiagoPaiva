import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio9',
  standalone: false,
  templateUrl: './exercicio9.html',
  styleUrl: './exercicio9.scss',
})
export class Exercicio9 {
  nomeProduto = 'Mouse';
  estoque = 0;

  aumentar() {
    this.estoque++;
  }

  diminuir() {
    if (this.estoque > 0) {
      this.estoque--;
    }
  }
}