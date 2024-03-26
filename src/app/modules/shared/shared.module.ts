import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreLoaderComponent } from 'src/app/components/pre-loader/pre-loader.component';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  declarations: [PreLoaderComponent, HeaderComponent],
  imports: [CommonModule],
  exports: [PreLoaderComponent, HeaderComponent],
})
export class SharedModule {}
