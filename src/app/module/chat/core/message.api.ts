import { UserRole } from "src/app/core/user-identity.model";

export interface AnonymousAuthor {
  id: string;
  role: UserRole.ANONYMOUS
}

export interface Author {
  id: string;
  role: UserRole.USER;
  name: string;
}

export interface AdminAuthor {
  role: UserRole.ADMIN
}

export type MessageAuthor = Author | AdminAuthor | AnonymousAuthor;

export interface Message {
  author: MessageAuthor;
  ts: Date;
  message: string;
}
