import { Component, Inject } from '@angular/core';
import { AbstractAdminChatService } from './abstract-admin-chat-service';
import { ADMIN_CHAT_CONFIG, AdminChatConfig } from './admin-chat-config';
import { ModalService } from '../../ui/layout/service/modal.service';
import { ModalType } from '../../ui/layout/service/modal.api';

@Component({
  selector: 'app-admin-chat',
  templateUrl: './admin-chat.component.html',
  styleUrls: ['./admin-chat.component.scss']
})
export class AdminChatComponent {

  message: string = '';

  constructor(
    @Inject(ADMIN_CHAT_CONFIG)
    public config: AdminChatConfig,
    private adminChatService: AbstractAdminChatService,
    private modalService: ModalService
  ) { }

  sendMessage(): void {
    if (this.config.enabled && this.message) {
      // just-in-case
      this.adminChatService.sendAsAdmin(this.message).subscribe({
        next: v => console.log(`Message sent? ${v}`),
        error: e => {
          this.modalService.modal(`Message lost bc: ${e}`, { type: ModalType.ERROR });
          console.log('There was some kind of error', e);
        }
      });
      this.message = '';
    }
  }
}
