"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
require("dotenv/config");
const PORT = process.env.APP_PORT || 5432;
new app_1.App().start(PORT);
//# sourceMappingURL=server.js.map