import { Injectable, Type } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { ModalService } from './modal.service';
import { ModalOptions, ModalResult, ModalType, TextModalResult } from './modal.api';
import { PlainTextModalContentComponent } from '../modal/plain-text-modal-content/plain-text-modal-content.component';

@Injectable({
  providedIn: 'root'
})
export class InternalModalService extends ModalService {
  private modalInstance?: ModalComponent;
  private defaultTitle = new Map<ModalType, string>();

  constructor() {
    super();

    this.defaultTitle.set(ModalType.ERROR, 'Ups!');
    this.defaultTitle.set(ModalType.WARNING, 'Cuidao ahí');
    this.defaultTitle.set(ModalType.INFO, 'Información');
    this.defaultTitle.set(ModalType.SUCCESS, 'Toma ya!');
  }

  register(target: ModalComponent): void {
    this.modalInstance = target;
  }

  modal(text: string): TextModalResult;
  modal(text: string, options: ModalOptions): TextModalResult;
  modal<T>(component: Type<T>): ModalResult<T>;
  modal<T>(component: Type<T>, options: ModalOptions): ModalResult<T>;
  modal<T>(
    value: string | Type<T>,
    options: ModalOptions = { type: ModalType.INFO }
  ): ModalResult<T> | TextModalResult {
    const actualOptions = this.checkModalOptions(options);
    if (!this.modalInstance) {
      throw Error('Modal is not initialized!');
    }

    let result: ModalResult<T> | TextModalResult;
    if (typeof (value) == 'string') {
      result = this.modalInstance.showModal(PlainTextModalContentComponent, actualOptions);
      (result as ModalResult<PlainTextModalContentComponent>).ref.instance.text = value;
    } else {

      result = this.modalInstance.showModal(value, actualOptions);
    }
    return result;
  }

  confirm(text: string): TextModalResult;
  confirm(text: string, options: ModalOptions): TextModalResult;
  confirm<T>(component: Type<T>): ModalResult<T>;
  confirm<T>(component: Type<T>, options: ModalOptions): ModalResult<T>;
  confirm<T>(
    value: string | Type<T>,
    options: ModalOptions = { type: ModalType.INFO }
  ): ModalResult<T> | TextModalResult {
    const actualOptions = this.checkModalOptions(options);
    if (!this.modalInstance) {
      throw Error('Modal is not initialized!');
    }

    let result: ModalResult<T> | TextModalResult;
    if (typeof (value) == 'string') {
      result = this.modalInstance.showConfirm(PlainTextModalContentComponent, actualOptions);
      (result as ModalResult<PlainTextModalContentComponent>).ref.instance.text = value;
    } else {
      result = this.modalInstance.showConfirm(value, actualOptions);
    }
    return result;
  }

  private checkModalOptions(options: ModalOptions): ModalOptions {
    // TODO we can load modal default options here
    const actualOptions: ModalOptions = { ...options }; // quick clone
    actualOptions.title = actualOptions.title || this.defaultTitle.get(actualOptions.type) || '...';
    return actualOptions;
  }

}
