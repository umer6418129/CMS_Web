import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRegisterationRoutingModule } from './student-registeration-routing.module';
import { StudentRegisterationComponent } from './student-registeration.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';


@NgModule({
  declarations: [
    StudentRegisterationComponent
  ],
  imports: [
    CommonModule,
    StudentRegisterationRoutingModule,
    SharedModule
  ]
})
export class StudentRegisterationModule { }
