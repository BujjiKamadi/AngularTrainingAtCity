import { Component, OnInit, OnDestroy } from '@angular/core';
import { resolve } from 'url';
import { reject } from 'q';
import { Observable, interval, Observer } from 'rxjs';

@Component({
  selector: 'app-built-in-pipes',
  templateUrl: './built-in-pipes.component.html',
  styleUrls: ['./built-in-pipes.component.scss']
})
export class BuiltInPipesComponent implements OnInit, OnDestroy {
  birthday: Date = new Date(1983, 3, 18);
  promiseData: string;
  promise: Promise<string>;

  observableData: number;
  subscription: object = null;
  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });
  pi = 3.14;
  e = 2.718281828459045;
  gender: string;
  inviteMap: any = { male: 'Invite him', female: 'Invite her', other: 'Invite them' };
  salary = 12000;
  employee: object = {
    ID: 4432,
    name: 'Bujji Kamadi',
    address: { state: 'Andhra Pradesh', country: 'India' }
  };
  number1 = 0.259;
  today: number = Date.now();
  stock = 200;
  stockMapping: { [k: string]: string } = {
    '=200': 'u should maintain a minimum stock value 500.',
    '=500': 'thats a good amount of stock value.',
    other: 'u r maintaining more stock.',
  };
  employeesObject: { [k: number]: string } = { 4432: 'BujjiK', 4434: 'Lakshmi', 4431: 'Prasanna', 4430: 'Jyoshna' };
  employeesMap = new Map([
    [4432, 'BujjiK'], [4434, 'Lakshmi'], [4431, 'Prasanna'], [4430, 'Jyoshna']
  ]);
  slicePipeMockData = 'abcdefghijk';
  slicePipeMockArray: Array<number> = [11, 22, 33, 44, 55, 66, 77, 88];
  birthDay = new Date(1988, 3, 15);
  toggle = true;
  strength = 2;
  get format() { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat(): void { this.toggle = !this.toggle; }
  changeDate(): void {
    console.log(this.birthDay);
    this.birthDay = new Date(1999, 9, 10);
    console.log(this.birthDay);
  }
  changeStrength(): void {
    this.strength = 3;
  }
  constructor() {
    // this.getPromise().then(v => {
    //   this.promiseData = v;
    // });
    // this.promise = this.getPromise();
    // this.subscribeObservable();
  }
  ngOnInit() {
  }
  // getPromise() {
  //   return new Promise<string>((resolve, reject) => {
  //     setTimeout(() => resolve('Promise Completed!'), 3000);
  //   });
  // }
  // getObservable() {
  //   return Observable
  //     .interval(1000)
  //     .take(10)
  //     .map((v) => v * v);
  // }

  // subscribeObservable() {
  //   this.subscription = this.getObservable()
  //     .subscribe(v => this.observableData = v);
  // }

  ngOnDestroy() {
    if (this.subscription) {
      // this.subscription.unsubscribe();
    }
  }
}
