import {Request , Response,NextFunction} from "express";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export const checkUser  = (req:Request,res:Response,next:NextFunction)=>{
    if(req.headers && req.headers.authorization){
        const token = req.headers.authorization.split(" ")[1];
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            res.locals.user = decoded;
            next()
        } catch (error) {
            return res.json({
                code:400,
                message:"Không có quyền truy cập"
            })
        }
        
    }
    else{
        return res.json({
            code:400,
            message:"Không có quyền truy cập"
        })
    }
    // next()
}
