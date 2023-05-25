import { Pipe, PipeTransform } from '@angular/core';
import { MessageAuthor } from '../core/message.api';
import { UserRole } from 'jgt-core';

@Pipe({
  name: 'messageAuthor'
})
export class MessageAuthorPipe implements PipeTransform {

  transform(value: MessageAuthor): string {
    return value.role == UserRole.ADMIN || value.role == UserRole.ANONYMOUS ?
      value.role.toUpperCase() :
      value.name;
  }

}
