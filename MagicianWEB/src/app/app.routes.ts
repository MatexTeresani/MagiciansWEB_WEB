import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ConseguirComponent } from './pages/conseguir/conseguir.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FondoDeEstrellasComponent } from './fondo-de-estrellas/fondo-de-estrellas.component';

export const routes: Routes = [
    {path:'' , component : HomeComponent},
    {path:'projects', component : ProjectsComponent},
    {path:'conseguir', component: ConseguirComponent},
    {path:'about', component: AboutComponent},
    {path:'contact', component: ContactComponent},
    {path:"e", component:FondoDeEstrellasComponent},
];
