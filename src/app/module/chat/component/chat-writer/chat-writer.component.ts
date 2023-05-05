import { Component, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ChatService } from 'src/app/service/chat.service';

@Component({
  selector: 'app-chat-writer',
  templateUrl: './chat-writer.component.html',
  styleUrls: ['./chat-writer.component.scss']
})
export class ChatWriterComponent implements OnDestroy {

  message = new FormControl(
    '',
    {
      nonNullable: true,
      validators: [Validators.required]
    }
  );

  subscription = this.message.valueChanges.subscribe(
    v => console.log(`Message: ${v}`)
  );

  constructor(
    private chatService: ChatService
  ) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  clear(): void {
    this.message.setValue('');
  }

  send(): void {
    const actualMessage = this.message.value;
    if (actualMessage) {
      this.chatService.send(actualMessage);
      this.clear();
    }
  }

}
