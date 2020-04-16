import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UrlService } from '../../services/url.service';
import { Router } from '@angular/router';
import { LoggedService } from '../../services/logged.service';
import { ExtractErrorsService } from '../../services/extract-errors.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:""
  password:""
  url:any

  constructor(private http: HttpClient, private urlService: UrlService, private router: Router, private logged: LoggedService, private extractErrorService: ExtractErrorsService) { 
    this.url = urlService.getUrl()
  } 

  ngOnInit() {
  }

  login(){

    this.http.post(this.url+"/api/login", {email: this.email, password: this.password})
    .subscribe((response: any) => {
      
      if(response.success == true){
        alert(response.msg)
        window.localStorage.setItem('token', response.token)
        window.localStorage.setItem('user', JSON.stringify(response.user))

        this.email = ""
        this.password = ""

        this.router.navigateByUrl('home');

        this.logged.publishSomeData(response.user)

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
