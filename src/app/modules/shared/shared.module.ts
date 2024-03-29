import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreLoaderComponent } from 'src/app/components/pre-loader/pre-loader.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { PageBannerComponent } from 'src/app/components/page-banner/page-banner.component';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxUiLoaderConfig, NgxUiLoaderModule } from 'ngx-ui-loader';
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
  text: "",
  textColor: "#ffc107",
  textPosition: "center-center",
  fgsColor: '#ffc107',
  fgsPosition: 'center-center',
  fgsSize: 0,
  fgsType: 'three-strings',
};

@NgModule({
  declarations: [PreLoaderComponent, HeaderComponent,PageBannerComponent,],
  imports: [ReactiveFormsModule,FormsModule,HttpClientModule,ToastrModule.forRoot(),NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),],
  exports: [ReactiveFormsModule,PreLoaderComponent ,HttpClientModule ,HeaderComponent,PageBannerComponent,FormsModule,NgxUiLoaderModule,],
})
export class SharedModule {}
