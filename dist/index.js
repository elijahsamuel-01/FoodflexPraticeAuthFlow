"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mainApp_1 = require("./mainApp");
const dbConfig_1 = require("./utils/dbConfig");
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
const port = process.env.PORT || 2211;
dotenv_1.default.config();
const URL = process.env.DATABASE_STRING;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
(0, mainApp_1.mainApp)(app);
app.listen(2211, () => {
    console.clear();
    console.log(port);
    (0, dbConfig_1.mainConnection)();
});
// const server = app.listen(port, () => {
//   console.log("connected 👌👍");
// });
// process.on("uncaughtException", (err: Error) => {
//   console.log("uncaughtException: ", err);
//   process.exit(1);
// });
// process.on("unhandledRejection", (reason: any) => {
//   console.log("unhandledRejection: ", reason);
//   server.close(() => {
//     process.exit(1);
//   });
// });
