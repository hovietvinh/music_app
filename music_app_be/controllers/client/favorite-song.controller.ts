import {Request , Response} from "express";
import FavoriteSong from "../../models/favorite-song.model";
import Singer from "../../models/singer.model";
import Song from "../../models/song.model";
import User from "../../models/user.model";



//[GET] /api/favorite-songs
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
            // let newData = fav

            // let songsIdObject = newData.songsId

            let newSongsId = []
            
            
            
            for(const item of fav.songsId){
                // console.log(item);
                const info = await Song.findOne({_id:item._id}).select("title avatar description singerId topicId like slug")
                const singer = await Singer.findOne({_id:info.singerId}) 

                let newInfo = {
                    ...info,
                    infoSinger:singer
                }

                // console.log(info);
                // newData.songsId["info"] = info
                // const newItem ={...item,info:info}
                console.log(item);
                const newItem = {
                    _id:item._id,
                    info:newInfo
                }
                newSongsId.push(newItem) 
                
            }
            console.log(fav);
            let newData = {
                ...fav,
                songsId:newSongsId
            }
            
            // console.log(newData);
            
            return res.json({
                code:200,
                data:newData
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