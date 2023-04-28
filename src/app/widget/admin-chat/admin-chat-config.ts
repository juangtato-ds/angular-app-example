import { InjectionToken } from '@angular/core';

export const ADMIN_CHAT_CONFIG = new InjectionToken<AdminChatConfig>('admin-chat.config');

export interface AdminChatConfig {
  enabled: boolean;
}
