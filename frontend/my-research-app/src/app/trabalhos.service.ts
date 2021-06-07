import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trabalho } from './trabalhos/trabalho';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrabalhosService {

  constructor( private http: HttpClient ) { }

  salvar( trabalho: Trabalho ) : Observable<Trabalho> {
    return this.http.post<Trabalho>('http://localhost:8080/api/v1/trabalho/add',trabalho);
  }

  getTrabalho() : Trabalho {
    let trabalho : Trabalho = new Trabalho();
    trabalho.nome = 'Trabalho 1';
    trabalho.categoria = "Categoria 1";
    trabalho.tipo = "Tipo 1";
    trabalho.dataInicio = "08/12/1996";
    trabalho.dataFim = "08/12/2100";
    trabalho.descricao = "Descrição 1";
    trabalho.status = "Ativo";
    return trabalho;
  }
}
