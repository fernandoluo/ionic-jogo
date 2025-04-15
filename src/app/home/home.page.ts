import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  numeros: number[] = [];
  limite: number = 0;

  constructor(private router: Router) {}

  ionViewWillEnter() {
    this.router.navigate(['/adivinha']);
  }

  gerarNumeros() {
    this.numeros = [];
    let i = 1;
    while (i <= this.limite) {
      this.numeros.push(i);
      i++;
    }
  }
}
