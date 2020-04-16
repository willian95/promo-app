import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UrlService } from '../../../services/url.service';
import { ExtractErrorsService } from '../../../services/extract-errors.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  name = ""
  description = ""
  url = ""
  categories = []

  constructor(private http: HttpClient, private urlService: UrlService, private extractErrorService: ExtractErrorsService) {
    this.url = this.urlService.getUrl()
    this.fetch()
  }

  ngOnInit() {
  }

  fetch(){

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

    this.http.post(this.url+"/api/admin/category/store", {name: this.name, description: this.description})
    .subscribe((response: any) => {
      
      if(response.success == true){
        alert(response.msg)

        this.name = ""
        this.description = ""

        this.fetch()

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
