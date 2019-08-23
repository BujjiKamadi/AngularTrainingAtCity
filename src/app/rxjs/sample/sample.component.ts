import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  sampleObservable = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 1000);
  });
  numberReturnFn1 = new Observable(subscriber => {
    console.log('Observable subscribed');
    subscriber.next(46);
  });
  constructor() { }

  ngOnInit() {
    this.sampleObservable.subscribe(data => {
      console.log(data);
    });
    this.sampleObservable.subscribe({
      next(data) { console.log(data); },
      error(r) { console.log(r); },
      complete() { console.log('completed'); }
    });
    const x = this.numberReturnFn.call(this.numberReturnFn);
    console.log(x);
    const y = this.numberReturnFn.call(this.numberReturnFn);
    console.log(y);
    this.numberReturnFn1.subscribe(data => {
      console.log(data);
    });
    this.numberReturnFn1.subscribe(data => {
      console.log(data);
    });
  }

  numberReturnFn(): number {
    console.log('Fn call happened');
    return 46;
  }
}
