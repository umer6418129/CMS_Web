import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  bannerData: any = {
    pageTitle: 'About-Us',
    breadcrumbValue : 'About-Us',
    bgImg: 'assets/images/page-banner-1.jpg',
  };

  ngOnInit(): void {
    this.initSlider();
  }

  initSlider() {
    $('.patnar-slied').slick({
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 800,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
}
