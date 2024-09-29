import {Request , Response} from "express";
import Topic from "../../models/topic.model";
import Song from "../../models/song.model";
import Singer from "../../models/singer.model";
import User from "../../models/user.model";



//[GET] /api/songs/:slugTopic
export const list = async(req: Request,res: Response)=>{
  
    try{
        const {slugTopic} = req.params
        const topic = await Topic.findOne({
            deleted:false,
            slug:slugTopic,
            status:"active"
        })

        if(topic){
            const songs:any = await Song.find({
                deleted:false,
                topicId:topic._id,
                status:"active"
            }).select("-lyrics").lean();
         
            for (const song of songs){
                const infoSinger = await Singer.findOne({
                    deleted:false,
                    status:"active",
                    _id: song.singerId
                }).lean();
                
               
                song["infoSinger"]=infoSinger

                
                        
            }   
            res.json({
                code:200,
                data:songs,
                topic:topic 
            })
        }
        else{
            res.json({
                code:200,
                data:[],
                topic:"" 
            })
        }
        


        
    }catch(e){
        res.json({
            code:400,
            message:"Truy cập database thất bại"
        })
    }
}


//[GET] /api/songs/detail/:slugSong
export const detail =async (req: Request,res: Response) => {

    try {
        const {slugSong} = req.params
        const song = await Song.findOne({
            deleted:false,
            slug:slugSong
        }).lean();

        if (song) {

            const infoSinger = await Singer.findOne({
                deleted:false,
                status:"active",
                _id: song.singerId
            }).lean();

            const infoTopic = await Topic.findOne({
                deleted:false,
                status:"active",
                _id: song.topicId
            }).lean();

            song["infoSinger"] =  infoSinger    
            song["infoTopic"]  = infoTopic
            res.json({
                code:200,
                data:song
            })
        }
        else{
            res.json({
                code:400,
                message:"Không có dữ liệu"
            })  
        }

        
    } catch (error) {
        res.json({
            code:400,
            message:"Lỗi ở BE"
        })
    }
}

//[GET] /api/songs/like/:typeLike/:idSong
export const like = async (req:Request,res:Response)=>{
    try {
        const {typeLike,idSong} = req.params
        const user = res.locals.user;
        const newUser = await User.findOne({
            email:user.email
        })

        const like = async()=>{

            await Song.updateOne({_id:idSong},{
                $addToSet: { like: newUser._id }
            })
        }

        const dislike = async()=>{
            await Song.updateOne(
                { _id: idSong }, // Find the song by id
                { $pull: { like: newUser._id } } // Remove the user ID from the array
            );
        }

        switch (typeLike){
            case "like":
                await like()
                break

            case "dislike":
                await dislike()
                break
        }
            
            


        res.json({
            code:200
        })
    } catch (error) {
        res.json({
            code:400,
            message:"Lỗi ở BE"
        })
    }
}
