import { Component } from '@angular/core';

interface Tarefa {
  id: number;
  titulo: string;
  responsavel: string;
  prioridade: 'baixa' | 'media' | 'alta';
  concluida: boolean;
}

@Component({
  selector: 'app-exercicio13',
  standalone: false,
  templateUrl: './exercicio13.html',
  styleUrl: './exercicio13.scss'
})
export class Exercicio13 {

  tarefas: Tarefa[] = [
    {
      id: 1,
      titulo: 'Criar tela de login',
      responsavel: 'Lorenzo',
      prioridade: 'alta',
      concluida: false
    },
    {
      id: 2,
      titulo: 'Configurar banco',
      responsavel: 'Yuri',
      prioridade: 'alta',
      concluida: true
    },
    {
      id: 3,
      titulo: 'Criar menu',
      responsavel: 'Theo',
      prioridade: 'media',
      concluida: false
    },
    {
      id: 4,
      titulo: 'Testar sistema',
      responsavel: 'Isaque',
      prioridade: 'media',
      concluida: true
    },
    {
      id: 5,
      titulo: 'Criar documentação',
      responsavel: 'Caio',
      prioridade: 'baixa',
      concluida: false
    },
    {
      id: 6,
      titulo: 'Revisar interface',
      responsavel: 'Yuri',
      prioridade: 'baixa',
      concluida: false
    }
  ];

  alterarSituacao(tarefa: Tarefa) {
    tarefa.concluida = !tarefa.concluida;
  }

  totalConcluidas() {
    return this.tarefas.filter(tarefa => tarefa.concluida).length;
  }

  totalPendentes() {
    return this.tarefas.filter(tarefa => !tarefa.concluida).length;
  }
}