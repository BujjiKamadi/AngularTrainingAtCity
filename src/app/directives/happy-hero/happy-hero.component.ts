import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../heroes';

@Component({
  selector: 'app-happy-hero',
  templateUrl: './happy-hero.component.html',
  styleUrls: ['./happy-hero.component.scss']
})
export class HappyHeroComponent implements OnInit {
  @Input() hero: Hero;
  constructor() { }

  ngOnInit() {
  }

}
