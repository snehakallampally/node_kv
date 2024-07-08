// const http= require('http');//importing http package

// const server=http.createServer((req,res)=>{   //callback function
//     console.log(req.url);
//     res.writeHead(200);
//     res.end("Hello Senha")
// });

// server.listen(3000,()=>{
//     console.log("server is runnng on port 3000");
// })

// node backend
// const express = require("express");
// import employeeRouter from "./employeeRouter";

// import { Request, Response } from "express";
// const server = new express();

// server.get("/emp", (req: Request, res: Response) => {
//   //trequest fired from the api..../emp is the get request from the api
//   console.log(req.url);
//   res.status(200).send("Hello Sneha");
//   console.log("This is Sneha");
// });

// server.get("/myData", (req: Request, res: Response) => {
//   let data: Data = {
//     //inferred datatype
//     profile: {
//       name: "Sneha", ///during declaration defined as string ..else sholdve explicitly refferes the type
//       age: 22,
//     },
//   };
//   // data="dfusdu"      //before it was ts ...there was no error in data declaration now it shows error

//   console.log(data.profile.name);
//   res.status(200).send(data);
// });

// interface Profile {
//   name: string;
//   age: number;
// }

// interface Data {
//   profile: Profile;
// }

const express = require("express");
const server = new express();

import bodyParser from "body-parser";
// import {userRouter,employeeRouter} from "./employeeRouter";
// import employeeRouter from "../employeeRouter";

import loggerMiddleware from "./middleware/logger.middleware";
import { json } from "stream/consumers";
import { DataSource } from "typeorm";
import dataSource from "./db/data-source.db";
import employeeRouter from "./routes/employee.routers";
import HttpException from "./exceptions/http.exceptions";
import errorMiddleware from "./middleware/error.middelware";
import dotenv from "dotenv";
import departmentRouter from "./routes/department.routers";
dotenv.config()

server.use(bodyParser.json());
server.use(loggerMiddleware); //should be used first since the request must go to middleware first and then from there the employeeRouter is called
server.use("/employees", employeeRouter);
server.use("/department",departmentRouter);
server.use(errorMiddleware);


(async () => {
  //this is a function definition
  try {
    await dataSource.initialize();
  } catch (e) {
    console.log("Failed", e);
    process.exit(1);
  }
  server.listen(3000, () => {
    console.log("server listening to 3000");
  });
})();

// server.listen(3000, () => {
//   console.log("server is running on port 3000");
// })();
//npx.tsc : shows all the error in the ts scriot
