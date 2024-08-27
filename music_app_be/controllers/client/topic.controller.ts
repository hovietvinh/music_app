import {Request , Response} from "express";

//[GET] /api/topics
export const topics = (req: Request,res: Response)=>{
    res.json("test")
}