import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminChatComponent } from './admin-chat.component';
import { FormsModule } from '@angular/forms';
import { ADMIN_CHAT_CONFIG, AdminChatConfig } from './admin-chat-config';



@NgModule({
  declarations: [
    AdminChatComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AdminChatComponent
  ]
})
export class AdminChatModule {
  static forRoot(
    config: AdminChatConfig
  ): ModuleWithProviders<AdminChatModule> {
    return {
      ngModule: AdminChatModule,
      providers: [
        {
          provide: ADMIN_CHAT_CONFIG,
          useValue: config
        }
      ]
    };
  }
}
