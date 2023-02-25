import User from '../model/users';
import * as z from 'zod';
import errorHandler from "../../errorHandler";
import MiddlewarePassword from "../middleware/password";

import { ILogin, IUser } from "../interface/userInterface";
import Role from '../model/role';

export default class ServiceLogin {
  public model: User;

  constructor() {
    this.model = new User();
  }

   static async findUser(body: ILogin): Promise<User> {
    const { username, password } = body;
    const user = await User.findOne({
      raw: true,
      where: { username },
    });
    if(!user) {
      return errorHandler('unauthorizedError', 'Incorrect username or password');
    }
    const dbPass = user ? user.password : 'notFound';
    const validateUser: boolean = MiddlewarePassword.checkPassword(password, dbPass);
    
    if (!validateUser) errorHandler('notFoundError', 'Incorrect username or password');

    const data = user
    return data;
  };

  static async getRole(id: number): Promise<string> {
    const data = await Role.findOne({
      where: { user_id: id }
    });

    if (!data) return errorHandler('notFoundError', 'Incorrect username or password');
      
    return data.role
      
  }
}