import { Component, OnInit, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-component-communication',
  templateUrl: './component-communication.component.html',
  styleUrls: ['./component-communication.component.scss'],
  providers: [MessageService]
})
export class ComponentCommunicationComponent implements OnInit {
  @Input() reactiveFormGroup: FormGroup;
  @Input() reactiveDisplayJsonStatus: boolean;
  @Input() templateDrivenFormData: FormGroup;
  @Input() tempateDrivenDisplayJsonStatus: boolean;
  @Output() changeChildBgColor = new EventEmitter();
  cars: any[];
  brands: any[];
  states: any[] = [
    { stateID: 1, stateName: 'Andhra Pradesh' },
    { stateID: 2, stateName: 'ArunaChal Pradesh' },
    { stateID: 3, stateName: 'Telangana' },
    { stateID: 4, stateName: 'Tamil Nadu' },
    { stateID: 5, stateName: 'Kerala' },
    { stateID: 6, stateName: 'Bihar' },
  ];
  countries: any[] = [
    { counrtyName: 'Australia', counrtyCode: 'AU' },
    { counrtyName: 'Afghanistan', counrtyCode: 'AFG' },
    { counrtyName: 'Bangladesh', counrtyCode: 'BNG' },
    { counrtyName: 'Cambodia', counrtyCode: 'CBD' },
    { counrtyName: 'India', counrtyCode: 'IND' }
  ];
  courses: any[] = [
    { courseID: 10, courseName: 'Java' },
    { courseID: 10, courseName: 'Php' },
    { courseID: 10, courseName: 'Angular' },
    { courseID: 10, courseName: 'Sql Server' },
    { courseID: 10, courseName: 'Dot Net' },
  ];
  languages: any[] = [
    { label: 'Telugu', value: 'Telugu' },
    { label: 'English', value: 'English' },
    { label: 'Hindi', value: 'Hindi' },
    { label: 'Tamil', value: 'Tamil' },
    { label: 'Malayam', value: 'Malayam' }
  ];
  constructor(private messageService: MessageService, private elementRef: ElementRef) { }

  ngOnInit() {
    this.cars = [
      { vin: 'dsad231ff', year: '2012', brand: 'Audi', color: 'Black' },
      { vin: 'gwregre345', year: '2011', brand: 'Renault', color: 'Gray' },
      { vin: 'h354htr', year: '2005', brand: 'BMW', color: 'Blue' },
      { vin: 'j6w54qgh', year: '2003', brand: 'Mercedes', color: 'Orange' },
      { vin: 'hrtwy34', year: '1995', brand: 'Volvo', color: 'Black' },
      { vin: 'jejtyj', year: '2005', brand: 'Honda', color: 'Yellow' },
      { vin: 'g43gr', year: '2012', brand: 'Jaguar', color: 'Orange' },
      { vin: 'greg34', year: '2013', brand: 'VM', color: 'Orange' },
      { vin: 'h54hw5', year: '2000', brand: 'Ford', color: 'Black' },
      { vin: '245t2s', year: '2013', brand: 'Fiat', color: 'Red' },
    ];
    this.brands = [
      {label: 'Audi', value: 'Audi'},
      {label: 'BMW', value: 'BMW'},
      {label: 'Fiat', value: 'Fiat'},
      {label: 'Ford', value: 'Ford'},
      {label: 'Honda', value: 'Honda'},
      {label: 'Jaguar', value: 'Jaguar'},
      {label: 'Mercedes', value: 'Mercedes'},
      {label: 'Renault', value: 'Renault'},
      {label: 'VW', value: 'VW'},
      {label: 'Volvo', value: 'Volvo'}
  ];
  }
  displayedJsonDataInChild(status: boolean): void {
    if (status) {
      this.messageService.add({
        severity: 'success', summary: 'Success Message from child component', detail: `Reactive
       form data is displayed successfully in child component` });
      this.changeChildBgColor.emit();
    } else {
      this.elementRef.nativeElement.firstChild.style.backgroundColor = 'transparent';
    }

  }
  getStatesList(): any[] {
    return this.states;
  }
  getCountriesList(): any[] {
    return this.countries;
  }
  getCoursesList(): any[] {
    return this.courses;
  }
  getLanguagesList(): any[] {
    return this.languages;
  }
}
