import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArraysService {

  constructor() { }
  public genders :any[]=[
    {
      "key":0,
      "gender":"Male",
    },
    {
      "key":1,
      "gender":"Female",
    },
    {
      "key":2,
      "gender":"Other",
    },
  ]
}
