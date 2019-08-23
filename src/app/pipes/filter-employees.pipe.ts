import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterEmployees',
  pure: true
  // pure: false
})
export class FilterEmployeesPipe implements PipeTransform {
  private counter = 0;
  transform(employees: any[], searchTerm: string): any[] {
    this.counter++;
    console.log('filter pipe executed for ', this.counter, ' times');
    if (!employees || !searchTerm) {
      return employees;
    }
    return employees.filter(employee => 
      employee.Name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    );
  }
}
