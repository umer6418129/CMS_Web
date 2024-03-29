import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreLoaderComponent } from 'src/app/components/pre-loader/pre-loader.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { PageBannerComponent } from 'src/app/components/page-banner/page-banner.component';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PreLoaderComponent, HeaderComponent,PageBannerComponent,],
  imports: [FormsModule,HttpClientModule,ToastrModule.forRoot()],
  exports: [PreLoaderComponent ,HttpClientModule ,HeaderComponent,PageBannerComponent,FormsModule],
})
export class SharedModule {}
