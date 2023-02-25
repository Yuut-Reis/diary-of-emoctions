import { Router } from 'express';
import ControlerAdimin from '../controler/adiminControler';
import middlewareJwt from '../middleware/jwt';

const controller = new ControlerAdimin();

const Adimin = Router();

Adimin.get('/', middlewareJwt.checkToken ,controller.GetAllUsers);

export default Adimin;