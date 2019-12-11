import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Account} from '../shared/account'
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseurl ='https://localhost:5001'

  constructor(private http: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  login(data){
    console.log(JSON.stringify(data))
    return this.http.post('/api/account/login',data,this.httpOptions)
    .subscribe(
      (val) => {
        console.log("POST call successful value returned in body", 
                    val);
    },
    response => {
        console.log("POST call in error", response);
    },
    () => {
        console.log("The POST observable is now completed.");
    });
    
  }



  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
