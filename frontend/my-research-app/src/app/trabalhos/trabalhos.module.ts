import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { TrabalhosRoutingModule } from './trabalhos-routing.module';
import { TrabalhosFormComponent } from './trabalhos-form/trabalhos-form.component';


@NgModule({
  declarations: [TrabalhosFormComponent],
  imports: [
    CommonModule,
    TrabalhosRoutingModule,
    FormsModule
  ],
  exports: [
    TrabalhosFormComponent
  ]
})
export class TrabalhosModule { }
