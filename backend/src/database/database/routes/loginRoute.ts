import { Router } from 'express';
import ControlerLogin from '../controler/loginControler';

const conttroler = new ControlerLogin();

const Login = Router();

Login.post('/', conttroler.Login);
Login.get('/validate', conttroler.ValidateToken);

export default Login;