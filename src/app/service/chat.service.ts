import { Injectable } from '@angular/core';
import { AbstractAdminChatService } from '../widget/admin-chat/abstract-admin-chat-service';
import { MessageFilterService } from '../module/chat/service/message-filter.service';
import {  Message } from '../module/chat/core/message.api';
import { UserRole } from '../core/user-identity.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService extends AbstractAdminChatService {

  constructor(
    private filter: MessageFilterService
  ) {
    super();
  }

  send(message: string): boolean {
    return this.notify({
      author: {
        id: 'fake',
        role: UserRole.ANONYMOUS
      },
      ts: new Date(),
      message
    });
  }

  override sendAsAdmin(message: string): void {
    console.log('Sending message as admin:', message);
    // Logic pending
  }

  private notify(message: Message): boolean {
    return !! this.filter.filter(message);
  }
}
