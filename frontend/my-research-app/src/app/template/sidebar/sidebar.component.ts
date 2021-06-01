import { Component, OnInit } from '@angular/core';
import { faBook, faHome, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  faHome = faHome;
  faBook = faBook;
  faUsers = faUsers;

  constructor() { }

  ngOnInit(): void {
  }

}
