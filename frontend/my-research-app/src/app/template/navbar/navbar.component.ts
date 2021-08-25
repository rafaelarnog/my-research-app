import { AfterViewInit, Component, OnInit } from '@angular/core';
import { faBars, faBell, faExclamationCircle, faPlus, faSearch, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';

import jQuery from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {

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

  ngAfterViewInit() {
    (function($) {
      "use strict";
  
      $('#btnSidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
    })(jQuery);
  }

}
