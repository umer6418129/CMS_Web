import { Component } from '@angular/core';
declare var google: any;
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent {
  bannerData: any = {
    pageTitle: 'Contact-Us',
    bgImg: 'assets/images/page-banner-6.jpg',
  };
  constructor() {}

  ngOnInit(): void {
    this.basicmap();
  }
  basicmap(): void {
    const mapOptions = {
      zoom: 11,
      scrollwheel: false,
      center: { lat: 23.694182, lng: 90.457313 },
      styles: [
        // Paste the styles array here
      ],
    };

    const mapElement = document.getElementById('contact-map');

    const map = new google.maps.Map(mapElement, mapOptions);

    const marker = new google.maps.Marker({
      position: { lat: 23.694182, lng: 90.457313 },
      map: map,
      title: 'Cryptox',
    });
  }
}
