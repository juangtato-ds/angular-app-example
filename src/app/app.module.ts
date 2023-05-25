import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminChatModule } from './widget/admin-chat/admin-chat.module';
import { ChatService } from './service/chat.service';
import { AbstractAdminChatService } from './widget/admin-chat/abstract-admin-chat-service';
import { CHAT_MESSAGE_FILTER } from './module/chat/service/message/message-filter';
import { InvalidWordsMessageFilter } from './extra/invalid-words.message-filter';

import { NonEmptyMessageFilter } from './module/chat/service/message/non-empty.message-filter';
import { HttpClientModule } from '@angular/common/http';

// ...
import { environment } from 'src/environments/environment';
import { WordService } from './service/word.service';
import { SecurityModule } from './shared/security/security.module';
import { LayoutModule } from 'jgt-layout';

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

    HttpClientModule,

    SecurityModule.forRoot([
      '/api/messages'
    ]),
    AdminChatModule.forRoot({
      enabled: true
    }),
    LayoutModule.forRoot(),
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
