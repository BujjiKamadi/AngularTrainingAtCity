import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnknownHeroComponent } from './unknown-hero.component';

describe('UnknownHeroComponent', () => {
  let component: UnknownHeroComponent;
  let fixture: ComponentFixture<UnknownHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnknownHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnknownHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
