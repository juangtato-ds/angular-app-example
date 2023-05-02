import { Injectable } from "@angular/core";
import { MessageFilter } from "./message-filter";
import { Message } from "../../core/message.api";

@Injectable()
export class NonEmptyMessageFilter implements MessageFilter {
  isValid(message: Message): boolean {
    // !! '' === false
    // !! undefined === false
    // !! null === false
    const result = !!message.message;
    console.log(`[MessageFilter] non empty: ${result}`);
    return result;
  }
}
