import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Employee2 } from 'src/app/Models/Employee';
import { Observable } from 'rxjs';
import { HttpMethodsService } from '../../services/http-methods.service';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeesListResolverService implements Resolve<any> {
    constructor(private httpServcie: HttpMethodsService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.httpServcie.getEmployees();
    }
}
