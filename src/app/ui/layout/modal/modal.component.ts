import { Component, ComponentRef, Type, ViewChild } from '@angular/core';
import { ModalDirective } from './modal.directive';
import { InternalModalService } from '../service/internal-modal.service';
import { ModalOptions, ModalResult, ModalType } from '../service/modal.api';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @ViewChild(ModalDirective, { static: true })
  private modalContent!: ModalDirective;

  private resolver?: (value: boolean | PromiseLike<boolean>) => void;

  // Modal will be printed
  visible: boolean = false;

  // Modal will show a question, must answer Y/N
  confirmable: boolean = true;

  // Title of the modal
  title?: string;

  // Class-name
  modalClass: ModalType = ModalType.INFO;

  disposeLabel: 'Cerrar' | 'Cancelar' = 'Cerrar';

  constructor(
    private modalService: InternalModalService
  ) {
    this.modalService.register(this);
  }

  clickDispose(forced: boolean = false): void {
    console.log('Dispose / Decline modal');
    if (forced || !this.confirmable) {
      this.clearModal(false);
    } else {
      console.log('Cannot dispose bc it is confirmable');
    }
  }

  clickConfirm(): void {
    console.log('Accept modal');
    this.clearModal(true);
  }

  showModal<T>(component: Type<T>, options: ModalOptions): ModalResult<T> {
    console.log('Creating modal');
    // Prepare content and promise
    const result = this.composeModal(component);

    // Config modal
    this.confirmable = false;
    this.disposeLabel = 'Cerrar';
    this.applyModalOptions(options);

    // Last step make it visible
    this.visible = true;
    return result;
  }

  showConfirm<T>(component: Type<T>, options: ModalOptions): ModalResult<T> {
    console.log('Creating confirm');
    // Prepare content and promise
    const result = this.composeModal(component);

    // Config modal
    this.confirmable = true;
    this.disposeLabel = 'Cancelar';
    this.applyModalOptions(options);

    // Last step make it visible
    this.visible = true;
    return result;
  }

  private applyModalOptions(options: ModalOptions): void {
    this.title = options.title;
    this.modalClass = options.type;
  }

  private clearModal(value: boolean): void {
    // Hide
    this.visible = false;
    // Notify event
    this.resolver?.(value);
    // Clear resolver
    this.resolver = undefined;

    this.modalContent.getViewContainerRef().clear(); // leave modal clear
  }

  private composeModal<T>(component: Type<T>): ModalResult<T> {
    return {
      ref: this.showComponent<T>(component),
      promise: this.createPromise()
    };
  }

  private createPromise(): Promise<boolean> {
    if (this.resolver) {
      this.resolver(false);
      this.resolver = undefined;
    }
    return new Promise((resolve) => {
      this.resolver = resolve;
    });
  }

  private showComponent<T>(component: Type<T>): ComponentRef<T> {
    const containerRef = this.modalContent.getViewContainerRef();
    containerRef.clear();
    return containerRef.createComponent<T>(component);
  }

}
