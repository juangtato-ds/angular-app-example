import { Type } from "@angular/core";
import { ModalOptions, ModalResult, TextModalResult } from "./modal.api";

export abstract class ModalService {

  abstract modal(text: string): TextModalResult;
  abstract modal(text: string, options: ModalOptions): TextModalResult;
  abstract modal<T>(component: Type<T>): ModalResult<T>;
  abstract modal<T>(component: Type<T>, options: ModalOptions): ModalResult<T>;

  abstract confirm(text: string): TextModalResult;
  abstract confirm(text: string, options: ModalOptions): TextModalResult;
  abstract confirm<T>(component: Type<T>): ModalResult<T>;
  abstract confirm<T>(component: Type<T>, options: ModalOptions): ModalResult<T>;

  /**
   * TODO - create shortcuts
   *
   * error(text: string, title?: string): Promise<boolean>;
   * error(component: Type<T>, title?: string): Promise<boolean>
   *
   * and many more
   */
}
