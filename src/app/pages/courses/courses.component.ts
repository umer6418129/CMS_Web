import { Component } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  bannerData: any = {
    pageTitle: 'Courses',
    bgImg: 'assets/images/page-banner-2.jpg',
  };
  featuredCourses: any;
  courses: any[] = [];
  currentPage = 1;
  itemsPerPage = 3; // Adjust according to your preference
  totalItems = 0;
  totalPages = 0;
  pages: number[] = [];
  filterCourses : any
  searchTerm: string = '';

  constructor(public courseService: CourseService) {}

  ngOnInit(): void {
    this.getFeturedCourses();
    this.getCourses();
  }

  getFeturedCourses() {
    this.courseService.getFeturedCourses().then((res) => {
      if (res.status == 1) {
        this.featuredCourses = res.data;
      }
    });
  }

  getCourses() {
    this.courseService.getCourses().then((res) => {
      if (res.status == 1) {
        this.courses = res.data;
        this.filterCourses = res.data
        this.totalItems = this.courses.length;
        this.calculateTotalPages();
      }
    });
  }

  onsearch(){
    this.filterCourses = [];
    if (this.searchTerm.trim() !== '') {
      this.filterCourses = this.courses.filter(x => {
        const name = x.course_name && x.course_name.toString().toLowerCase().includes(this.searchTerm.trim().toLowerCase()); 
        return name
      });
    }else{
      this.filterCourses = [...this.courses];
    }
  }
  calculateTotalPages() {
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.pages = Array(this.totalPages)
      .fill(0)
      .map((x, i) => i + 1);
  }

  setPage(page: number) {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    this.currentPage = page;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
