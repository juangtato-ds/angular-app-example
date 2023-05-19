import { Component, OnDestroy, OnInit } from '@angular/core';
import { Message } from '../../core/message.api';
import { ChatService } from '../../../../service/chat.service';
import { Subscription, catchError, of, timer } from 'rxjs';
import { ConfigService } from '../../../../service/config.service';

@Component({
  selector: 'app-chat-channel',
  templateUrl: './chat-channel.component.html',
  styleUrls: ['./chat-channel.component.scss']
})
export class ChatChannelComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();

  messages: Array<Message> = [];

  constructor(
    private chatService: ChatService,
    private configService: ConfigService
  ) { }

  ngOnInit(): void {
    this.subscription.add(
      this.chatService.messageSink().subscribe(m => this.appendMessage(m))
    );
    this.fetchLastMessages();
    const delay = this.configService.get<number>('chat.polling', 1000);
    this.subscription.add(
      timer(delay, delay).subscribe(v => this.fetchLastMessages())
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private fetchLastMessages(): void {
    this.chatService.fetchLastMessages().pipe(
      catchError(
        e => {
          console.log('There was an error fetching messages:', e);
          return of([]);
        }
      )
    ).subscribe(messages => this.messages = messages);
  }

  private appendMessage(message: Message): void {
    this.messages.push(message);
  }

}
