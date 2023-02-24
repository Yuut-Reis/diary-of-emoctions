import { Request, Response } from "express";
import ServiceLogin from "../services/loginServices";

export default class ControlerLogin {
  public Login = async (req: Request, res: Response) => {
    const { body } = req;
    await ServiceLogin.bodyValidade(body);
    const user = await ServiceLogin.findUser(body);
    const token = ServiceLogin.generateToken(user);
    res.status(200).json({ token })
  };

  public ValidateToken = async (req: Request, res: Response) => {
    const auth = req.headers.authorization;
    const token = auth || 'fail';
    const username = ServiceLogin.decodeToken(token);
    res.status(200).json({ username });
  };
};