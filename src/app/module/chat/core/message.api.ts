import { UserRole } from "jgt-core";

export interface AnonymousAuthor {
  role: UserRole.ANONYMOUS
}

export interface Author {
  id: number;
  role: UserRole.USER;
  name: string;
}

export interface AdminAuthor {
  id: number;
  role: UserRole.ADMIN
}

export type MessageAuthor = Author | AdminAuthor | AnonymousAuthor;

export interface Message {
  author: MessageAuthor;
  ts: Date;
  message: string;
}
