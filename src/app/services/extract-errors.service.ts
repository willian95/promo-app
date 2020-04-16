import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExtractErrorsService {

  constructor() { }


  extractErrorMessagesFromErrorResponse(errorResponse: HttpErrorResponse){

    const errors = [];
    if (errorResponse.error) {

      if (errorResponse.error.errors) {
  
        for (const property in errorResponse.error.errors) {
  
          if (errorResponse.error.errors.hasOwnProperty(property)) {
  
            const propertyErrors: Array<string> = errorResponse.error.errors[property];
  
            propertyErrors.forEach(error => errors.push(error));
          }
  
        }
  
      }
  
    }
  
    return errors;
  };

}
