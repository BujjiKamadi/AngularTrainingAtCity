import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfusedHeroComponent } from './confused-hero.component';

describe('ConfusedHeroComponent', () => {
  let component: ConfusedHeroComponent;
  let fixture: ComponentFixture<ConfusedHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfusedHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfusedHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
