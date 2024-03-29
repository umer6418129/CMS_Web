import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  RequestUrl: any = "";
  setTokenValue: any;
  constructor(
    private http: HttpClient,
    // public globalservice: GlobalService
  ) { }
  private baseURL: string = environment.apiUrl;

  Get(url: string): Promise<any> {
    return new Promise((resolve, error) => {
      var httpOptions = new HttpHeaders().set('Content-Type', 'application/json')
        // .set('Authorization', 'Bearer ' + this.globalservice.LogObj.token)
      this.http.get(this.baseURL + url, { headers: httpOptions }).subscribe((result: any) => {
        return resolve(result);
      }, (ServiceErr) => {
        console.log("GET Request Url On Error :" + this.RequestUrl);
        return error(ServiceErr)
      });
    });
  }
  Post(url: string, param: any): Promise<any> {
    return new Promise((resolve, error) => {
      var httpOptions = new HttpHeaders().set('Content-Type', 'application/json')
        // .set('Authorization', 'Bearer ' + this.globalservice.LogObj.token)
      this.http.post(this.baseURL + url, param, { headers: httpOptions }).subscribe((result: any) => {
        return resolve(result);
      }, (ServiceErr) => {
        console.log("GET Request Url On Error :" + this.RequestUrl);
        return error(ServiceErr)
      });
    });
  }

  PostWithFormData(url: string, param: any): Promise<any> {
    return new Promise((resolve, error) => {
      var httpOptions = new HttpHeaders()
        // .set('Authorization', 'Bearer ' + this.globalservice.LogObj.token)
      this.http.post(this.baseURL + url, param, { headers: httpOptions }).subscribe((result: any) => {
        return resolve(result);
      }, (ServiceErr) => {
        console.log("GET Request Url On Error :" + this.RequestUrl);
        return error(ServiceErr)
      });
    });
  }
  Update(url: string, param: any): Promise<any> {
    return new Promise((resolve, error) => {
      var httpOptions = new HttpHeaders().set('Content-Type', 'application/json')
        // .set('Authorization', 'Bearer ' + this.globalservice.LogObj.token)
      this.http.put(this.baseURL + url, param, { headers: httpOptions }).subscribe((result: any) => {
        return resolve(result);
      }, (ServiceErr) => {
        console.log("GET Request Url On Error :" + this.RequestUrl);
        return error(ServiceErr)
      });
    });
  }
  Delete(url: string, param: any): Promise<any> {
    return new Promise((resolve, error) => {
      var httpOptions = new HttpHeaders().set('Content-Type', 'application/json')
        // .set('Authorization', 'Bearer ' + this.globalservice.LogObj.token)
      this.http.delete(this.baseURL + url + param, { headers: httpOptions }).subscribe((result: any) => {
        return resolve(result);
      }, (ServiceErr) => {
        console.log("GET Request Url On Error :" + this.RequestUrl);
        return error(ServiceErr)
      });
    });
  }
  DeleteWithMultiParam(url: string): Promise<any> {
    return new Promise((resolve, error) => {
      var httpOptions = new HttpHeaders().set('Content-Type', 'application/json')
        // .set('Authorization', 'Bearer ' + this.globalservice.LogObj.token)
      this.http.delete(this.baseURL + url, { headers: httpOptions }).subscribe((result: any) => {
        return resolve(result);
      }, (ServiceErr) => {
        console.log("GET Request Url On Error :" + this.RequestUrl);
        return error(ServiceErr)
      });
    });
  }

}
