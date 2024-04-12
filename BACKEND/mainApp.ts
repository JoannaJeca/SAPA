import { Application, Response, Request } from "express";
import { stats } from "./Utils/enums";

export const mainApp =(app:Application) =>{ 
    app.use("/")

    app.get("/", (res:Response, req:Request) =>{
        try {
            return res.status(stats.OK).json({
                message:"Default route is working. Please check the other endpoints."
            })
        } catch (error) {
            return res.status(stats.BAD_RESQUET).json({
                message:"An error occured. Please check all endpoints again"
            })
        }
    })
}