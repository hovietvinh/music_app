import {Request , Response} from "express";
import FavoriteSong from "../../models/favorite-song.model";
import User from "../../models/user.model";



//[POST] /api/favorite-songs
export const index = async (req:Request,res:Response)=>{
    try {
        // console.log(123);
        
        const user = res.locals.user;
        const newUser = await User.findOne({
            email:user.email
        })
    

        const fav = await FavoriteSong.findOne({
            userId:newUser._id
        })
        // console.log(fav);
        

        if(fav){
            return res.json({
                code:200,
                data:fav
            })
        }
        else{
            return res.json({
                code:200,
                data:{},
                // message:"Khong tim thay"
            })
        }
        

    } catch (error) {
        res.json({
            code:400,
            message:"Lỗi ở BE"
        })
    }
}