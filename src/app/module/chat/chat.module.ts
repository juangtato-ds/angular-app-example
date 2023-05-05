import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { PageSharedModule } from 'src/app/ui/page-shared/page-shared.module';
import { ChatWriterComponent } from './component/chat-writer/chat-writer.component';
import { ChatChannelComponent } from './component/chat-channel/chat-channel.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChatComponent,
    ChatWriterComponent,
    ChatChannelComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,

    ReactiveFormsModule,

    PageSharedModule
  ]
})
export class ChatModule { }
