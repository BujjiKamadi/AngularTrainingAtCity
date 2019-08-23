import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomStructuralDirectiveDemoComponent } from './custom-structural-directive-demo.component';

describe('CustomStructuralDirectiveDemoComponent', () => {
  let component: CustomStructuralDirectiveDemoComponent;
  let fixture: ComponentFixture<CustomStructuralDirectiveDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomStructuralDirectiveDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomStructuralDirectiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
