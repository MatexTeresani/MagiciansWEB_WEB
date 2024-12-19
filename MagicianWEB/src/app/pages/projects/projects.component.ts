import { Component } from '@angular/core';

@Component({
  	selector: 'app-projects',
  	standalone: true,
  	imports: [],
  	templateUrl: './projects.component.html',
  	styleUrl: './projects.component.css'
})
export class ProjectsComponent {
	ngAfterViewInit(): void {
		const cards = document.querySelectorAll('.card') as NodeListOf<HTMLElement>;

		// Agrega un event listener para cada carta
		cards.forEach((card: HTMLElement): void => {
			card.addEventListener('click', () => {
				// Quita la clase 'active' de todas las cartas
				cards.forEach((c: HTMLElement) => c.classList.remove('active'));

				// Añade la clase 'active' a la carta clickeada
				card.classList.add('active');
			});
		});
	}
}
