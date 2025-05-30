export type CreateUser = {
  email: string;
  password: string;
};

export type UserInfo = {
  uid: string;
  firstName?: string;
  language?: string;
  email: string;
  emailVerified?: boolean;
  username?: string;
  userNameChanged?: number;
};

export type User = {
  uid: string;
  email: string;
  emailVerified: boolean;
};
