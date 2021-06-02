import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrabalhosFormComponent } from './trabalhos-form/trabalhos-form.component';

const routes: Routes = [
  { path: 'trabalhos-form', component: TrabalhosFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrabalhosRoutingModule { }
