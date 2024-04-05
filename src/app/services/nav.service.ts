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
      title: 'the collage',
    },
    {
      path: AppConst.MAIN_ROUTES.FACILITIES,
      title: 'facilities',
    },
    {
      path: AppConst.MAIN_ROUTES.COURSES,
      title: "Courses",
    },
    {
      path: AppConst.MAIN_ROUTES.CONTACT,
      title: 'contact us',
    },
  ];
  constructor() { }
}
