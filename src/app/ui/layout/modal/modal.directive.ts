import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appModal]'
})
export class ModalDirective {

  constructor(
    private viewContainerRef: ViewContainerRef
  ) { }

  getViewContainerRef(): ViewContainerRef {
    return this.viewContainerRef;
  }

}
