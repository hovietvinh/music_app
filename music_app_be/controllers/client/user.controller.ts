import {Request , Response} from "express";
import md5 from "md5"
import User from "../../models/user.model";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()
//[POST] /api/users/register
export const register = async(req: Request,res: Response)=>{
    try{
        
        const existEmail = await User.findOne({
            email:req.body.email,
            deleted:false
        })
        if(existEmail){
            return res.json({
                code:400,
                message:"Email đã tồn tại"
            })
        }

        // console.log(md5("mat khau"));
        req.body.password = md5(req.body.password)

        const users = new User(req.body)
        await users.save()
        
        

        res.json({
            code:200,
            message:"Đăng ký thành công"
        });

    }catch(e){
        return res.json({
            code:400,
            message:"Lỗi ở BE"
        })
    }
}

//[POST] /api/users/login
export const login = async(req: Request,res: Response)=>{
    try{
        
        const existEmail = await User.findOne({
            email:req.body.email,
            deleted:false
        })
        if(!existEmail){
            return res.json({
                code:400,
                message:"Email không tồn tại"
            })
        }

        if(existEmail.status !="active"){
            return res.json({
                code:400,
                message:"Tài khoản đã bị khóa"
            })
        }
        if(existEmail.password!= md5(req.body.password)){
            return res.json({
                code:400,
                message:"Mật khẩu không chính xác"
            })
        }


        const payload ={
            _id:existEmail._id,
            email:existEmail.email,
            fullName:existEmail.fullName
        }

        const user_token = jwt.sign(
            payload,
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRE   
            }
        )

        res.json({
            code:200,
            user_token:user_token,
            userInfo: payload
        });

    }catch(e){
        return res.json({
            code:400,
            message:"Lỗi ở BE"
        })
    }
}

//[POST] /api/users/checkUser/:code
export const checkUser = async(req: Request,res: Response)=>{
    try {
        const code = req.params.code
        try {
            let decoded = jwt.verify(code, process.env.JWT_SECRET)
            const user = await User.findOne({
                email:decoded.email
            })
            decoded._id = user._id

            res.json({
                code:200,
                user_token:code,
                userInfo:decoded
            })
        } catch (error) {
            return res.json({
                code:400,
                message:"Không có quyền truy cập"
            })
        }
    } catch (error) {
        return res.json({
            code:400,
            message:"Lỗi ở BE"
        })
    }

}