import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appModalDialog]'
})
export class ModalDialogDirective {

  constructor() { }

  @HostListener("click", ["$event"])
  public onClick(event: Event): void {
    event.stopPropagation();
  }
}
