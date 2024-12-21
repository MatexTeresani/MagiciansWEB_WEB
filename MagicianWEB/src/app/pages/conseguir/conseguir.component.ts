import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-conseguir',
  standalone: true,
  imports: [],
  templateUrl: './conseguir.component.html',
  styleUrl: './conseguir.component.css'
})
export class ConseguirComponent {

  constructor(private router: Router) {}


  Enviar(){
     this.router.navigate(['consigue-terminado']); // Navega a la ruta raíz


  }
}
