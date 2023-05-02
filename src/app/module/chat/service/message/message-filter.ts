import { InjectionToken } from "@angular/core";
import { Message } from "../../core/message.api";

export const CHAT_MESSAGE_FILTER = new InjectionToken<MessageFilter>('chat.message-filter');

export interface MessageFilter {
  isValid(message: Message): boolean;
}
