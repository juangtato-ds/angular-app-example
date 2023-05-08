import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './ui/layout/layout.module';
import { AdminChatModule } from './widget/admin-chat/admin-chat.module';
import { ChatService } from './service/chat.service';
import { AbstractAdminChatService } from './widget/admin-chat/abstract-admin-chat-service';
import { CHAT_MESSAGE_FILTER } from './module/chat/service/message/message-filter';
import { InvalidWordsMessageFilter } from './extra/invalid-words.message-filter';

import { NonEmptyMessageFilter } from './module/chat/service/message/non-empty.message-filter';

// ...
import { environment } from 'src/environments/environment';
import { WordService } from './service/word.service';
function invalidWordsMessageFilterFactory(wordService: WordService): InvalidWordsMessageFilter {
  return new InvalidWordsMessageFilter(
    [... environment.message.invalidWords, ... wordService.getAdditionalBlackList()]
  );
}
//...

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AdminChatModule.forRoot({
      enabled: true
    }),
    LayoutModule,

  ],
  providers: [
    {
      provide: AbstractAdminChatService,
      useExisting: ChatService
    },
    {
      provide: CHAT_MESSAGE_FILTER,
      useFactory: invalidWordsMessageFilterFactory,
      deps: [WordService],
      multi: true
    },
    {
      provide: CHAT_MESSAGE_FILTER,
      useClass: NonEmptyMessageFilter,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
