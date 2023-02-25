import * as jwt from 'jsonwebtoken';
import { IResgister, IRole, IUser } from '../interface/userInterface';
import { Request, Response, NextFunction } from 'express';
import errorHandler from '../../errorHandler';
import User from '../model/users';

const { JWT_SECRET } = process.env;

const jwtConfig: jwt.SignOptions = {
  expiresIn: '30d',
  algorithm: 'HS256',
};

const mysecret: jwt.Secret = JWT_SECRET || 'secret';

const middlewareJwt = {
  create({ username, role }: IUser): string {
    const token = jwt.sign({ username, role }, mysecret, jwtConfig);
    return token;
  },

  async checkToken(req: Request, _res: Response, next: NextFunction) {
    const token = req.headers.authorization as unknown as string;
    if (!token) errorHandler('unauthorizedError', 'Token not found');
    const { username } = jwt.verify(token, mysecret) as IUser;
    console.log(token)
    try {
      const findUser = await User.findOne({ where: { username } });
      if (!findUser) return errorHandler('unauthorizedError', 'Expired or invalid token');
      return next();
    } catch (error) {
      return errorHandler('unauthorizedError', 'Token must be a valid token');
    }
  },
  
  tokenDecode(token: string) {
    try {
      return jwt.decode(token);
    } catch (error) {
      errorHandler('unauthorizedError', 'invalid token');
    }
  },
};

export default middlewareJwt;