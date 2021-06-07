import { Component, OnInit } from '@angular/core';
import { TrabalhosService } from 'src/app/trabalhos.service';
import { Trabalho } from '../trabalho';

@Component({
  selector: 'app-trabalhos-form',
  templateUrl: './trabalhos-form.component.html',
  styleUrls: ['./trabalhos-form.component.css']
})
export class TrabalhosFormComponent implements OnInit {

  trabalho: Trabalho;
  success: boolean = false;
  error: boolean = false;

  constructor( private service: TrabalhosService ) { 
    this.trabalho = new Trabalho();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service
      .salvar(this.trabalho)
      .subscribe( response => {
        this.success = true;
        this.error = false;
      }, error => {
        console.log(error);
      })
  }

}
