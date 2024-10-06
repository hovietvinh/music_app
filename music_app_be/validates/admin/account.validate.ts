import {Request , Response,NextFunction} from "express";

export const login  = (req:Request,res:Response,next:NextFunction)=>{
    
    if(!req.body.email){
        return res.json({
            code:400,
            message:"Không được để trống email!"
        })
    }
    if(!req.body.password){
        return res.json({
            code:400,
            message:"Không được để trống mật khẩu!"
        })
    }
    next()
}