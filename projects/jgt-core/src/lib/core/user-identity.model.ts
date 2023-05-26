export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  ANONYMOUS = 'anonymous'
}

export const userRoleMap: { [key: string]: UserRole } = {
  admin: UserRole.ADMIN,
  user: UserRole.USER,
  anonymous: UserRole.ANONYMOUS
};

export const userRoleList = [
  UserRole.ADMIN,
  UserRole.USER,
  UserRole.ANONYMOUS
];

export interface UserIdentity extends NewUserIdentity {
  id: number;
}

export interface NewUserIdentity {
  name: string;
  role: UserRole;
  attributes: Array<string>;
  info: {
    surname?: string;
    alias?: string;
    age: number;
  }
}
