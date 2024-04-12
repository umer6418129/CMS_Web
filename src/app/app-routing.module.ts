import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppConst } from './app.Const';

const routes: Routes = [
  {
    path:'',
    redirectTo: AppConst.MAIN_ROUTES.Home,
    pathMatch:"full",
  },
  {
    path:AppConst.MAIN_ROUTES.Home,
    loadChildren:()=>import("./pages/home/home.module").then((m)=>m.HomeModule)
  },
  {
    path:AppConst.MAIN_ROUTES.CONTACT,
    loadChildren:()=>import("./pages/contact-us/contact-us.module").then((m)=>m.ContactUsModule)
  },
  {
    path:AppConst.MAIN_ROUTES.ABOUT,
    loadChildren:()=>import("./pages/about-us/about-us.module").then((m)=>m.AboutUsModule)
  },
  {
    path:AppConst.MAIN_ROUTES.COURSES,
    loadChildren:()=>import("./pages/courses/courses.module").then((m)=>m.CoursesModule)
  },
  {
    path:AppConst.MAIN_ROUTES.REGISTER + "/:id",
    loadChildren:()=>import("./pages/student-registeration/student-registeration.module").then((m)=>m.StudentRegisterationModule)
  },
  {
    path:AppConst.MAIN_ROUTES.FACILITIES,
    loadChildren:()=>import("./pages/facilities/facilities.module").then((m)=>m.FacilitiesModule)
  },
  {
    path:AppConst.MAIN_ROUTES.DEPARTMENT + "/:id",
    loadChildren:()=>import("./pages/departments/departments.module").then((m)=>m.DepartmentsModule)
  },
  {
    path:AppConst.MAIN_ROUTES.FACULTIES,
    loadChildren:()=>import("./pages/faculties/faculties.module").then((m)=>m.FacultiesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
