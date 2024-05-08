import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactoListComponent } from './components/contacto-list/contacto-list.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { DetalleComponent } from './components/detalle/detalle.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'contacto', component: ContactoListComponent },
  { path: 'contacto/nuevo', component: FormularioComponent },
  { path: 'contacto/:id/editar', component: FormularioComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
