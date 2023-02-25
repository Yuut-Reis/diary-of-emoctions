import errorHandler from '../../errorHandler';
import { z } from 'zod';
import { IResgister, IRole } from '../interface/userInterface';

const zodSchemas = {
    async validateRegister(payload: IResgister) {
        const schema = z.object({
            name: z.string().max(25),
            username: z.string().max(25),
            password: z.string().min(6).max(12),
            pronoun: z.string(),
          });
          try {
            await schema.parseAsync(payload)
          } catch (err) {
            errorHandler('validationError', 'All fields must be filled.');
          }
    },

    async validateLogin(payload: IResgister) {
      const schema = z.object({
          username: z.string().max(25),
          password: z.string().min(6).max(12),
        });
        try {
          await schema.parseAsync(payload)
        } catch (err) {
          errorHandler('validationError', 'Invalid token.');
        }
  }
};

export default zodSchemas;