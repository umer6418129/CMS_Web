import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { AppConst } from 'src/app/app.Const';

const routes: Routes = [
  {
    path:'',
    component:CoursesComponent
  },
  {
    path:AppConst.MAIN_ROUTES.DETAILS + "/:id",
    loadChildren:()=>import("./course-details/course-details.module").then((m)=>m.CourseDetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
