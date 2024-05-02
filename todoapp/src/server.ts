import express, {Request, Response} from "express";
import connectToDataBase from "./db";
import userRoutes from "./routes/user.routes";
import categoryRoutes from "./routes/category.routes";

const application = express()
application.use(express.json())

const PORT = 1337

connectToDataBase()

application.get("/ping", (request: Request, response: Response)=>{
    response.send("pong")
})

application.use("/user", userRoutes)
application.use("/category", categoryRoutes)

application.listen(PORT, ()=>{
    console.log("Server Running");
    
})