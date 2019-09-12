import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TreeNode } from 'primeng/api';
import { HttpMethodsService } from 'src/app/services/http-methods.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  providers: [HttpMethodsService]
})
export class PaginatorComponent implements OnInit {
  paginatorData: any[];
  paginatorDataLength: number;
  presentPageData = [];
  files: TreeNode[];
    cols: any[];
  constructor(
    private http: HttpClient,
    private httpService: HttpMethodsService) {

  }

  ngOnInit() {
    this.getSampleDataForPaginator();
    this.httpService.getfileSystemData().subscribe(data => {
      this.files = data as TreeNode[];
      console.log(this.files);
    });
    console.log(this.files);
  }
  getSampleDataForPaginator() {
    this.http.get('assets/SampleForPaginator.json').subscribe(data => {
      this.paginatorData = data as any[];
      this.paginatorDataLength = this.paginatorData.length;
      this.paginate({ page: 0, first: 0, rows: 10, pageCount: 10 });
    });
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
  }
  paginateAll(event) {
    console.log(event);
  }
}
