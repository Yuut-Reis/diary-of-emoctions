export interface IUser {
  id?: number;
  username: string;
  password: string;
  email: string;
}

export interface ILoginResgister {
  username: string,
  password: string,
}

export interface IToken {
  token: string,
}