import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Usuario } from '../login/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  username: string = "";
  password: string = "";
  passwordConfirmar: string = ""; 
  cadastroError: boolean = false;
  sucesso: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  cadastrar() {
    var usuario = new Usuario();
    usuario.username = this.username;
    usuario.password = this.password;
    this.authService
      .cadastrar(usuario)
      .subscribe( response => {
        this.sucesso = true;
      },
      error => {
        this.cadastroError = true;
      })
  }

}
