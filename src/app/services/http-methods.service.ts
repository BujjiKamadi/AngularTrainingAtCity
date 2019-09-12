import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Employee, Employee2 } from '../Models/Employee';
import 'rxjs/add/operator/catch';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpMethodsService {
  baseUrl = '/api/v1';
  constructor(private http: HttpClient) { }

  getEmployees() {
    // return this.http.get(this.baseUrl + '/employeess');
    // return this.http.get(this.baseUrl + '/employees').catch(this.handleError);
    return this.http.get(this.baseUrl + '/employees').catch(this.handleError);
    // return this.http.get(this.baseUrl + '/employeess')
    //         .pipe(catchError(this.handleError));
  }
  getEmployeeById(id) {
    return this.http.get<Employee>(this.baseUrl + '/employee/' + id);
  }
  getContentJSON() {
    return this.http.get('assets/DeliveryAddressInfo.json');
  }
  getSampleDataForPaginator() {
    return this.http.get('assets/SampleForPaginator.json');
  }
  saveEmployee(employee: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      })
    };
    return this.http.post<Employee2>(this.baseUrl + '/create', employee);
  }
  updateEmployee(employee: any, empID: any) {
    return this.http.put<Employee2>(this.baseUrl + '/update/' + empID, employee);
  }
  deleteEmployee(empID: any) {
    return this.http.delete(this.baseUrl + '/delete/' + empID);
  }
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse instanceof ErrorEvent) {
      console.error('Client side error: ', errorResponse.error.message);
    } else {
      console.error('Server side errorr: ', errorResponse);
    }
    // return new ErrorObservable('There is a problem with the service, Please try again later');
    return new ErrorObservable((observer) => {
      observer.next('There is a problem with the service, Please try again later');
    });
  }
  getUsersFromGitHub() {
    return this.http.get('/hadley/orgs');
  }
  getEmployees1() {
    return this.http.get('/api/v1/employees');
  }
  getfileSystemData() {
    return this.http.get('assets/fileSystem.json');
  }
}
