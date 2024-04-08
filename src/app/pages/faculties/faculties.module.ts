import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultiesRoutingModule } from './faculties-routing.module';
import { FacultiesComponent } from './faculties.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';


@NgModule({
  declarations: [
    FacultiesComponent
  ],
  imports: [
    CommonModule,
    FacultiesRoutingModule,
    SharedModule
  ]
})
export class FacultiesModule { }
