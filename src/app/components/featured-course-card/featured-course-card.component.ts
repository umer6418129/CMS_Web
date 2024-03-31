import { Component, Input } from '@angular/core';
import {environment} from '../../../environments/environment'
import { AppConst } from 'src/app/app.Const';
import { Router } from '@angular/router';
@Component({
  selector: 'app-featured-course-card',
  templateUrl: './featured-course-card.component.html',
  styleUrls: ['./featured-course-card.component.css'],
})
export class FeaturedCourseCardComponent {
  @Input() data: any;
baseUrl: any;
// environment: any;
  constructor(public router : Router){
  }
  ngOnInit(): void {
    console.log(this.data);
    this.baseUrl = environment.baseUrl;
  }

  navigateToDetails(id:any){
    this.router.navigate([AppConst.MAIN_ROUTES.COURSES + "/" + AppConst.MAIN_ROUTES.DETAILS + "/" + id])
  }
}
