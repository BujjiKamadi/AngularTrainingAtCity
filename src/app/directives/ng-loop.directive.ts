import { Directive, Input, TemplateRef, ViewContainerRef, OnInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[appNgLoop]'
})
export class NgLoopDirective implements OnInit, OnChanges {
  @Input() appNgLoopOf: Array<any>;
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.viewContainer.createEmbeddedView(this.templateRef);
  }
  ngOnChanges(): void {
    // throw new Error("Method not implemented.");
    for (const input of this.appNgLoopOf) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        $implicit: input,
        index: this.appNgLoopOf.indexOf(input)
      });
    }
  }
}
