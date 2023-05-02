import { Inject, Injectable, Optional } from '@angular/core';
import { CHAT_MESSAGE_FILTER, MessageFilter } from './message/message-filter';
import { Message } from '../core/message.api';

@Injectable({
  providedIn: 'root'
})
export class MessageFilterService {
  private messageFilterList: Array<MessageFilter>;
  constructor(
    @Optional() @Inject(CHAT_MESSAGE_FILTER)
    filterList: Array<MessageFilter> | null
  ) {
    console.log(filterList);
    this.messageFilterList = filterList || [];
  }

  filter(message: Message): Message | undefined;
  filter(messageList: Array<Message>): Array<Message>;
  filter(data: Message | Array<Message>): Message | Array<Message> | undefined {
    if (Array.isArray(data)) {
      return data.filter(m => this.isValid(m));
    } else {
      return (this.isValid(data)) ? data : undefined;
    }
  }

  isValid(message: Message): boolean {
    let result = true;
    for (const filter of this.messageFilterList) {
      if (!filter.isValid(message)) {
        result = false;
        break;
      }
    }
    return result;
  }
}
