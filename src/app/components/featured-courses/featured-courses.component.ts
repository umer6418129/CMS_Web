import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-featured-courses',
  templateUrl: './featured-courses.component.html',
  styleUrls: ['./featured-courses.component.css']
})
export class FeaturedCoursesComponent {

  initCourseSlider() {
    $('.course-slied').slick({
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: true,
      prevArrow: '<span class="prev"><i class="fa fa-angle-left"></i></span>',
      nextArrow: '<span class="next"><i class="fa fa-angle-right"></i></span>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        }
      ]
    });
    $('.course-slied').slick({
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: true,
      prevArrow: '<span class="prev"><i class="fa fa-angle-left"></i></span>',
      nextArrow: '<span class="next"><i class="fa fa-angle-right"></i></span>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
    });
  }
}
