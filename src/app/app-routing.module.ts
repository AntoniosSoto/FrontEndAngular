import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactoListComponent } from './components/contacto-list/contacto-list.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'contacto', component: ContactoListComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
