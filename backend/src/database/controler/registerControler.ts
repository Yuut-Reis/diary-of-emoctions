import { Request, Response } from 'express';
import ServiceRegister from '../services/registerServices';
import zodSchemas from '../middleware/zod';

export default class ControlerLogin {
  public Register = async (req: Request, res: Response) => {
    const { body } = req;
    await zodSchemas.validateRegister(body);
    const token = await ServiceRegister.createUser(body);
    res.status(200).json({ token })
  };
};