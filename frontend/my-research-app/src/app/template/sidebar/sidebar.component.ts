import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBook, faHome, faUsers } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  faHome = faHome;
  faBook = faBook;
  faUsers = faUsers;
  usuarioLogado: string = "";

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.usuarioLogado = this.authService.getUsuarioAutenticado();
  }

  logout() {
    this.authService.encerrarSessao();
    this.router.navigate(['/login']);
  }

}
