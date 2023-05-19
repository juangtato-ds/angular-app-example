import { Injectable } from '@angular/core';
import { AbstractAdminChatService } from '../widget/admin-chat/abstract-admin-chat-service';
import { MessageFilterService } from '../module/chat/service/message-filter.service';
import { Message, MessageAuthor } from '../module/chat/core/message.api';
import { UserIdentity, UserRole } from '../core/user-identity.model';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, map, of, tap } from 'rxjs';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService extends AbstractAdminChatService {

  private static API_URL = '/api/messages/';

  private messageSubject = new Subject<Message>();

  constructor(
    private http: HttpClient,
    private filter: MessageFilterService,
    private sessionService: SessionService
  ) {
    super();
  }

  send(message: string): Observable<boolean> {
    return this.notify({
      author: this.mapAuthor(this.sessionService.getIdentity()),
      ts: new Date(),
      message
    });
  }

  fetchLastMessages(): Observable<Array<Message>> {
    return this.http.get<Array<Message>>(ChatService.API_URL);
  }

  messageSink(): Observable<Message> {
    return this.messageSubject.asObservable();
  }

  override sendAsAdmin(message: string): Observable<boolean> {
    console.log('Sending message as admin:', message);
    return this.notify({
      author: {
        id: -1, // fake id
        role: UserRole.ADMIN
      },
      ts: new Date(),
      message
    });
  }

  private notify(message: Message): Observable<boolean> {
    const filtered = this.filter.filter(message);
    return filtered ?
      this.http.post<Message>(
        ChatService.API_URL,
        filtered
      ).pipe(
        tap(v => console.log('Persisted', v)), // logs
        tap(v => this.messageSubject.next(v)), // hack, notify other components
        map(v => true),
      ) : of(false);
  }

  private mapAuthor(identity: UserIdentity): MessageAuthor {
    let result: MessageAuthor;
    if (identity.role == UserRole.ANONYMOUS) {
      result = { role: UserRole.ANONYMOUS };
    } else if (identity.role == UserRole.ADMIN) {
      result = {
        id: identity.id,
        role: UserRole.ADMIN
      };
    } else {
      result = {
        id: identity.id,
        name: identity.info.alias || identity.name,
        role: identity.role
      };
    }
    return result;
  }
}
