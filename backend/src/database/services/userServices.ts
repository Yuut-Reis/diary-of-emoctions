import Role from '../model/role';
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
            attributes: {exclude: ['id']},
        }],
        attributes: {exclude: ['password', 'token']},
    });
     return users;
  };
}