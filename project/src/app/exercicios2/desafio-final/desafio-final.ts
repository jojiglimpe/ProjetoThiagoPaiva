import { Component } from '@angular/core';

interface Projeto {
  id: number;
  titulo: string;
  equipe: string;
  nota: number | null;
  status: 'planejamento' | 'desenvolvimento' | 'testes' | 'concluído';
  entregue: boolean;
}

@Component({
  selector: 'app-desafio-final',
  standalone: false,
  templateUrl: './desafio-final.html',
  styleUrl: './desafio-final.scss'
})
export class DesafioFinal {

  ocultarConcluidos = false;

  projetos: Projeto[] = [
    {
      id: 1,
      titulo: 'Sistema de Biblioteca',
      equipe: 'Equipe Alpha',
      nota: 8.5,
      status: 'concluído',
      entregue: true
    },
    {
      id: 2,
      titulo: 'Aplicativo de Tarefas',
      equipe: 'Equipe Beta',
      nota: 5.5,
      status: 'testes',
      entregue: false
    },
    {
      id: 3,
      titulo: 'Sistema de Estoque',
      equipe: 'Equipe Gamma',
      nota: 7,
      status: 'desenvolvimento',
      entregue: false
    },
    {
      id: 4,
      titulo: 'Portal Escolar',
      equipe: 'Equipe Delta',
      nota: null,
      status: 'planejamento',
      entregue: false
    },
    {
      id: 5,
      titulo: 'Loja Virtual',
      equipe: 'Equipe Omega',
      nota: 9,
      status: 'concluído',
      entregue: true
    }
  ];

  get projetosVisiveis(): Projeto[] {
    if (this.ocultarConcluidos) {
      return this.projetos.filter(
        projeto => projeto.status !== 'concluído'
      );
    }

    return this.projetos;
  }

  alterarExibicao() {
    this.ocultarConcluidos = !this.ocultarConcluidos;
  }

  alterarStatus(projeto: Projeto) {
    if (projeto.status === 'planejamento') {
      projeto.status = 'desenvolvimento';
    } else if (projeto.status === 'desenvolvimento') {
      projeto.status = 'testes';
    } else if (projeto.status === 'testes') {
      projeto.status = 'concluído';
    } else {
      projeto.status = 'planejamento';
    }
  }

  totalConcluidos() {
    return this.projetos.filter(
      projeto => projeto.status === 'concluído'
    ).length;
  }
}