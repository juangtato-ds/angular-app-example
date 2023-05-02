import { Message } from "../module/chat/core/message.api";
import { MessageFilter } from "../module/chat/service/message/message-filter";

export class InvalidWordsMessageFilter implements MessageFilter {
  constructor(
    private blackList: Array<string>
  ) {
    console.log(`Working with black list: ${this.blackList}`);
  }

  isValid(message: Message): boolean {
    let result = true;
    for (const w of this.blackList) {
      if (message.message.indexOf(w) != -1) {
        result = false;
        break;
      }
    }
    return result;
  }
}
