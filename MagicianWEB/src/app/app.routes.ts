import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ConseguirComponent } from './pages/conseguir/conseguir.component';
import { FondoEstrellasComponent } from './pages/fondo-estrellas/fondo-estrellas.component';
import { ConstruccionComponent } from './pages/construccion/construccion.component';

export const routes: Routes = [
    {path:'' , component : HomeComponent},
    {path:'projects', component : ProjectsComponent},
    {path:'conseguir', component: ConseguirComponent},
    {path:"e", component:FondoEstrellasComponent},
    {path:'construccion', component:ConstruccionComponent},
];
