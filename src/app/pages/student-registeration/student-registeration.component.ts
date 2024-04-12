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
  registerObj: any = {
    id: -1,
    name: '',
    email: '',
    std_father_name: '',
    std_mother_name: '',
    std_date_of_birth: '',
    Gender: '',
    course_id: '',
    std_residential_address: '',
    std_permanent_address: '',
    profile_image: '',
  };
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

  submitForm() {
    console.log(this.registerObj);
  }

  changeValueOfImage(val: any) {
    if (val.profileImage != null) {
      this.registerObj.profile_image = val.profileImage;
    }
  }
}
