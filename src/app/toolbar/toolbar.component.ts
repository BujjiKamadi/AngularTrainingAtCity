import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;
  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Forms',
        icon: 'pi pi-pw pi-file',
        routerLink: '/reactiveForms',
        items: [
          {
            label: 'ReactiveForms',
            icon: 'pi pi-fw pi-plus',
            routerLink: '/reactiveForms',
            routerLinkActiveOptions: 'active current'
          },
          {
            label: 'TemplateDrivenForms',
            icon: 'pi pi-fw pi-external-link',
            routerLink: '/templateDrivenForms',
            routerLinkActiveOptions: 'active'
          },
          {
            label: 'Component Communication',
            icon: '',
            routerLink: '/compCommunication',
            routerLinkActiveOptions: 'active'
          },
          {
            label: 'Form Arrays',
            icon: '',
            routerLink: 'formArrays',
            routerLinkActiveOptions: 'active'
          },
          {label: 'FormArrays PrimeNg', icon: '', routerLink: '/formArrayPrimeNg',  routerLinkActiveOptions: 'active'},
          {label: 'ReferenceFormat', icon: '', routerLink: '/referenceFormat',  routerLinkActiveOptions: 'active'}
        ]
      },
      {
        label: 'Directive Demo',
        icon: '',
        items: [
          {label: 'Directives Sample', icon: '', routerLink: '/directivesModule'},
          {label: 'Delivery Address Info', icon: '', routerLink: '/directivesModule/deliveryAddressInfo'}
        ]
      },
      {
        label: 'Services',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Employee List', icon: 'pi pi-fw pi-plus', routerLink: '/employeeList' },
          { label: 'Export To Excel', icon: '', routerLink: '/exportToExcel'}
        ]
      },
      {
        label: 'Pipes Demo',
        icon: '',
        routerLink: '/pipesModule',
        items: [
          { label: 'Built-in Pipes', icon: '', routerLink: '/pipesModule/builtInPipes' },
          { label: 'Filter Employees', icon: '', routerLink: '/pipesModule' }
        ]
      },
      {
        label: 'Http Services',
        icon: '/httpRequestmodule',
        items: [
          { label: 'Get Employees', icon: '', routerLink: '/httpRequestmodule/getEmployees'},
          { label: 'Add Employees', icon: '', routerLink: '/httpRequestmodule/createEmp'},
          { label: 'Edit EMployee', icon: '', routerLink: '/httpRequestmodule/editEmp/:id'}
        ]
      },
      {
        label: 'Rxjs Demo',
        icon: '',
        items: [
          { label: 'Rxjs Demo', icon: '', routerLink: '/rxjs/Sample'}
        ]
      },
      {
        label: 'Primeng Demo',
        icon: '',
        items: [
          { label: 'Paginator', icon: '', routerLink: '/paginator'}
        ]
      },
      {
        label: 'Routing Demo',
        icon: '',
        items: [
          { label: 'Basic Routing', icon: '', routerLink: '/basicRouting'}
        ]
      }
    ];
  }

}
