import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import {MenubarModule} from 'primeng/menubar';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    MenubarModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent
  ]
})
export class TemplateModule { }
