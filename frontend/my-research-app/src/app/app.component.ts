import { Component } from '@angular/core';

import jQuery from 'jquery'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-research-app';

  ngAfterViewInit(){
    (function($) {
        "use strict";
    
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
        });
    })(jQuery);
  }
}
