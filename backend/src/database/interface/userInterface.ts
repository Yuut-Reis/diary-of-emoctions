export interface IUser {
  id?: number;
  username?: string;
  password?: string;
  name?: string;
  role?: string;
}

export interface IResgister {
  username: string,
  name: string,
  password: string,
  pronoun: string,
}

export interface ILogin {
  username: string,
  password: string,
}

export interface IToken {
  token: string,
}

export interface IRole {
  role: string,
}