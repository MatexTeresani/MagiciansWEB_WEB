import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ConseguirComponent } from './pages/conseguir/conseguir.component';
import { FondoDeEstrellasComponent } from './fondo-de-estrellas/fondo-de-estrellas.component';
import { Header2Component } from './shared/header2/header2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  
  
  imports: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    ConseguirComponent, 
    FooterComponent,
    HeaderComponent,
    Header2Component,
    FondoDeEstrellasComponent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'MagicianWeb';
}
