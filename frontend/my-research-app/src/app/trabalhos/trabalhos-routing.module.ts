import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { TrabalhosFormComponent } from './trabalhos-form/trabalhos-form.component';
import { TrabalhosListaComponent } from './trabalhos-lista/trabalhos-lista.component';

const routes: Routes = [
  { path: 'trabalhos', component: LayoutComponent, children: [
    { path: '', component: TrabalhosListaComponent},
    { path: 'cadastro', component: TrabalhosFormComponent },
    { path: ':id', component: TrabalhosFormComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrabalhosRoutingModule { }
