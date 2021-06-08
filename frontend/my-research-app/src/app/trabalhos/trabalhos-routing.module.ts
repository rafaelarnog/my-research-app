import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrabalhosFormComponent } from './trabalhos-form/trabalhos-form.component';
import { TrabalhosListaComponent } from './trabalhos-lista/trabalhos-lista.component';

const routes: Routes = [
  { path: 'trabalhos-form', component: TrabalhosFormComponent },
  { path: 'trabalhos-lista', component: TrabalhosListaComponent },
  { path: 'trabalhos-form/:id', component: TrabalhosFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrabalhosRoutingModule { }
