import { Pipe, PipeTransform } from '@angular/core';
import { UserIdentity, UserRole } from '../../../core/user-identity.model';

@Pipe({
  name: 'userIdentity'
})
export class UserIdentityPipe implements PipeTransform {

  transform(value: UserIdentity): string | undefined {
    let result : string;
    if (value.role == UserRole.ADMIN) {
      result = `Mr. ${value.name}`;
    } else if (value.role == UserRole.ANONYMOUS) {
      result =  UserRole.ANONYMOUS.toUpperCase();
    } else {
      result = value.info.alias || value.name + ' ' +(value.info.surname || '');
    }
    return result
  }

}
