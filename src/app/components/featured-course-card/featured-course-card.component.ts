import { Component, Input } from '@angular/core';
import {environment} from '../../../environments/environment'
@Component({
  selector: 'app-featured-course-card',
  templateUrl: './featured-course-card.component.html',
  styleUrls: ['./featured-course-card.component.css'],
})
export class FeaturedCourseCardComponent {
  @Input() data: any;
baseUrl: any;
// environment: any;
  constructor(){
  }
  ngOnInit(): void {
    console.log(this.data);
    this.baseUrl = environment.baseUrl;
  }
}
