import { Router } from 'express';
import ControlerAdimin from '../controler/adiminControler';

const controller = new ControlerAdimin();

const Adimin = Router();

Adimin.get('/', controller.GetAllUsers);

export default Adimin;