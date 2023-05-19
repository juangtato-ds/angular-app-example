import { Observable } from "rxjs";

export abstract class AbstractAdminChatService {
  abstract sendAsAdmin(message: string): Observable<boolean>;
}
