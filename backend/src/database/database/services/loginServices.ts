import User from '../model/users';
import * as z from 'zod';
import errorHandler from "../../errorHandler";
import MiddlewarePassword from "../middleware/middlewarePassword";
import middlewareJwt from "../middleware/jtwMiddleware";

import { ILoginResgister, IUser } from "../interface/userInterface";

export default class ServiceLogin {
  public model: User;

  constructor() {
    this.model = new User();
  }

  static async bodyValidade(body: ILoginResgister) {
    const schema = z.object({
      username: z.string().max(255),
      password: z.string().min(8).max(255),
    });
    try {
      await schema.parseAsync(body)
    } catch (err) {
      errorHandler('validationError', 'All fields must be filled');
    }
  };

  static async findUser(body: ILoginResgister): Promise<string> {
    const { username, password } = body;
    const user = await User.findOne({
      where: { username },
    });
    if(!user) {
      return errorHandler('unauthorizedError', 'Incorrect username or password');
    }
    const dbPass = user ? user.password : 'notFound';
    const validateUser: boolean = MiddlewarePassword.checkPassword(password, dbPass);

    if (!validateUser) errorHandler('notFoundError', 'User not found');

    const data = user.dataValues.username
    return data;
  };

  static generateToken(infos: string) {
    const newToken = middlewareJwt.create(infos);
    return newToken;
  };

  static decodeToken(token: string): string {
    const decode = middlewareJwt.tokenDecode(token);
    const { username } = decode as IUser;
    return username;
  }
}