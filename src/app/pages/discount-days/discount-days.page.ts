import { Component, OnInit } from '@angular/core';
import { UrlService } from '../../services/url.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ExtractErrorsService } from '../../services/extract-errors.service';

@Component({
  selector: 'app-discount-days',
  templateUrl: './discount-days.page.html',
  styleUrls: ['./discount-days.page.scss'],
})
export class DiscountDaysPage implements OnInit {

  discount1:0
  discount2:0
  discount3:0
  discount4:0
  discount5:0
  discount6:0
  discount7:0
  url:any

  constructor(
    private router: Router, 
    private urlService: UrlService,
    private http: HttpClient,
    private extractErrorService: ExtractErrorsService
  ) {

    this.url = this.urlService.getUrl()

  }

  ngOnInit() {
  }

  ionViewDidEnter() {

    if(localStorage.getItem("post") != null){

      let post = JSON.parse(localStorage.getItem("post"))

      if(post.discount1){
        this.discount1 = post.discount1
      }

      if(post.discount2){
        this.discount2 = post.discount2
      }

      if(post.discount3){
        this.discount3 = post.discount3
      }

      if(post.discount4){
        this.discount4 = post.discount4
      }

      if(post.discount5){
        this.discount5 = post.discount5
      }

      if(post.discount6){
        this.discount6 = post.discount6
      }

      if(post.discount7){
        this.discount7 = post.discount7
      }

    }

  }

  goBack(){

    let post = JSON.parse(localStorage.getItem("post"))

    if(post.type == "basica")
      this.router.navigateByUrl('basic-promo');
   
    
  }

  store(){

    let headers = new HttpHeaders({
      Authorization: "Bearer "+window.localStorage.getItem('token'),
    });

    let post = JSON.parse(localStorage.getItem("post"))

    this.http.post(this.url+"/api/post/store", {title: post.title, description: post.description, amount: post.amount, categoryId: post.categoryId, saleDate: post.saleDate, discount1: this.discount1, discount2: this.discount2, discount3: this.discount3, discount4: this.discount4, discount5: this.discount5, discount6: this.discount6, discount7: this.discount7, price: post.price, main_image: post.image, image2: post.image2}, {headers})
    .subscribe((response: any) => {
      
      console.log("test-post", response)

      if(response.success == true){
        alert(response.msg)

      }else{
        alert(response.msg)
      }


    },
    (errorResponse: HttpErrorResponse) => {
      let string = ""
      let errors = this.extractErrorService.extractErrorMessagesFromErrorResponse(errorResponse);

      errors.forEach((data) => {
        string += data+"\n"
      })

      alert(string)

    })

  }

}
