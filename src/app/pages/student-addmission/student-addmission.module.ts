import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentAddmissionRoutingModule } from './student-addmission-routing.module';
import { StudentAddmissionComponent } from './student-addmission.component';


@NgModule({
  declarations: [
    StudentAddmissionComponent
  ],
  imports: [
    CommonModule,
    StudentAddmissionRoutingModule
  ]
})
export class StudentAddmissionModule { }
