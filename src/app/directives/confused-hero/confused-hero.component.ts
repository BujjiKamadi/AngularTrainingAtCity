import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../heroes';

@Component({
  selector: 'app-confused-hero',
  templateUrl: './confused-hero.component.html',
  styleUrls: ['./confused-hero.component.scss']
})
export class ConfusedHeroComponent implements OnInit {
  @Input() hero: Hero;
  constructor() { }

  ngOnInit() {
  }

}
