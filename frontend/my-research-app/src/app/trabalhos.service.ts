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

  atualizar( trabalho: Trabalho ) : Observable<any> {
    return this.http.put<Trabalho>(`http://localhost:8080/api/v1/trabalho/edit/${trabalho.id}`, trabalho);
  }

  getTrabalhos() : Observable<Trabalho[]> {
    return this.http.get<Trabalho[]>('http://localhost:8080/api/v1/trabalho');
  }

  getTrabalhoById(id: number) : Observable<Trabalho> {
    return this.http.get<any>(`http://localhost:8080/api/v1/trabalho/${id}`);
  }

  deletar(trabalho: Trabalho) : Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/v1/trabalho/remove/${trabalho.id}`);
  }
}
