import { App } from './app';
import 'dotenv/config';

const PORT = process.env.APP_PORT || 3050;

new App().start(PORT);