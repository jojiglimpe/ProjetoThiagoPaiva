import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

interface Pessoa {
  id: number;
  nome: string;
}

@Component({
  selector: 'app-exercicio14',
  standalone: false,
  templateUrl: './exercicio14.html',
  styleUrl: './exercicio14.scss'
})
export class Exercicio14 {

  usuarioLogado = false;

  nomes: Pessoa[] = [
    { id: 1, nome: 'Lorenzo' },
    { id: 2, nome: 'Yuri' },
    { id: 3, nome: 'Theo' },
    { id: 4, nome: 'Isaque' },
    { id: 5, nome: 'Caio' }
  ];

  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Teclado',
      preco: 150,
      quantidade: 5
    },
    {
      id: 2,
      nome: 'Mouse',
      preco: 80,
      quantidade: 8
    },
    {
      id: 3,
      nome: 'Monitor',
      preco: 900,
      quantidade: 3
    },
    {
      id: 4,
      nome: 'Headset',
      preco: 250,
      quantidade: 4
    },
    {
      id: 5,
      nome: 'Webcam',
      preco: 200,
      quantidade: 6
    }
  ];

  alternarLogin() {
    this.usuarioLogado = !this.usuarioLogado;
  }

  removerUltimo() {
    if (this.nomes.length > 0) {
      this.nomes.pop();
    }
  }

  limparLista() {
    this.nomes = [];
  }

  restaurarLista() {
    this.nomes = [
      { id: 1, nome: 'Lorenzo' },
      { id: 2, nome: 'Yuri' },
      { id: 3, nome: 'Theo' },
      { id: 4, nome: 'Isaque' },
      { id: 5, nome: 'Caio' }
    ];
  }
}