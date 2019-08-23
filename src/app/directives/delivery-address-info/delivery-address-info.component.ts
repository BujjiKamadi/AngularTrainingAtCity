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
  constructor(private httpService: HttpMethodsService) { }

  ngOnInit() {
    this.subscribeDeliveryAddressInfo();
  }
  subscribeDeliveryAddressInfo() {
    this.httpService.getContentJSON().subscribe(data => {
      this.deliveryAddressInfo = data as any[];
      this.addressAndContacts = this.deliveryAddressInfo[0].addressAndContacts;
    });
  }
}
