import {Request , Response} from "express";
import Topic from "../../models/topic.model";

//[GET] /api/topics
export const topics = async(req: Request,res: Response)=>{
    try{
        const topics = await Topic.find({
            deleted:false,
            status:"active"
        })

        res.json({
            code:200,
            data:topics
        })
    }catch(e){
        res.json({
            code:400,
            message:"Truy cập database thất bại"
        })
    }
}