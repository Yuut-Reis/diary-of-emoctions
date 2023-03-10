import 'express-async-errors';
import * as express from 'express';
import errorMiddlewate from './database/middleware/error';
import Login from './database/routes/loginRoute';
import Register from './database/routes/registerRoute';
import Adimin from './database/routes/adiminRoute';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    // Não remover essa rota
    this.app.get('/', (req, res) => res.json({ ok: true }));
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);

    this.app.use('/login', Login);
    this.app.use('/register', Register);
    this.app.use('/adimin', Adimin);

    this.app.use(errorMiddlewate);

  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

export const { app } = new App();