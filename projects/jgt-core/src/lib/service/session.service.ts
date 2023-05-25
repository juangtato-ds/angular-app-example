import { Injectable } from '@angular/core';
import { UserIdentity, UserRole } from '../core/user-identity.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private sessionChangeSubject = new Subject<UserIdentity>();

  identity?: UserIdentity;

  constructor() {
    const serializedData = localStorage.getItem('user');
    if (serializedData) {
      this.identity = JSON.parse(serializedData);
    }
  }

  getIdentity(): UserIdentity {
    return this.identity || this.getAnonymousUser();
  }

  setIdentity(identity?: UserIdentity): void {
    const oldSession = this.getIdentity();
    this.identity = identity;
    if (oldSession.id !== this.getIdentity().id) {
      this.sessionChangeSubject.next(this.getIdentity());
    }
    if (this.identity) {
      localStorage.setItem('user', JSON.stringify(this.identity));
    } else {
      localStorage.removeItem('user');
    }
  }

  sessionChange(): Observable<UserIdentity> {
    return this.sessionChangeSubject.asObservable();
  }

  getIdentityToken(): string | undefined {
    return this.getIdentity().role === UserRole.ANONYMOUS ? undefined : 'fake-token';
  }

  private getAnonymousUser(): UserIdentity {
    return {
      id: 0,
      name: 'Anonymous',
      role: UserRole.ANONYMOUS,
      attributes: [],
      info: {
        age: 0
      }
    };
  }
}
