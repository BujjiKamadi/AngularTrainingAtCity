import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  paginatorData: any[];
  paginatorDataLength: number;
  presentPageData = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getSampleDataForPaginator();
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
