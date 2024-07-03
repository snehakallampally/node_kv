// const http= require('http');//importing http package

// const server=http.createServer((req,res)=>{   //callback function
//     console.log(req.url);
//     res.writeHead(200);
//     res.end("Hello Senha")
// });

// server.listen(3000,()=>{
//     console.log("server is runnng on port 3000");
// })

const express = require("express");
import {Request,Response} from "express";
const server = new express();

server.get("/emp", (req:Request, res:Response) => {
  console.log(req.url);
  res.status(200).send("Hello Sneha");
  console.log("This is Sneha");
});

server.get("/myData", (req:Request, res:Response) => {
  let data: Data = {        //inferred datatype
    profile: {
      name: "Sneha",    ///during declaration defined as string ..else sholdve explicitly refferes the type
      age: 22,
    },
  };
  // data="dfusdu"      //before it was ts ...there was no error in data declaration now it shows error
  console.log(data.profile.name);
  res.status(200).send(data);
});

interface Profile{
  name:string,
  age:number
}

interface Data{
  profile:Profile
}

server.listen(3000, () => {
  console.log("server is running on port 3000");
});
//npx.tsc : shows all the error in the ts scriot