import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionalDocumentation1Component } from './instructional-documentation1.component';

describe('InstructionalDocumentation1Component', () => {
  let component: InstructionalDocumentation1Component;
  let fixture: ComponentFixture<InstructionalDocumentation1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructionalDocumentation1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionalDocumentation1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
