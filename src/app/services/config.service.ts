import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configUrl = 'http://dummy.restapiexample.com/api/v1';
  constructor(private http: HttpClient) { }
  private handleError(error: HttpErrorResponse) {
    if (error instanceof ErrorEvent) {
      console.error('Client side error: ', error.error.message);
    } else {
      console.error('Server side error: ', error);
    }
    return throwError('Something went wrong, please try again laterrr');
  }
  getConfig() {
    // return this.http.get(this.configUrl + '/employeess')
    return this.http.get(this.configUrl + '/employees')
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }
}
