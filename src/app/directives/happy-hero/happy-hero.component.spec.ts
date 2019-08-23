import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyHeroComponent } from './happy-hero.component';

describe('HappyHeroComponent', () => {
  let component: HappyHeroComponent;
  let fixture: ComponentFixture<HappyHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HappyHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HappyHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
