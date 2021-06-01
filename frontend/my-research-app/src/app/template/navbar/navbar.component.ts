import { Component, OnInit } from '@angular/core';
import { faBars, faBell, faExclamationCircle, faPlus, faSearch, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faSearch = faSearch;
  faBars = faBars;
  faUser = faUser;
  faExclamationCircle = faExclamationCircle;
  faSignOutAlt = faSignOutAlt;
  faPlus = faPlus;
  faBell = faBell;

  constructor() { }

  ngOnInit(): void {
  }

}
