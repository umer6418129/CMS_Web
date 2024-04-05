import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppConst } from 'src/app/app.Const';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public router : Router){

  }
  navigateToRegisteration(){
    this.router.navigate([AppConst.MAIN_ROUTES.REGISTER]);
  }
}
