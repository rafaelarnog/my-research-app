import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  cadastrar() {
    console.log('Username: '+this.username+" Password: "+this.password+" Password confirmar: "+this.passwordConfirmar);
  }

}
