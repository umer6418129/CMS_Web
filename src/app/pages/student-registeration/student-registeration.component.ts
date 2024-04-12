import { Component, HostListener } from '@angular/core';
import { ArraysService } from 'src/app/services/arrays.service';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-student-registeration',
  templateUrl: './student-registeration.component.html',
  styleUrls: ['./student-registeration.component.css'],
})
export class StudentRegisterationComponent {
  public genders: any;
  public courses: any;
  constructor(
    public arrayService: ArraysService,
    public courseService: CourseService
  ) {
    this.genders = this.arrayService.genders;
    this.getCourses();
  }

  getCourses() {
    this.courseService.getCourses().then((res) => {
      if (res.status == 1) {
        this.courses = res.data;
      }
    });
  }
}
