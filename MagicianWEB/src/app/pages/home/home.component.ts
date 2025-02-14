import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { relative } from 'path';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  constructor(private router: Router) {}


  consiquehref(){
     this.router.navigate(['conseguir']).then(() => {
      window.scrollTo(0, 0);
     }); // Navega a la ruta raíz


  }
}
