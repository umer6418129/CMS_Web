import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreLoaderComponent } from 'src/app/components/pre-loader/pre-loader.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { PageBannerComponent } from 'src/app/components/page-banner/page-banner.component';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxUiLoaderConfig, NgxUiLoaderModule } from 'ngx-ui-loader';
import { FeaturedCoursesComponent } from 'src/app/components/featured-courses/featured-courses.component';
import { FeaturedCourseCardComponent } from 'src/app/components/featured-course-card/featured-course-card.component';
import { OurMissionComponent } from 'src/app/components/our-mission/our-mission.component';
import { PartnersComponent } from 'src/app/components/partners/partners.component';
import { FacilitiesComponentComponent } from 'src/app/components/facilities-component/facilities-component.component';
import { FacultiesGrdComponent } from 'src/app/components/faculties-grd/faculties-grd.component';
import { FacultiesCardsComponent } from 'src/app/components/faculties-cards/faculties-cards.component';
const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: '#ffc107',
  bgsOpacity: 0,
  bgsPosition: 'bottom-right',
  bgsSize: 0,
  bgsType: 'ball-spin-clockwise',
  pbColor: '#ffc107',
  pbDirection: 'ltr',
  pbThickness: 5,
  hasProgressBar: true,
  text: '',
  textColor: '#ffc107',
  textPosition: 'center-center',
  fgsColor: '#ffc107',
  fgsPosition: 'center-center',
  fgsSize: 0,
  fgsType: 'three-strings',
};

@NgModule({
  declarations: [
    PreLoaderComponent,
    HeaderComponent,
    OurMissionComponent,
    PartnersComponent,
    FeaturedCourseCardComponent,
    PageBannerComponent,
    FeaturedCoursesComponent,
    FacilitiesComponentComponent,
    FacultiesGrdComponent,
    FacultiesCardsComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
  ],
  exports: [
    ReactiveFormsModule,
    CommonModule,
    PreLoaderComponent,
    HttpClientModule,
    HeaderComponent,
    OurMissionComponent,
    PartnersComponent,
    FeaturedCourseCardComponent,
    PageBannerComponent,
    FeaturedCoursesComponent,
    FacilitiesComponentComponent,
    FacultiesGrdComponent,
    FacultiesCardsComponent,
    FormsModule,
    NgxUiLoaderModule,
  ],
})
export class SharedModule {}
