import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { AppConst } from '../app.Const';

@Injectable({
  providedIn: 'root',
})
export class ContactUsService {
  constructor(public baseSerive: BaseService) {}

  postMessage(param: any): Promise<any> {
    return new Promise((resolve, error) => {
      this.baseSerive
        .Post(AppConst.URL_REQUEST.ContactUs, param)
        .then((res: any) => {
          if (res != null && res != '') {
            return resolve(res);
          }
        });
    });
  }
}
