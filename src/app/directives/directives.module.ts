import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { HighlightDirective } from './highlight.directive';
import { SadHeroComponent } from './sad-hero/sad-hero.component';
import { ConfusedHeroComponent } from './confused-hero/confused-hero.component';
import { UnknownHeroComponent } from './unknown-hero/unknown-hero.component';
import { HappyHeroComponent } from './happy-hero/happy-hero.component';

import { FormsModule } from '@angular/forms';
import { PrimengModule } from '../primeng/primeng.module';
import { UnlessDirective } from './unless.directive';
import { NgLoopDirective } from './ng-loop.directive';
import { CustomStructuralDirectiveDemoComponent } from './custom-structural-directive-demo/custom-structural-directive-demo.component';

import { DirectivesRoutingModule } from './directives-routing.module';
import { DeliveryAddressInfoComponent } from './delivery-address-info/delivery-address-info.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    DirectivesDemoComponent,
    HighlightDirective,
    SadHeroComponent,
    ConfusedHeroComponent,
    UnknownHeroComponent,
    HappyHeroComponent,
    UnlessDirective,
    NgLoopDirective,
    CustomStructuralDirectiveDemoComponent,
    DeliveryAddressInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimengModule,
    DirectivesRoutingModule,
    HttpClientModule
  ],
  exports: [DirectivesRoutingModule]
})
export class DirectivesModule { }
