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

  constructor(private router: Router) {
    
  }

  
  Enviar(){

    const nombre = document.getElementById('nombre') as HTMLInputElement;
    const apellido = document.getElementById('apellido') as HTMLInputElement;
    const email = document.getElementById('email') as HTMLInputElement;
    const telefono = document.getElementById('telefono') as HTMLInputElement;
    const empresa = document.getElementById('empresa') as HTMLInputElement;
    const detalle = document.getElementById('detalles') as HTMLTextAreaElement;

    if (nombre.value == "" || apellido.value == "" || email.value == "" || telefono.value == "" || empresa.value == "" || detalle.value == "") {
      
      alert("Por favor, complete todos los campos");
      return;

    }
    else{

    

     this.router.navigate(['consigue-terminado']).then(() => {
      window.scrollTo(0, 0);
     }); // Navega a la ruta raíz

     console.log("Enviado");

    }
  }  
}
