import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { EmployeesService } from '../employees.service';

@Injectable({
    providedIn: 'root'
})
export class EmployeeGuardService implements CanActivate{
    constructor(private empService: EmployeesService, private router: Router) {
         confirm('can activate calling');
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const employeeExists = !!this.empService.getEmployeeByID(+route.paramMap.get('id'))[0];
        if (employeeExists) {
            return true;
        } else {
            this.router.navigate(['notFound']);
            return false;
        }
    }
}
