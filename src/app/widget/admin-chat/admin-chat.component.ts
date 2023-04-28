import { Component, Inject } from '@angular/core';
import { AbstractAdminChatService } from './abstract-admin-chat-service';
import { ADMIN_CHAT_CONFIG, AdminChatConfig } from './admin-chat-config';

@Component({
  selector: 'app-admin-chat',
  templateUrl: './admin-chat.component.html',
  styleUrls: ['./admin-chat.component.scss']
})
// ...
export class AdminChatComponent {

  message: string = '';

  constructor(
    @Inject(ADMIN_CHAT_CONFIG)
    public config: AdminChatConfig,
    private adminChatService: AbstractAdminChatService
  ) {}

  sendMessage(): void {
    if (this.config.enabled && this.message) {
      // just-in-case
      this.adminChatService.sendAsAdmin(this.message);
      this.message = '';
    }
  }
}
