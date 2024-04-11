import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppConst } from 'src/app/app.Const';
import { CourseService } from 'src/app/services/course.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent {
  courseName: any = '';
  id: any;
  feedbackObj: any = {
    id: 0,
    std_id: '',
    courseId: 0,
    description: '',
  };
  data: any = {
    id: -1,
    course_name: '',
    description: null,
    is_available: true,
    displayImage: '',
    reviewsCount: 0,
    stdCount: 0,
    category: null,
    subjects: [],
    reviews: [],
  };
  bannerData: any = {
    pageTitle: 'Courses',
    bgImg: 'assets/images/page-banner-2.jpg',
    breadcrumbValue: '',
  };
  baseUrl: any;

  constructor(
    public courseService: CourseService,
    public router: Router,
    private route: ActivatedRoute,
    public toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.baseUrl = environment.baseUrl;
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      if (this.id != null) {
        this.getCourse(this.id);
        this.feedbackObj.courseId = this.id;
        console.log('ID:', this.feedbackObj.courseId);
      }
    });
  }

  Validation(): any {
    if (this.feedbackObj.std_id == '' || this.feedbackObj.std_id == null) {
      return this.toastr.error('Student id is Required');
    }
    if (
      this.feedbackObj.description == '' ||
      this.feedbackObj.description == null
    ) {
      return this.toastr.error('Feedback is Required');
    }
  }

  getCourse(id: any) {
    this.courseService.getCourseById(id).then((res: any) => {
      if (res.status == 1) {
        this.data = res.data;
        this.courseName = this.data.course_name;
        this.bannerData.breadcrumbValue = 'Courses / ' + this.courseName;
        console.log(this.courseName);
      }
    });
  }

  postFeedback(): any {
    try {
      if (this.Validation()) {
        return true;
      } else {
        this.courseService.postFeedback(this.feedbackObj).then((res) => {
          if (res.status == 1) {
            this.makeFeildEmpty();
            this.getCourse(this.id);
            this.toastr.success('Form successfully submitted');
          } else {
            this.toastr.error(res.message);
          }
        });
      }
    } catch (error) {
      this.toastr.error('something went wrong');
      console.log(error);
    }
  }

  makeFeildEmpty(): void {
    this.feedbackObj.std_id = '';
    this.feedbackObj.description = '';
    window.scrollTo(0, 0);
  }
  stdSubmission() {
    this.router.navigate([
      AppConst.MAIN_ROUTES.REGISTER + '/' + this.feedbackObj.courseId,
    ]);
  }
}
