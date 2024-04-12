import express, { Application } from "express"
import cors from "cors"
import { mainApp } from "./mainApp"

const app:Application= express()
app.use(express.json())
app.use(cors())

const PORT: number | string = process.env.port || PORT

mainApp(app)

const server = app.listen(PORT,()=>{
    console.log("Up and running");
    
})

process.on("uncaughtException", (err:Error)=>{
    console.log('uncaughtException :', err);
    process.exit(1)
    
})

process.on("unhandledRejection", (reason:any)=>{
    console.log('unhandledRejection :', reason);
    
    server.close(()=>{
        process.exit(1)
    })
})