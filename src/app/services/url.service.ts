import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }

  getUrl(){

    //return "https://servertest.sytes.net/promo-backend/public"
  	return "http://localhost:8000";
    //return "http://localhost/promo/public";
  }
}
