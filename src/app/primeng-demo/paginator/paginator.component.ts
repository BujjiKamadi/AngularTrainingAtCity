import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TreeNode, Message, ConfirmationService } from 'primeng/api';
import { HttpMethodsService } from 'src/app/services/http-methods.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  providers: [HttpMethodsService, ConfirmationService]
})
export class PaginatorComponent implements OnInit, OnChanges {
  @ViewChild('tt', { static: false }) tableRef: ElementRef;
  paginatorData: any[];
  paginatorDataLength: number;
  presentPageData = [];
  files: TreeNode[];
  cols: any[];
  uploadedFiles: any[] = [];
  enableTreeTable = true;
  loadCount = 0;
  display: boolean = false;
  msgs: Message[] = [];
  msgs1: Message[] = [];
  message: any;
  constructor(
    private http: HttpClient,
    private httpService: HttpMethodsService,
    private confirmationService: ConfirmationService) {
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'size', header: 'Size' },
      { field: 'type', header: 'Type' }
    ];
    this.getfileSystemData().subscribe(response => {
      console.log(response);
      // tslint:disable-next-line: no-string-literal
      this.files = response['data'] as TreeNode[];
      // this.files = response.data as TreeNode[];
      console.log(this.files);
    });
  }

  ngOnInit() {
    this.getSampleDataForPaginator();
    this.getMilliSeconds();
  }

  ngAfterViewInit(): void {
  }
  
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log(document.getElementsByClassName('ui-confirmdialog-message'));
    this.message = document.getElementsByClassName('ui-confirmdialog-message')[0].innerHTML = "<ul><li>test</li></ul>";
  }
  // show() {
  //   this.msgs1.push({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
  // }

  // hide() {
  //   this.msgs1 = [];
  // }
  showDialog() {
    this.display = true;
    this.msgs = [];
    this.msgs.push({severity:'info', summary:'Info Message', detail:'PrimeNG rocks'});
  }

  
  confirm() {
    console.log(document.getElementsByClassName('confirmDialogueContent'));
    this.message = document.getElementsByClassName('confirmDialogueContent')[0].innerHTML;
    this.confirmationService.confirm({
        message: '<app-table-demo></app-table-demo>',
        header: null,
        icon: null,
        accept: () => {
            // this.checkCurrentCompliance('fp');
        }
    });
  }

  showSuccess() {
    this.msgs = [];
    this.display = false;
    console.log(document.getElementsByClassName('ui-confirmdialog-message'));
    this.message = document.getElementsByClassName('ui-confirmdialog-message')[0].innerHTML = "<ul><li>test</li></ul>";
    this.confirmationService.confirm({
      message: this.message,
      accept: () => {
        //Actual logic to perform a confirmation
      }, reject: () => {
        this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
        this.display = true;
        // this.msgs.push({severity:'info', summary:'Info Message', detail:'PrimeNG rocks'});
      }
    });
    console.log(document.getElementsByClassName('ui-confirmdialog-message'));
    this.message = document.getElementsByClassName('ui-confirmdialog-message')[0].innerHTML = "<ul><li>test</li></ul>";
    this.confirmationService.confirm({
      message: this.message,
      accept: () => {
        //Actual logic to perform a confirmation
      }, reject: () => {
        this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
        this.display = true;
        // this.msgs.push({severity:'info', summary:'Info Message', detail:'PrimeNG rocks'});
      }
    });
  }
  getSampleDataForPaginator() {
    this.http.get('assets/SampleForPaginator.json').subscribe(data => {
      this.paginatorData = data as any[];
      this.paginatorDataLength = this.paginatorData.length;
      this.paginate({ page: 0, first: 0, rows: 10, pageCount: 10 });
    });
  }

  loadNodes(event) {
    console.log(event);
    if (this.loadCount % 2 === 1) {
      this.enableTreeTable = !this.enableTreeTable;
    }
    this.loadCount += 1;
  }
  paginate(event) {
    // {page: 0, first: 0, rows: 10, pageCount: 3}
    console.log(event);
    this.presentPageData = [];
    for (let i = event.first; i < (event.first + event.rows); i++) {
      if (this.paginatorData[i]) {
        this.presentPageData.push(this.paginatorData[i]);
      }
    }
    // this.presentPageData = this.paginatorData.slice(event.first, (event.first + event.rows));
    console.log(this.files);
  }
  paginateAll(event) {
    console.log(event);
  }
  getfileSystemData() {
    return this.http.get('assets/fileSystem.json');
  }
  logData() {
    console.log(this.tableRef);
  }
  onBasicUpload(event) {
    console.log(event);
  }
  onUpload(event) {
    console.log(event);
    for (const file of event.files) {
      this.uploadedFiles.push(file);
    }
    console.log(this.uploadedFiles);
  }
  getMilliSeconds() {
    console.log(Date.now());
    const dateSring = '01162017:34:14.965';
    console.log(new Date(dateSring).getMilliseconds());
    const splitDateString = dateSring.split(':');
    splitDateString[2] = Math.floor(Number(splitDateString[2])).toString();
    console.log('trim Milli seconds from date', splitDateString.join(':'));

    const splitDateStringWithDot = dateSring.split('.');
    console.log('trim Milli seconds from date', splitDateStringWithDot[0]);
    console.log('trim Milli seconds from date', new Date(Number(splitDateStringWithDot[0])));
  }
}
