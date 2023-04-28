import { Injectable } from '@angular/core';
import { AbstractAdminChatService } from '../widget/admin-chat/abstract-admin-chat-service';

@Injectable({
  providedIn: 'root'
})
export class ChatService extends AbstractAdminChatService {

  constructor() {
    super();
  }

  override sendAsAdmin(message: string): void {
    console.log('Sending message as admin:', message);
    // Logic pending
  }
}
