export enum AuthorRole {
  ADMIN = 'admin',
  USER = 'user',
  ANONYMOUS = 'anonymous'
}

export interface AnonymousAuthor {
  id: string;
  role: AuthorRole.ANONYMOUS
}

export interface Author {
  id: string;
  role: AuthorRole.USER;
  name: string;
}

export interface AdminAuthor {
  role: AuthorRole.ADMIN
}

export type MessageAuthor = Author | AdminAuthor | AnonymousAuthor;

export interface Message {
  author: MessageAuthor;
  ts: Date;
  message: string;
}
