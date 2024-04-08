import { Injectable } from '@angular/core';
import { AppConst } from '../app.Const';
import { DepartmentService } from './department.service';

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
      type:null
    },
    {
      path: AppConst.MAIN_ROUTES.COURSES,
      title: 'Courses',
      isChild: false,
      type:null
    },
    {
      path: AppConst.MAIN_ROUTES.FACULTIES,
      title: 'faculties',
      isChild: false,
      type:null
    },
    {
      path: AppConst.MAIN_ROUTES.CONTACT,
      title: 'contact us',
      isChild: false,
      type:null
    },
    {
      path: '',
      title: 'departments',
      isChild: true,
      type:'department',
      childs : [],
    },
  ];
  constructor(
    public department : DepartmentService
  ) {
    this.getDepartments();
  }

  getDepartments(){
    this.department.getDepartments().then((res) =>{
      if (res.status == 1) {
        const departObj = this.MENUITEMS.find(x => x.type == 'department');
        departObj.childs = res.data;
        console.log(departObj.childs);
        
      }
    })
  }
}
