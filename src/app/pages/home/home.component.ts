import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  h1:any="Choose the right college for education";
  para:any="Choosing the right college is a pivotal decision in shaping your educational journey. It's not just about the prestige, but also about finding a place that nurtures your interests and goals. At our institution, we offer a diverse range of programs and a supportive community to help you thrive. Let us be your stepping stone towards a bright future."
  constructor() { }

  ngOnInit(): void {
    this.mainSlider();
    this.initCourseSlider();
  }
  mainSlider() {
    var BasicSlider = $('.slider-active');

    BasicSlider.on('init', (e: any, slick: any) => {
      var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
      this.doAnimations($firstAnimatingElements);
    });

    BasicSlider.on('beforeChange', (e: any, slick: any, currentSlide: any, nextSlide: string) => {
      var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
      this.doAnimations($animatingElements);
    });

    BasicSlider.slick({
      autoplay: true,
      autoplaySpeed: 10000,
      pauseOnHover: false,
      dots: false,
      fade: true,
      arrows: true,
      prevArrow: '<span class="prev"><i class="fa fa-angle-left"></i></span>',
      nextArrow: '<span class="next"><i class="fa fa-angle-right"></i></span>',
      responsive: [
        { breakpoint: 767, settings: { dots: false, arrows: false } }
      ]
    });
  }

  doAnimations(elements: any) {
    var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    elements.each(() => {
      var $this = $(this);
      var $animationDelay = $this.data('delay');
      var $animationType = 'animated ' + $this.data('animation');
      $this.css({
        'animation-delay': $animationDelay,
        '-webkit-animation-delay': $animationDelay
      });
      $this.addClass($animationType).one(animationEndEvents, function() {
        $this.removeClass($animationType);
      });
    });
  }
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
