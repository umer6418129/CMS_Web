import { Injectable } from '@angular/core';
import { AppConst } from '../app.Const';

@Injectable({
  providedIn: 'root',
})
export class NavService {
  MENUITEMS: any[] = [
    {
      path: AppConst.MAIN_ROUTES.Home,
      title: 'Home',
      isChild: false,
    },
    {
      path: AppConst.MAIN_ROUTES.ABOUT,
      title: 'the collage',
      isChild: false,
    },
    {
      path: AppConst.MAIN_ROUTES.FACILITIES,
      title: 'facilities',
      isChild: false,
    },
    {
      path: AppConst.MAIN_ROUTES.COURSES,
      title: 'Courses',
      isChild: false,
    },
    {
      path: AppConst.MAIN_ROUTES.CONTACT,
      title: 'contact us',
      isChild: false,
    },
    {
      path: '',
      title: 'departments',
      isChild: true,
      childs : [],
    },
  ];
  constructor() {}
}
