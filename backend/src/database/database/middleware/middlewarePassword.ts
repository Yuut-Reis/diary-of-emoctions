import * as bcrypt from 'bcryptjs';

export default class MiddlewarePassword {
  static checkPassword(userPassword: string, dbPassword: string): boolean {
    return bcrypt.compareSync(userPassword, dbPassword);
  };

  static cryptPassword(password: string): string {
    const test = bcrypt.hashSync(password);
  return test;
};
}