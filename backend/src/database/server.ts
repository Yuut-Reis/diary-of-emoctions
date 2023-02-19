import { App } from './app';
import 'dotenv/config';

const PORT = process.env.APP_PORT || 5432;

new App().start(PORT);