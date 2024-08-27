import {Request , Response} from "express";
import Topic from "../../models/topic.model";
import Song from "../../models/song.model";
import Singer from "../../models/singer.model";



//[GET] /api/songs/:slugTopic
export const list = async(req: Request,res: Response)=>{
    try{
        const {slugTopic} = req.params
        const topic = await Topic.findOne({
            deleted:false,
            slug:slugTopic,
            status:"active"
        })

        const songs = await Song.find({
            deleted:false,
            topicId:topic._id,
            status:"active"
        })

        for (const song of songs){
            const infoSinger = await Singer.findOne({
                deleted:false,
                status:"active",
                _id: song.singerId
            })

            song["infoSinger"] = infoSinger
        }
        

        res.json({
            code:200,
            data:songs,
            topic:topic 
        })
    }catch(e){
        res.json({
            code:400,
            message:"Truy cập database thất bại"
        })
    }
}