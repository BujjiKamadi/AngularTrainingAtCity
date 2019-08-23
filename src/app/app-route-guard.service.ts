import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { EmployeesService } from './services-demo/employees.service';

@Injectable({
    providedIn: 'root'
})
export class AppRouteGuardService implements CanActivate {
    userName: string;
    employeeList: any[];
    constructor(private router: Router, private empService: EmployeesService) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        localStorage.setItem('loignName', 'bujjiKamadI');
        this.userName = localStorage.getItem('loignName');
        const employeeList = this.empService.getEmployees();
        // for (let i = 0; i < employeeList.length; i++) {
        //     if (employeeList[i].Name.toLowerCase() === this.userName.toLowerCase()) {
        //         return true;
        //     }
        // }
        for (const employee of employeeList) {
            if (employee.Name.toLowerCase() === this.userName.toLowerCase()) {
                return true;
            }
        }
        alert('Please provide a valid employee name');
        this.router.navigate(['/notFound']);
        return false;
    }
}
