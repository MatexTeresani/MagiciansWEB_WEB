import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fondo-estrellas',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './fondo-estrellas.component.html',
  styleUrl: './fondo-estrellas.component.css'
})

export class FondoEstrellasComponent implements OnInit {
  stars: { x: number; y: number; size: number }[] = [];
  totalStars = 50; // Número total de estrellas

  ngOnInit(): void {
    this.generateStars();
  }

  generateStars(): void {
    this.stars = Array.from({ length: this.totalStars }, () => ({
      x: Math.random() * 100, // Posición X en porcentaje
      y: Math.random() * 200, // Posición Y en porcentaje
      size: Math.random() * 13 + 15 // Tamaño aleatorio entre 1 y 3
    }));
  }
}
