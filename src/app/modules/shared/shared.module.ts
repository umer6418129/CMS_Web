import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreLoaderComponent } from 'src/app/components/pre-loader/pre-loader.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { PageBannerComponent } from 'src/app/components/page-banner/page-banner.component';

@NgModule({
  declarations: [PreLoaderComponent, HeaderComponent,PageBannerComponent,],
  imports: [CommonModule],
  exports: [PreLoaderComponent, HeaderComponent,PageBannerComponent,],
})
export class SharedModule {}
