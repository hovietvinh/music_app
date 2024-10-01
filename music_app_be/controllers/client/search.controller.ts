import {Request , Response} from "express";
import { convertToSlug } from "../../helpers/convertToSlug";
import Singer from "../../models/singer.model";
import Song from "../../models/song.model";



//[GET] /api/search/result
export const result = async(req: Request,res: Response)=>{
    try{
        const keyword:string = `${req.query.keyword}`
        
        let newSongs = []

        if(keyword){
            const keywordRegex = new RegExp(keyword,"i");
            const slug:string = convertToSlug(keyword)
            const slugRegex = new RegExp(slug,"i")
            const songs = await Song.find({
                $or:[
                    {title:keywordRegex},
                    {slug:slugRegex}
                ]
            })
        

            for(const item of songs){
                const infoSinger = await Singer.findOne({_id:item.singerId})
                // item["infoSinger"] = infoSinger

                let newSong = {
                    infoSinger:infoSinger,
                    _id:item._id,
                    title:item.title,
                    avatar:item.avatar,
                    description:item.description,
                    singerId:item.singerId,
                    topicId:item.topicId,
                    like: item.like,
                    lyris:item.lyris,
                    audio:item.audio,
                    status:item.status,
                    slug:item.slug,
                    listen:item.listen
                };
                
     
               

                // console.log(newSong);
                
             

                newSongs.push(newSong)
            }

            // newSongs= songs


        }


        res.json({
            code:200,
            data:newSongs
        })
    }catch(e){
        return res.json({
            code:400,
            message:"Lỗi ở BE"
        })
       
    }
}