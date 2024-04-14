import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { AppConst } from '../app.Const';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(public baseSerive: BaseService) { }

  studentRegistration(param: any): Promise<any> {
    return new Promise((resolve, error) => {
      this.baseSerive
        .Post(AppConst.URL_REQUEST.Student, param)
        .then((res: any) => {
          if (res != null && res != '') {
            return resolve(res);
          }
        });
    });
  }
}
