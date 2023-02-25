import { Request, Response } from 'express';
import middlewareJwt from '../middleware/jwt';
import zodSchemas from '../middleware/zod';
import ServiceLogin from '../services/loginServices';

export default class ControlerLogin {
  public Login = async (req: Request, res: Response) => {
    const { body } = req;
    await zodSchemas.validateLogin(body);
    const { name, username, id } = await ServiceLogin.findUser(body);
    console.log(`test`)
    const role =  await ServiceLogin.getRole(id);
    const token = middlewareJwt.create({ username, role });
    res.status(200).json({ token, role, name })
  };
};