import { Component } from '@angular/core';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent {
  bannerData: any = {
    pageTitle: 'Facilities',
    breadcrumbValue : 'Facilities',
    bgImg: 'assets/images/page-banner-3.jpg',
  };
}
