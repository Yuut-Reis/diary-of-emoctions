import Role from '../model/role';
import errorHandler from "../../errorHandler";
import MiddlewarePassword from "../middleware/password";

import { IResgister } from "../interface/userInterface";
import middlewareJwt from '../middleware/jwt';
import User from '../model/users';

export default class ServiceUser {
  public model: User;

  constructor() {
    this.model = new User();
  }

  static async getAllUsers(): Promise<unknown> {
    const users = await User.findAll({
        include: [{
            model: Role,
            required: false,
            attributes: {exclude: ['id', 'user_id']},
        }],
        attributes: {exclude: ['password', 'token']},
    });
     return users;
  };
}