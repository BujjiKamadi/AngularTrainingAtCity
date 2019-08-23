import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceFormatComponent } from './reference-format.component';

describe('ReferenceFormatComponent', () => {
  let component: ReferenceFormatComponent;
  let fixture: ComponentFixture<ReferenceFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenceFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
