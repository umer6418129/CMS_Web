import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRegisterationRoutingModule } from './student-registeration-routing.module';
import { StudentRegisterationComponent } from './student-registeration.component';


@NgModule({
  declarations: [
    StudentRegisterationComponent
  ],
  imports: [
    CommonModule,
    StudentRegisterationRoutingModule
  ]
})
export class StudentRegisterationModule { }
