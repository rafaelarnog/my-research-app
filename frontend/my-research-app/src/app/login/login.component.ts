import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  loginError: boolean = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService
      .tentarLogar(this.username, this.password)
      .subscribe( response => {
        const access_token = JSON.stringify(response);
        localStorage.setItem('access_token',access_token);
        this.router.navigate(['']);
      },
      errorResponse => {
        this.loginError = true;
      });
  }

}
