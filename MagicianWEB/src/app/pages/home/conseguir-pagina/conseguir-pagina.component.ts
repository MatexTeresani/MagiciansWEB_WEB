import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conseguir-pagina',
  standalone: true,
  templateUrl: './conseguir-pagina.component.html',
  styleUrl: './conseguir-pagina.component.css'
})

export class ConseguirPaginaComponent {

  constructor(private router: Router) {}


  consiguehref(){
     this.router.navigate(['conseguir']).then(() => {
      window.scrollTo(0, 0);
     }); // Navega a la ruta raíz


  }
}
