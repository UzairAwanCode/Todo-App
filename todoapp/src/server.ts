import express, {Request, Response} from "express";
import connectToDataBase from "./db";

const appliction = express()

const PORT = 1337

connectToDataBase()

appliction.get("/ping", (request: Request, response: Response)=>{
    response.send("pong")
})

appliction.listen(PORT, ()=>{
    console.log("Server Running");
    
})