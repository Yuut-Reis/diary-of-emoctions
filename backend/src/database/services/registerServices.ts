import User from '../model/users';
import errorHandler from "../../errorHandler";
import MiddlewarePassword from "../middleware/password";

import { IResgister } from "../interface/userInterface";
import Role from '../model/role';
import middlewareJwt from '../middleware/jwt';

export default class ServiceLogin {
  public model: User;

  constructor() {
    this.model = new User();
  }

  static async createUser(body: IResgister): Promise<unknown> {
    const { name, username, password, pronoun } = body;
    const user = await User.findOne({
      where: { username },
    });

    const token =  middlewareJwt.create({ role: "FREEUSER", username })
    const hash = MiddlewarePassword.cryptPassword(password);
    
    if(!user) {
      const { id } = await User.create({
        name,
        password: hash,
        username,
        pronoun,
        token,
      });

      await Role.create({
        user_id: id,
        role: "FREEUSER"
      });
      
      try {
        return token;
      } catch (err) {
        errorHandler('sequelizeError', 'Internal server error.');
      }
    }
    errorHandler('validationError', 'User already exists.');
  };
}