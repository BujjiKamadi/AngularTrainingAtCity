import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() { }
  getEmployees(): any[] {
    return [
      { ID: 4401, Name: 'BujjiKamadi', Location: 'Kakinada', Designation: 'Software Trainee' },
      { ID: 4402, Name: 'LakshmiKrishna', Location: 'Annavaram', Designation: 'Java Developer' },
      { ID: 4403, Name: 'SaiPrasanna', Location: 'Guntur', Designation: 'Dotnet Developer' },
      { ID: 4404, Name: 'Kishore', Location: 'Hyderabad', Designation: 'Php Developer' },
      { ID: 4405, Name: 'Jyoshna', Location: 'Bheemili', Designation: 'Java Developer' },
      { ID: 4406, Name: 'Prasad', Location: 'Nellore', Designation: 'Dotnet Developer' },
      { ID: 4407, Name: 'Pavan', Location: 'Vijayawada', Designation: 'Software Trainee' },
      { ID: 4408, Name: 'Giridhar', Location: 'Warangal', Designation: 'Php Developer' },
      { ID: 4409, Name: 'Sowjanya', Location: 'Guntur', Designation: 'Java Developer' },
      // { id: 110, name: 'Rakesh Shyam', email: 'shyamjaiswal@gmail.com', age: 23 },
      // { id: 111, name: 'Ronald Bob', email: 'bob32@gmail.com', age: 24 },
      // { id: 112, name: 'Nehore Jai', email: 'jai87@gmail.com', age: 25 },
      // { id: 113, name: 'Nihan', email: 'nithanmon@gmail.com', age: 25 },
      // { id: 114, name: 'Neha', email: 'neha456@gmail.com', age: 24 },
      // { id: 115, name: 'Rithore', email: 'rithore@gmail.com', age: 23 }
    ];
  }
  getEmployeeByID(id: number): any {
    const employees: any [] = this.getEmployees();
    return employees.filter( employee =>
      Number(employee.ID) === id
    );
  }
}
