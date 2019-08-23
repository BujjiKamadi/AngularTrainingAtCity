import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../heroes';

@Component({
  selector: 'app-unknown-hero',
  templateUrl: './unknown-hero.component.html',
  styleUrls: ['./unknown-hero.component.scss']
})
export class UnknownHeroComponent implements OnInit {
  @Input() hero: Hero;
  constructor() { }

  ngOnInit() {
  }

}
