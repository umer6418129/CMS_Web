import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  data: any = {
    id: -1,
    course_name: '',
    description: null,
    is_available: true,
    displayImage:'',
    reviewsCount: 0,
    stdCount: 0,
    category: null,
    subjects: [],
  };
  bannerData: any = {
    pageTitle: 'Courses',
    bgImg: 'assets/images/page-banner-2.jpg',
    breadcrumbValue : '',
  };
  baseUrl: any ;

  constructor(
    public courseService: CourseService,
    public router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.baseUrl = environment.baseUrl
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      if (this.id != null) {
        this.getCourse(this.id);
        console.log('ID:', this.id);
      }
    });
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
}
