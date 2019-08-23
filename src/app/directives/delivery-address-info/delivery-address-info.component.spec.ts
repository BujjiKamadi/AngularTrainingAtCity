import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryAddressInfoComponent } from './delivery-address-info.component';

describe('DeliveryAddressInfoComponent', () => {
  let component: DeliveryAddressInfoComponent;
  let fixture: ComponentFixture<DeliveryAddressInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryAddressInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryAddressInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
