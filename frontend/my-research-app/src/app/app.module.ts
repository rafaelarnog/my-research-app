import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { TrabalhosModule } from './trabalhos/trabalhos.module';
import { TrabalhosService } from './trabalhos.service';
import { LoginModule } from './login/login.module';
import { CadastroModule } from './cadastro/cadastro.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    TrabalhosModule,
    LoginModule,
    CadastroModule
  ],
  providers: [
    TrabalhosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
