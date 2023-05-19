import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ChatService } from '../../../../service/chat.service';
import { SessionService } from '../../../../service/session.service';
import { UserIdentity } from '../../../../core/user-identity.model';
import { ModalService } from '../../../../ui/layout/service/modal.service';
import { ModalType } from '../../../../ui/layout/service/modal.api';

@Component({
  selector: 'app-chat-writer',
  templateUrl: './chat-writer.component.html',
  styleUrls: ['./chat-writer.component.scss']
})
export class ChatWriterComponent implements OnInit {
  identity!: UserIdentity;

  message = new FormControl(
    '',
    {
      nonNullable: true,
      validators: [Validators.required]
    }
  );

  constructor(
    private chatService: ChatService,
    private sessionService: SessionService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.identity = this.sessionService.getIdentity();
  }

  clear(): void {
    this.message.setValue('');
  }

  send(): void {
    const actualMessage = this.message.value;
    if (actualMessage) {
      this.chatService.send(actualMessage).subscribe({
        next: v => {
          if (v) {
            console.log('Happy path');
            this.clear();
          } else {
            this.modalService.modal('No se pudo enviar el mensaje, revisa el texto', { type: ModalType.ERROR });
          }
        },
        error: e => {
          this.modalService.modal('Error: ' + e, { type: ModalType.ERROR });
          console.log('Error', e);
        }
      });
    }
  }

}
