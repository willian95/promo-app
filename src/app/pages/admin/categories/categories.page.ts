import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
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
  image:""
  categories = []
  color:""
  className:any

  constructor(
    private http: HttpClient, 
    private urlService: UrlService,
    private extractErrorService: ExtractErrorsService
  ) {
    this.url = this.urlService.getUrl()
    
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.fetch()
  }

  convertBase64(event) {
    var input = event.target;
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = (e:any) => {
        this.image = e.target.result;
      }
      reader.readAsDataURL(input.files[0]);
    }
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
    
    let data = {
      image:"",
      name:"",
      description:"",
      color:""
    }
    data.image=this.image;
    data.name=this.name;
    data.description = this.description
    data.color = this.color

    this.http.post(this.url+"/api/admin/category/store", data).subscribe((response:any) => {
    
      if(response.success == true){

        alert(response.msg)
        this.name = ""
        this.image = null
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

  OnColorChange(){

    this.className = "color-div "+this.color

  }

  

 


}
