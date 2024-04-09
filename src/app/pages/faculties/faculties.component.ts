import { Component } from '@angular/core';
import { FacultiesService } from 'src/app/services/faculties.service';

@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.css']
})
export class FacultiesComponent {
  data : any;
  bannerData: any = {
    pageTitle: 'Faculties',
    breadcrumbValue : 'Faculties',
    bgImg: 'assets/images/page-banner-3.jpg',
  };

  constructor(public facultyService : FacultiesService){

  }
  ngOnInit(): void {
    this.getFaculties();
  }

  getFaculties(){
    this.facultyService.getFaculties().then((res)=>{
      if (res.status == 1) {
        this.data = res.data;
        // console.log(this.data);
      }
    })
  }
  
}
