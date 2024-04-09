import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { AppConst } from '../app.Const';

@Injectable({
  providedIn: 'root'
})
export class FacultiesService {

  constructor(public baseSerive: BaseService) { }

  getFaculties(): Promise<any> {
    return new Promise((resolve, error) => {
      this.baseSerive
        .Get(AppConst.URL_REQUEST.Faculties)
        .then((res: any) => {
          if (res != null && res != '') {
            return resolve(res);
          }
        });
    });
  }
}
