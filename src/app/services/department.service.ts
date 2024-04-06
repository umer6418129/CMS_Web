import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { AppConst } from '../app.Const';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(public baseSerive: BaseService) { }
  getDepartments(): Promise<any> {
    return new Promise((resolve, error) => {
      this.baseSerive
        .Get(AppConst.URL_REQUEST.department)
        .then((res: any) => {
          if (res != null && res != '') {
            return resolve(res);
          }
        });
    });
  }
}
