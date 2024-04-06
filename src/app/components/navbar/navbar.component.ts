import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppConst } from 'src/app/app.Const';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  public navItems: any[] = [];
  constructor(public navservice: NavService,public router : Router) {
    this.navItems = this.navservice.MENUITEMS;
  }
  navigate(path:any){
    this.router.navigate([path]);
  }
  navigateToDepart(id : number){
    this.router.navigate([AppConst.MAIN_ROUTES.DEPARTMENT + "/" + id]);
  }
}
