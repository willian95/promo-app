import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedService {

  constructor() {
  }

  private user = new Subject<any>();

  publishSomeData(data: any) {
      this.user.next(data);
  }

  getObservable(): Subject<any> {
      return this.user;
  }

}
