import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppConst } from './app.Const';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import("./pages/home/home.module").then((m)=>m.HomeModule)
  },
  {
    path:AppConst.MAIN_ROUTES.Home,
    loadChildren:()=>import("./pages/home/home.module").then((m)=>m.HomeModule)
  },
  {
    path:AppConst.MAIN_ROUTES.CONTACT,
    loadChildren:()=>import("./pages/contact-us/contact-us.module").then((m)=>m.ContactUsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }