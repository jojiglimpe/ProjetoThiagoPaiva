import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  quantidade: number;
}

@Component({
  selector: 'app-exercicio12',
  standalone: false,
  templateUrl: './exercicio12.html',
  styleUrl: './exercicio12.scss'
})
export class Exercicio12 {

  nome = '';
  quantidade: number | null = null;
  mensagemErro = '';

  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Teclado',
      quantidade: 5
    },
    {
      id: 2,
      nome: 'Mouse',
      quantidade: 3
    }
  ];

  cadastrar() {
    if (this.nome.trim() === '') {
      this.mensagemErro = 'Preencha o nome do produto.';
      return;
    }

    if (this.quantidade === null || this.quantidade < 0) {
      this.mensagemErro = 'Informe uma quantidade válida.';
      return;
    }

    const novoProduto: Produto = {
      id: this.produtos.length > 0
        ? Math.max(...this.produtos.map(produto => produto.id)) + 1
        : 1,
      nome: this.nome,
      quantidade: this.quantidade
    };

    this.produtos.push(novoProduto);

    this.nome = '';
    this.quantidade = null;
    this.mensagemErro = '';
  }

  excluir(id: number) {
    this.produtos = this.produtos.filter(produto => produto.id !== id);
  }
}