import { ComponentRef } from "@angular/core";

export interface ModalResult<T> {
  ref: ComponentRef<T>;
  promise: Promise<boolean>;
}

export interface TextModalResult {
  promise: Promise<boolean>;
}

export enum ModalType {
  ERROR = 'modal-error',
  WARNING = 'modal-warning',
  INFO = 'modal-info',
  SUCCESS = 'modal-success'
}

export interface ModalOptions {
  type: ModalType;
  title?: string;
}
