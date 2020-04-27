import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlService } from '../../services/url.service';
import { LoggedService } from '../../services/logged.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  url:any
  posts:any
  categories:any
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 3
  };

  constructor(private router: Router, private http: HttpClient, private urlService: UrlService, private loggedService: LoggedService) { 
    this.url = urlService.getUrl()
    let user = window.localStorage.getItem('user')
    if(user != null)
      this.loggedService.publishSomeData(JSON.parse(user))
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.fetch()
    this.fetchCategories()
  }

  check(){

    let headers = new HttpHeaders({
      Authorization: "Bearer "+window.localStorage.getItem('token'),
    });
    this.http.get(this.url+"/api/checkUser", {headers})
    .subscribe((response: any) => {

      console.log(response)


    })

  }

  fetch(){

    this.http.get(this.url+"/api/fetch")
    .subscribe((response: any) => {

      this.posts = response.posts

    })

  }

  fetchCategories(){

    this.http.get(this.url+"/api/categories/fetch")
    .subscribe((response: any) => {

      this.categories = response.categories

    })

  }

  details(data){
    console.log("test-details", data)
    let navigationExtras: NavigationExtras = {
      state: {
        post: data
      }
    };
    this.router.navigate(['post-details'], navigationExtras);

  }

}
