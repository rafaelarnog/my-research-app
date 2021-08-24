import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { faArrowLeft, faEdit, faSave } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { TrabalhosService } from 'src/app/trabalhos.service';
import { Trabalho } from '../trabalho';

@Component({
  selector: 'app-trabalhos-form',
  templateUrl: './trabalhos-form.component.html',
  styleUrls: ['./trabalhos-form.component.css']
})
export class TrabalhosFormComponent implements OnInit {

  faArrowLeft = faArrowLeft;
  faSave = faSave;
  faEdit = faEdit;

  trabalho: Trabalho;
  success: boolean = false;
  error: boolean = false;
  id : number;

  constructor( 
    private service: TrabalhosService,
    private router: Router,
    private activatedRoute: ActivatedRoute ) { 
    this.trabalho = new Trabalho();
  }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params;
    params.subscribe( urlParams => {
      this.id = urlParams['id'];
      if(this.id){
        this.service
        .getTrabalhoById(this.id)
        .subscribe(
          response => this.trabalho = response,
          errorResponse => this.trabalho = new Trabalho()
        );
      }
    })
  }

  onSubmit(){
    if(this.id){
      this.service
        .atualizar(this.trabalho)
        .subscribe(response => {
          this.success = true;
          this.error = false;
        }, errorResponse => {
          this.error = true;
          this.success = false;
        })
    } else{
      this.service
        .salvar(this.trabalho)
        .subscribe( response => {
          this.success = true;
          this.error = false;
        }, errorResponse => {
          this.error = true;
          this.success = false;
        })
    }
    
  }

  voltarParaListagem(){
    this.router.navigate(['/trabalhos'])
  }

}
