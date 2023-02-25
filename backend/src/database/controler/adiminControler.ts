import { Request, Response } from 'express';
import ServiceUser from '../services/userServices';

export default class ControlerLogin {
  public GetAllUsers = async (_req: Request, res: Response) => {
    const users = await ServiceUser.getAllUsers()
    res.status(200).json({ users })
  };
};