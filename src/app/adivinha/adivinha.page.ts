import { Component } from '@angular/core';

@Component({
  selector: 'app-adivinha',
  templateUrl: './adivinha.page.html',
  styleUrls: ['./adivinha.page.scss'],
  standalone: false
})
export class AdivinhaPage {
  escolhaUsuario: number = 0;
  numeroComputador: number = 0;
  resultado: string = '';

  jogar() {
    this.numeroComputador = Math.floor(Math.random() * 3) + 1;

    const usuario = +this.escolhaUsuario;
    const computador = this.numeroComputador;

    if (usuario === computador) {
      this.resultado = `🤝 Empate! A escolha foi ${this.getNomeEscolha(usuario)}`;
    } else if (
      (usuario === 1 && computador === 3) || 
      (usuario === 2 && computador === 1) || 
      (usuario === 3 && computador === 2)    
    ) {
      this.resultado = `✅ Você venceu! ${this.getNomeEscolha(usuario)} vence ${this.getNomeEscolha(computador)}`;
    } else {
      this.resultado = `❌ Computador venceu! ${this.getNomeEscolha(computador)} vence ${this.getNomeEscolha(usuario)}`;
    }
  }

  getNomeEscolha(num: number): string {
    switch (num) {
      case 1: return 'Pedra';
      case 2: return 'Papel';
      case 3: return 'Tesoura';
      default: return '';
    }
  }
}
