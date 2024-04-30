import express, {Request, Response} from "express";

const appliction = express()

const PORT = 1337

appliction.get("/ping", (request: Request, response: Response)=>{
    response.send("pong")
})

appliction.listen(PORT, ()=>{
    console.log("Server Running");
    
})