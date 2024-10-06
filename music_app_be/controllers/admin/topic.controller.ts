import {Request , Response} from "express";
import Topic from "../../models/topic.model";

//[GET] /api/admin/topics
export const topics = async(req: Request,res: Response)=>{

    

    try{
        const topics = await Topic.find({
            deleted:false
        })

        res.json({
            code:200,
            data:topics
        })
    }catch(e){
        res.json({
            code:400,
            message:"Lỗi ở BE"
        })
    }
}