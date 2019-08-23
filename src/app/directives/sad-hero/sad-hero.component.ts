import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../heroes';

@Component({
  selector: 'app-sad-hero',
  templateUrl: './sad-hero.component.html',
  styleUrls: ['./sad-hero.component.scss']
})
export class SadHeroComponent implements OnInit {
  @Input() hero: Hero;
  constructor() { }

  ngOnInit() {
  }

}
