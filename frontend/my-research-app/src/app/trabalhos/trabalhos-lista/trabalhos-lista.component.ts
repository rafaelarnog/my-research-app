import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPencilAlt, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { TrabalhosService } from 'src/app/trabalhos.service';
import { Trabalho } from '../trabalho';

@Component({
  selector: 'app-trabalhos-lista',
  templateUrl: './trabalhos-lista.component.html',
  styleUrls: ['./trabalhos-lista.component.css']
})
export class TrabalhosListaComponent implements OnInit {

  faPlus = faPlus;
  faPencilAlt = faPencilAlt;
  faTrashAlt = faTrashAlt;

  trabalhos: Trabalho[] = [];
  trabalhoSelecionado: Trabalho;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor( 
    private service: TrabalhosService,
    private router: Router 
    ) {
    
  }

  ngOnInit(): void {
    this.service
      .getTrabalhos()
      .subscribe( response => this.trabalhos = response );
  }

  novoCadastro(){
    this.router.navigate(['/trabalhos-form']);
  }

  preparaDelecao(trabalho: Trabalho){
    this.trabalhoSelecionado = trabalho;
  }

  deletarTrabalho(){
    this.service
      .deletar(this.trabalhoSelecionado)
      .subscribe(
        response => {
          this.mensagemSucesso = 'Trabalho deletado com sucesso!';
          this.ngOnInit();
        },
        erro => this.mensagemErro = 'Ocorreu um erro ao deletar o trabalho.'
      )
  }

}
