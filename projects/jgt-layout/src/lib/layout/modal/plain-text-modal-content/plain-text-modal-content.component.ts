import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plain-text-modal-content',
  templateUrl: './plain-text-modal-content.component.html',
  styleUrls: ['./plain-text-modal-content.component.scss']
})
export class PlainTextModalContentComponent {

  @Input()
  text?: string;

}
