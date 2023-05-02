import { Injectable } from '@angular/core';
import { AbstractAdminChatService } from '../widget/admin-chat/abstract-admin-chat-service';
import { MessageFilterService } from '../module/chat/service/message-filter.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService extends AbstractAdminChatService {

  constructor(
    private filter: MessageFilterService
  ) {
    super();
  }

  override sendAsAdmin(message: string): void {
    console.log('Sending message as admin:', message);
    // Logic pending
  }
}
