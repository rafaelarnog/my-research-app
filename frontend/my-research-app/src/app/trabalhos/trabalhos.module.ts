import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { TrabalhosRoutingModule } from './trabalhos-routing.module';
import { TrabalhosFormComponent } from './trabalhos-form/trabalhos-form.component';
import { TrabalhosListaComponent } from './trabalhos-lista/trabalhos-lista.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [TrabalhosFormComponent, TrabalhosListaComponent],
  imports: [
    CommonModule,
    TrabalhosRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  exports: [
    TrabalhosFormComponent
  ]
})
export class TrabalhosModule { }
