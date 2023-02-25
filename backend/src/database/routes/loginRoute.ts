import { Router } from 'express';
import ControlerLogin from '../controler/loginControler';

const conttroler = new ControlerLogin();

const Login = Router();

Login.post('/', conttroler.Login);

export default Login;