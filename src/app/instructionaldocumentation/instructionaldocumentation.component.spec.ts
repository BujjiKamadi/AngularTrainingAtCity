import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionaldocumentationComponent } from './instructionaldocumentation.component';

describe('InstructionaldocumentationComponent', () => {
  let component: InstructionaldocumentationComponent;
  let fixture: ComponentFixture<InstructionaldocumentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructionaldocumentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionaldocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
