import { Component, OnInit } from '@angular/core';
import { HttpMethodsService } from '../../services/http-methods.service';

@Component({
  selector: 'app-delivery-address-info',
  templateUrl: './delivery-address-info.component.html',
  styleUrls: ['./delivery-address-info.component.scss'],
  providers: [HttpMethodsService]
})
export class DeliveryAddressInfoComponent implements OnInit {
  deliveryAddressInfo: any[];
  addressAndContacts: any[];
  paginatorData: any[];
  paginatorDataLength: number;
  presentPageData = [];
  constructor(private httpService: HttpMethodsService) { }

  ngOnInit() {
    this.subscribeDeliveryAddressInfo();
    this.getSampleDataForPaginator();
  }
  subscribeDeliveryAddressInfo() {
    this.httpService.getContentJSON().subscribe(data => {
      this.deliveryAddressInfo = data as any[];
      this.addressAndContacts = this.deliveryAddressInfo[0].addressAndContacts;
    });
  }
  getSampleDataForPaginator() {
    this.httpService.getSampleDataForPaginator().subscribe(data => {
      this.paginatorData = data as any[];
      this.paginatorDataLength = this.paginatorData.length;
      this.paginate({ page: 0, first: 0, rows: 10, pageCount: 3 });
    });
  }
  paginate(event) {
    // {page: 0, first: 0, rows: 10, pageCount: 3}
    this.presentPageData = [];
    for (let i = event.first; i < (event.first + 10); i++) {
      this.presentPageData.push(this.paginatorData[i]);
    }
  }
}
