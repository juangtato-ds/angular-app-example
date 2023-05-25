import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { ChatWriterComponent } from './component/chat-writer/chat-writer.component';
import { ChatChannelComponent } from './component/chat-channel/chat-channel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IdentitySharedModule } from '../../shared/identity-shared/identity-shared.module';
import { MessageAuthorPipe } from './pipe/message-author.pipe';
import { MessageAuthorDirective } from './directive/message-author.directive';
import { PageSharedModule } from 'jgt-layout';


@NgModule({
  declarations: [
    ChatComponent,
    ChatWriterComponent,
    ChatChannelComponent,
    MessageAuthorPipe,
    MessageAuthorDirective
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,

    ReactiveFormsModule,

    PageSharedModule,
    IdentitySharedModule
  ]
})
export class ChatModule { }
