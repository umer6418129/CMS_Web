import { Component } from '@angular/core';

@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.css']
})
export class FacultiesComponent {
  bannerData: any = {
    pageTitle: 'Faculties',
    breadcrumbValue : 'Faculties',
    bgImg: 'assets/images/page-banner-3.jpg',
  };
}
