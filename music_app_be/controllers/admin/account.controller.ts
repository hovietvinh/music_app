import {Request , Response} from "express";
import Account from "../../models/account.model";
import md5 from "md5"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

//[POST] /api/admin/accounts/create
export const create = async(req: Request,res: Response)=>{

    try{

        req.body.password = md5(req.body.password);

        const account = new Account(req.body)
        await account.save()
        res.json(account)
    }catch(e){
        res.json({
            code:400,
            message:"Lỗi ở BE"
        })
    }
}


//[POST] /api/admin/accounts/login
export const login = async(req: Request,res: Response)=>{

    try{

        req.body.password = md5(req.body.password);

        const account = await Account.findOne({
            email:req.body.email,
            password: req.body.password 
        })
        if(account){
            const payload = {
                _id:account._id,
                fullName:account.fullName ||"",  
                email:account.email ||"",
             
                phone:account.phone ||"",
                avatar:account.avatar ||"",
                role_id:account.role_id ||"",
                status:account.status ||"",

            }
            const code = jwt.sign(payload,process.env.JWT_SECRET,
                {
                    expiresIn: process.env.JWT_EXPIRE   
                })


            res.json({
                code:200,
                account_token:code,
                accountInfo: payload
            })
        }   
        else{
            res.json({
                code:400,
                message:"Invalid Email/Password!"
            })
        }    
    }catch(e){
        res.json({
            code:400,
            message:"Lỗi ở BE"
        })
    }
}


//[POST] /api/admin/accounts/check
export const check = async(req: Request,res: Response)=>{

    try{

        const {token}  = req.body
        try {
            const decode = jwt.verify(token,process.env.JWT_SECRET)
            res.json({
                code:200,
                account_token:token,
                accountInfo:decode
            })
        } catch (error) {
            res.json({
                code:400,
                message:"Token invalid!"
            })
        }
       
    }catch(e){
        res.json({
            code:400,
            message:"Lỗi ở BE"
        })
    }
}
