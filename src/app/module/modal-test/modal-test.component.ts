import { Component } from '@angular/core';
import { ModalService } from '../../ui/layout/service/modal.service';
import { RichTextModalComponent } from './rich-text-modal/rich-text-modal.component';
import { FormModalComponent } from './form-modal/form-modal.component';
import { ModalType } from '../../ui/layout/service/modal.api';

@Component({
  selector: 'app-modal-test',
  templateUrl: './modal-test.component.html',
  styleUrls: ['./modal-test.component.scss']
})
export class ModalTestComponent {
  logs: Array<string> = [];

  constructor(
    private modalService: ModalService
  ) { }

  textModal(): void {
    this.log('Abriendo modal de texto');
    const modal = this.modalService.modal("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat");
    console.log('Modal information', modal);
    modal.promise.then(
      () => this.log('Modal de texto cerrado')
    );
  }

  textConfirm(): void {
    this.log('Abriendo confirm de texto');
    const modal = this.modalService.confirm("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ¿Seguro?");
    console.log('Confirm information', modal);
    modal.promise.then(
      v => this.log('Confirm respondido con ' + v)
    );
  }

  modalRichText(): void {
    this.log('Creando modal RICH TEXT');
    const modal = this.modalService.modal(RichTextModalComponent);
    console.log('Modal con rich-text abierto', modal);
    modal.promise.then(
      () => this.log('Rich-text cerrado')
    );
  }

  confirmRichText(): void {
    this.log('Creando confirm con RICH TEXT');
    const modal = this.modalService.confirm(RichTextModalComponent);
    console.log('Confirm de rich-text abierto', modal);
    modal.promise.then(
      v => this.log('Confirm rich-text cerrado con valor: ' + v)
    );
  }

  confirmForm(): void {
    this.log('Formulario en un confirm');
    const modal = this.modalService.confirm(FormModalComponent);
    console.log('Confirm con formulario mostrado', modal);
    const data = {
      name: 'Paco',
      age: 23
    };
    console.log('Usando dato para el formulario', data);
    modal.ref.instance.form.setValue(data);
    modal.promise.then(
      v => {
        this.log('Confirm con formulario cerrado con valor: ' + v);
        this.log('Valor del formulario: ' + JSON.stringify(modal.ref.instance.form.value));
        this.log('El formulario es válido? ' + modal.ref.instance.form.valid);
      }
    );
  }

  modalWithTypeAndTitle(type: string, title?: string): void {
    this.log(`Opening modal type ${type} with title "${title}"`);
    this.modalService.modal(
      'Mensaje fijo',
      {
        type: type as ModalType, // this assertion is controlled by US, we have valid values in the template
        title
      }
    );
  }

  private log(msg: string): void {
    this.logs.unshift(msg);
  }

}
