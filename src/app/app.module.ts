import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './ui/layout/layout.module';
import { AdminChatModule } from './widget/admin-chat/admin-chat.module';
import { ChatService } from './service/chat.service';
import { AbstractAdminChatService } from './widget/admin-chat/abstract-admin-chat-service';

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
    LayoutModule
  ],
  providers: [
    {
      provide: AbstractAdminChatService,
      useExisting: ChatService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
