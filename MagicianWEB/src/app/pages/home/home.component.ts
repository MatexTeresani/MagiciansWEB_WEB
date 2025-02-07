import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { relative } from 'path';
import { ConseguirComponent } from "../conseguir/conseguir.component";
import { AboutUsComponent } from './about-us/about-us.component';
import { ConseguirPaginaComponent } from './conseguir-pagina/conseguir-pagina.component';
import { MagicianLogoComponent } from './magician-logo/magician-logo.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MagicianLogoComponent,
    ConseguirPaginaComponent,
    AboutUsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

}
