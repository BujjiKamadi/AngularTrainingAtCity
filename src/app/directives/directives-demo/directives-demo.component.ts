import { Component, OnInit, OnChanges } from '@angular/core';
import { Hero, heroes } from '../heroes';

@Component({
  selector: 'app-directives-demo',
  templateUrl: './directives-demo.component.html',
  styleUrls: ['./directives-demo.component.scss']
})
export class DirectivesDemoComponent implements OnInit, OnChanges {
  color: string;
  purple = 'yellow';
  heroesList: Hero[] = heroes;
  numbers: Array<number> = [10, 20, 30, 40, 50];
  hero: Hero = { id: 12, name: 'Magneta', emotion: 'sad'};
  checked = false;
  selectedHero = [];
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {}

}
