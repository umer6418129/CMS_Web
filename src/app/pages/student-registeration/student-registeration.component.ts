import { Component, HostListener } from '@angular/core';
import { ArraysService } from 'src/app/services/arrays.service';
import { CourseService } from 'src/app/services/course.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-registeration',
  templateUrl: './student-registeration.component.html',
  styleUrls: ['./student-registeration.component.css'],
})
export class StudentRegisterationComponent {
  public genders: any;
  public courses: any;
  registerObj: any = {
    name: '',
    email: '',
    std_father_name: '',
    std_mother_name: '',
    std_date_of_birth: '',
    Gender: '',
    std_residential_address: '',
    std_permanent_address: '',
    course_id: '',
    profile_image: '',
  };
  constructor(
    public arrayService: ArraysService,
    public courseService: CourseService,
    public studentService: StudentService
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
    
    try {
      // const formData = new FormData()
      // formData.append('file_upload', this.registerObj.profile_image);
      // formData.append('JsonString', this.registerObj);
      this.studentService.studentRegistration(this.registerObj).then((res)=>{
        if (res.status == 1) {
          console.log("uploaded");
        }
      })
    } catch (error) {
      console.log(error);
    }
  }

  changeValueOfImage(val: any) {
    if (val.profileImage != null) {
      this.registerObj.profile_image = val.profileImage;
    }
  }
}
