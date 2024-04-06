import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css'],
})
export class DepartmentsComponent {
  id: any;
  departName: any
  data: any = {
    id: 0,
    is_active: true,
    name: '',
  };
  bannerData: any = {
    pageTitle: 'Department',
    bgImg: 'assets/images/page-banner-2.jpg',
    breadcrumbValue : '',
  };
  constructor(
    public departmentService: DepartmentService,
    public router: Router,
    private route: ActivatedRoute,
    public toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      if (this.id != null) {
        this.getDepart(this.id);
        // this.getCourse(this.id);
        // this.feedbackObj.courseId = this.id;
        // console.log('ID:', this.feedbackObj.courseId);
      }
    });
  }

  getDepart(id: any) {
    this.departmentService.getDepartmentById(id).then((res) => {
      if (res.status == 1) {
        this.data = res.data;
        this.departName = this.data.name;
        this.bannerData.breadcrumbValue = 'Department / ' + this.departName;
        console.log(this.data);
      }
    });
  }
}
