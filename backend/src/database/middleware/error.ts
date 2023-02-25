
import { Request, Response, NextFunction } from 'express';

const errors: Record<string, number> = {
  validationError: 400,
  unauthorizedError: 401,
  notFoundError: 404,
  sequelizeError: 409,
};

const errorMiddlewate = (
  { name, message }: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  console.log(message)
  const status = errors[name];
  if (!status) {
    return res.sendStatus(500)
  };
  console.log(message)
  return res.status(status).json({ message });
};

export default errorMiddlewate;