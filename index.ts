import express, { Application } from "express";
import cors from "cors";
import { mainApp } from "./mainApp";
import { mainConnection } from "./utils/dbConfig";
import dotEnv from "dotenv";

const app: Application = express();
const port: number | string = process.env.PORT || 2211;
dotEnv.config();

const URL: string | undefined = process.env.DATABASE_STRING;

app.use(cors());
app.use(express.json());

mainApp(app);

app.listen(2211, () => {
  console.clear();
  console.log(port);
  mainConnection();
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
