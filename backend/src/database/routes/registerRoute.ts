import { Router } from 'express';
import ControlerRegister from '../controler/registerControler';

const register = new ControlerRegister();

const Register = Router();

Register.post('/', register.Register);

export default Register;