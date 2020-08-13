import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-table-demo',
  templateUrl: './table-demo.component.html',
  styleUrls: ['./table-demo.component.scss']
})
export class TableDemoComponent implements OnInit {
  message: any;
  display: boolean;
  Indiastate = [
    'Rajasthan',
    'UP',
    'Mp',
    'Delhi',
    'Goa',
    'Gurjat',
    'Punjab'
  ];
  items = [
    'Rajasthan',
    'UP',
    'Mp',
    'Delhi',
    'Goa'
  ]
  cols: { field: string; header: string; subCols: { field: string; header: string; }[]; }[];
  tableColumns: { field: string; header: string; }[];
  dataList: any[];
  columns: { field: string; header: string; }[];
  cars: { vin: string; year: string; brand: string; color: string; }[];
  constructor(private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.columns = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
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
    // this.cols = [
    //   { field: 'Contract', header: 'Contract', subCols: [] },
    //   {
    //     field: 'Section', header: 'Section', subCols: [
    //       { field: 'Section', header: 'Section' },
    //       { field: 'Effdate', header: 'Effdate' },
    //       { field: 'Expidate', header: 'Expidate' },
    //       { field: 'TransitMode', header: 'TransitMode' }
    //     ]
    //   },
    //   { field: 'BillTo', header: 'BillTo', subCols: [] },
    //   { field: 'BU', header: 'BU', subCols: [] },
    //   { field: 'chargeType', header: 'chargeType', subCols: [] },
    //   {
    //     field: 'Doc', header: 'Doc', subCols: [
    //       { field: 'txtName', header: 'txtName' },
    //       { field: 'Attachment', header: 'Attachment' },
    //       { field: 'Status', header: 'Status' }
    //     ]
    //   },
    // ];
    this.tableColumns = [
      { field: 'FeatureId', header: 'FeatureId' },
      { field: 'name', header: 'Name' },
      { field: 'surname', header: 'Surname' }
    ];
    this.dataList = [
      { FeatureId: '10000000', name: 'bidafugheniprkmfg', surname: 'nseuorhweoujf'},
      { FeatureId: '10000000', name: 'bidafugheniprkmfg', surname: 'nseuorhweoujf'},
      { FeatureId: '10000000', name: 'bidafugheniprkmfg', surname: 'nseuorhweoujf'},
      { FeatureId: '10000000', name: 'bidafugheniprkmfg', surname: 'nseuorhweoujf'},
      { FeatureId: '10000000', name: 'bidafugheniprkmfg', surname: 'nseuorhweoujf'}
    ];
  }
  showManageCols() {
    this.display = true;
  }
  confirm() {
    console.log(document.getElementsByClassName('confirmDialogueContent'));
    this.message = document.getElementsByClassName('confirmDialogueContent')[0].innerHTML;
    this.confirmationService.confirm({
      message: this.message,
      header: null,
      icon: null,
      accept: () => {
        // this.checkCurrentCompliance('fp');
      }
    });
  }
}
