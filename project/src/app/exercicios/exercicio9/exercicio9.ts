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