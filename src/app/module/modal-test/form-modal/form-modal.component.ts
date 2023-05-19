import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent {

  // TODO move to service
  form = this.nfb.group({
    name: ['', [Validators.required]],
    age: [0, [Validators.required, Validators.min(18)]]
  });

  constructor(
    private nfb: NonNullableFormBuilder
  ) {}

}
