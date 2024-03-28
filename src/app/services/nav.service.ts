import { Injectable } from '@angular/core';
import { AppConst } from '../app.Const';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  MENUITEMS: any[] = [
    {
      path: AppConst.MAIN_ROUTES.Home,
      title: 'Home',
    },
    {
      path: AppConst.MAIN_ROUTES.ABOUT,
      title: 'about us',
    },
    {
      path: AppConst.MAIN_ROUTES.COURSES,
      title: "FAQ's",
    },
    {
      path: AppConst.MAIN_ROUTES.CONTACT,
      title: 'contact us',
    },
  ];
  constructor() { }
}