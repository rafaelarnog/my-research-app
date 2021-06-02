import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrabalhosRoutingModule } from './trabalhos-routing.module';
import { TrabalhosFormComponent } from './trabalhos-form/trabalhos-form.component';


@NgModule({
  declarations: [TrabalhosFormComponent],
  imports: [
    CommonModule,
    TrabalhosRoutingModule
  ],
  exports: [
    TrabalhosFormComponent
  ]
})
export class TrabalhosModule { }
