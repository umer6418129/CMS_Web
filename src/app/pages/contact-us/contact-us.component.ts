import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
  contactUsFormObj: any = {
    full_name: '',
    email: '',
    subject: '',
    phone: '',
    description: '',
  };
  constructor(public toastr: ToastrService) {}

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
  showSuccessToast() {
    this.toastr.success('This is a success toast', 'Success');
  }
  
  Validation(): any {
    if (
      this.contactUsFormObj.full_name == '' ||
      this.contactUsFormObj.full_name == null
      ) {
        return this.toastr.error('Name is Required');
      }
      if (
        this.contactUsFormObj.email == '' ||
        this.contactUsFormObj.email == null
        ) {
          return this.toastr.error('email is Required');
        }
        if (
          this.contactUsFormObj.subject == '' ||
          this.contactUsFormObj.subject == null
          ) {
            return this.toastr.error('subject is Required');
          }
          if (
      this.contactUsFormObj.phone == '' ||
      this.contactUsFormObj.phone == null
      ) {
        return this.toastr.error('phone is Required');
      }
      if (
        this.contactUsFormObj.description == '' ||
        this.contactUsFormObj.description == null
        ) {
          return this.toastr.error('description is Required');
        }
      }
      
      submitForm() : any {
        if (this.Validation()) {
          return true;
        } else {
          this.toastr.success('Form successfully submitted');
        }
  }
}
