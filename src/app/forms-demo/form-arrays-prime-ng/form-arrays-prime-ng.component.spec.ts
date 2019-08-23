import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArraysPrimeNgComponent } from './form-arrays-prime-ng.component';

describe('FormArraysPrimeNgComponent', () => {
  let component: FormArraysPrimeNgComponent;
  let fixture: ComponentFixture<FormArraysPrimeNgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormArraysPrimeNgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormArraysPrimeNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
