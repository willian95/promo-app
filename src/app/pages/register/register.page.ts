import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UrlService } from '../../services/url.service';
import { Router } from '@angular/router';
import { LoggedService } from '../../services/logged.service';
import { ExtractErrorsService } from '../../services/extract-errors.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  name:""
  email:""
  password:""
  password_confirmation:""
  url:any
  locations:[]
  locationId:""

  constructor(private http: HttpClient, private urlService: UrlService, private router: Router, private loggedService: LoggedService, private extractErrorService: ExtractErrorsService) {
    this.url = urlService.getUrl()
    this.fetchLocations()
  }

  ngOnInit() {
  }

  register(){
    
    console.log(" test-location ",this.locationId)

    this.http.post(this.url+"/api/register", {name: this.name, email: this.email, password: this.password, password_confirmation: this.password_confirmation, locationId: this.locationId})
    .subscribe((response: any) => {
      
      if(response.success == true){
        alert(response.msg)
        window.localStorage.setItem('token', response.token)
        window.localStorage.setItem('user', JSON.stringify(response.user))

        this.loggedService.publishSomeData(response.user)

        this.name = ""
        this.email = ""
        this.password = ""
        this.password_confirmation = ""
        this.locationId = ""

        this.router.navigateByUrl('home');

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

  fetchLocations(){

    this.http.get(this.url+"/api/admin/location/fetch")
    .subscribe((response: any) => {
      
      if(response.success == true){
        
        this.locations = response.locations

      }else{
        alert(response.msg)
      }

    })

  }

}
