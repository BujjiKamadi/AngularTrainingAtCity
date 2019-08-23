import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpyOnComponent } from './spy-on.component';
import { HttpMethodsService } from '../services/http-methods.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('SpyOnComponent', () => {
  let component: SpyOnComponent;
  let fixture: ComponentFixture<SpyOnComponent>;
  let httpService: HttpMethodsService;

  // spyOn example
  let foo = null;
  let bar = null;
  let whatAmI: any;
  let tape: any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpyOnComponent],
      imports: [HttpClientTestingModule],
      providers: [HttpMethodsService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpyOnComponent);
    component = fixture.componentInstance;
    httpService = TestBed.get(HttpMethodsService);
    fixture.detectChanges();
    foo = {
      setBar(value: any) {
        bar = value;
      }
    };
    spyOn(foo, 'setBar');
    foo.setBar(123);
    foo.setBar(456, 'another param');
    whatAmI = jasmine.createSpy('whatAm');
    whatAmI('I', 'am', 'a', 'spy');
    tape = jasmine.createSpyObj('tape', ['play', 'pause', 'stop']);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('tracking spy', () => {
    expect(bar).toBeNull();
    foo.setBar();
    expect(foo.setBar.calls.any()).toEqual(true);
    expect(foo.setBar).toHaveBeenCalled();
    expect(foo.setBar).toHaveBeenCalledTimes(3);
    expect(foo.setBar).toHaveBeenCalledWith(123);
    expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');
    expect(whatAmI).toHaveBeenCalled();
  });
  it('tracking spyObj', () => {
    tape.play();
    expect(tape.play).toBeDefined();
    expect(tape.pause).toBeDefined();
  });
  it('jasmine any', () => {
    expect({}).toEqual(jasmine.any(Object));
    expect(12).toEqual(jasmine.any(Number));
  });
  xit('getEmps method', () => {
    spyOn(httpService, 'getEmployees');
    component.getEmps();
    expect(component.getEmps).toBeTruthy();
    expect(httpService.getEmployees).toHaveBeenCalled();

  });
});
