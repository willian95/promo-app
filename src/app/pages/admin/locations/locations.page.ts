import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { UrlService } from '../../../services/url.service';
import { ExtractErrorsService } from '../../../services/extract-errors.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {

  url = ""
  name=""
  locations = []

  constructor(private http: HttpClient, private urlService: UrlService, private extractErrorService: ExtractErrorsService) { 
    this.url = this.urlService.getUrl()
    
  }

  ngOnInit() {
    this.fetch()
  }

  ionViewDidEnter() {
    this.fetch()
  }

  fetch(){

    this.http.get(this.url+"/api/admin/location/fetch")
    .subscribe((response: any) => {
      
      if(response.success == true){
        
        this.locations = response.locations

      }else{
        alert(response.msg)
      }

    })

  }

  store(){

    this.http.post(this.url+"/api/admin/location/store", {name: this.name})
    .subscribe((response: any) => {
      
      if(response.success == true){
        alert(response.msg)

        this.name = ""

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
