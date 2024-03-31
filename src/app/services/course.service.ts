import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { AppConst } from '../app.Const';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(public baseSerive: BaseService) { }
  getFeturedCourses(): Promise<any> {
    return new Promise((resolve, error) => {
      this.baseSerive
        .Get(AppConst.URL_REQUEST.feturedCourses)
        .then((res: any) => {
          if (res != null && res != '') {
            return resolve(res);
          }
        });
    });
  }
  getCourses(): Promise<any> {
    return new Promise((resolve, error) => {
      this.baseSerive
        .Get(AppConst.URL_REQUEST.courses)
        .then((res: any) => {
          if (res != null && res != '') {
            return resolve(res);
          }
        });
    });
  }
}
