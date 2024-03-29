import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CMS_Web';
  constructor(
    private router: Router,
    private ngxService: NgxUiLoaderService
  ){
    this.router.events.subscribe((evt) => {
      this.ngxService.start();
        if (!(evt instanceof NavigationEnd)) {
          this.ngxService.stop();
          return;
        }
      window.scrollTo(0, 0);
    });
  }
}
