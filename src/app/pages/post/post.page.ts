import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { UrlService } from '../../services/url.service';
import { ExtractErrorsService } from '../../services/extract-errors.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  url:any
  categories:[]
  title:""
  description:""
  amount:""
  categoryId:""
  saleDate:""
  price:""
  discount1:0
  discount2:0
  discount3:0
  discount4:0
  discount5:0
  discount6:0
  discount7:0

  constructor(private http: HttpClient, private urlService: UrlService, private extractErrorService: ExtractErrorsService) { 
    this.url = this.urlService.getUrl()
    
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.fetchCategories()
  }

  fetchCategories(){

    this.http.get(this.url+"/api/admin/category/fetch")
    .subscribe((response: any) => {
      
      if(response.success == true){
        
        this.categories = response.categories

      }else{
        alert(response.msg)
      }

    })

  }

  store(){

    let headers = new HttpHeaders({
      Authorization: "Bearer "+window.localStorage.getItem('token'),
    });

    this.http.post(this.url+"/api/post/store", {title: this.title, description: this.description, amount: this.amount, categoryId: this.categoryId, saleDate: this.saleDate, discount1: this.discount1, discount2: this.discount2, discount3: this.discount3, discount4: this.discount4, discount5: this.discount5, discount6: this.discount6, discount7: this.discount7, price: this.price}, {headers})
    .subscribe((response: any) => {
      
      console.log("test-post", response)

      if(response.success == true){
        alert(response.msg)
        this.title = ""
        this.description = ""
        this.amount = ""
        this.categoryId = ""
        this.saleDate  = ""
        this.discount1 = 0
        this.discount2 = 0
        this.discount3 = 0
        this.discount4 = 0
        this.discount5 = 0
        this.discount6 = 0
        this.discount7 = 0
        this.price = ""

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
