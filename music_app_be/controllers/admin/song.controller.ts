import {Request , Response} from "express";
import Topic from "../../models/topic.model";
import Song from "../../models/song.model";
import Singer from "../../models/singer.model";



//[GET] /api/admin/songs
export const index = async(req: Request,res: Response)=>{
  
    try{
       const find = {
        deleted:false
       }

       const songs = await Song.find(find)
       let newSongs = []

       for(let song of songs){
            const topic = await Topic.findOne({
                _id:song.topicId
            })
            const singer = await Singer.findOne({
                _id:song.singerId
            })

            let newSong = {
                _id:song._id,
                title:song.title,
                avatar:song.avatar,
                description:song.description,
                singerId:song.singerId,
                topicId:song.topicId,
                like:song.like,
                listen:song.listen,
                lyrics:song.lyrics,
                audio:song.audio,
                status:song.status,
                slug:song.slug,
                infoTopic:topic,
                infoSinger :singer
            }
            newSongs.push(newSong)
       }
    //    console.log(newSongs);
       
       res.json({
        code:200,
        data:newSongs
       })
        
    }catch(e){
        res.json({
            code:400,
            message:"Truy cập database thất bại"
        })
    }
}


//[GET] /api/admin/songs/create
export const create = async(req: Request,res: Response)=>{
    try{
       const find = {
        deleted:false
       }

       const topics = await Topic.find(find)
       const singers = await Singer.find(find)

       const newTopics = []
       const newSingers = []

       for(const topic of topics){
            let newTopic = {
                value: topic._id,
                label: topic.title,
            }
            newTopics.push(newTopic)

       }
       for(let singer of singers){
        // console.log(singer);
        
            let newSinger = {
                value: singer._id,
                label: singer.fullName,
            }
            newSingers.push(newSinger)
       }
       
       res.json({
        code:200,
        topics:newTopics,
        singers:newSingers
       })
        
    }catch(e){
        res.json({
            code:400,
            message:"Truy cập database thất bại"
        })
    }
}


//[POST] /api/admin/songs/create
export const createPost = async(req: Request,res: Response)=>{
    try{
       let avatar = ""
       let audio = ""

       if(req.body.avatar){
        avatar=req.body.avatar[0];
       }
       if(req.body.audio){
        audio=req.body.audio[0];
       }

       const dataSong = {
        title:req.body.title,
        avatar:avatar,
        description:req.body.description,
        singerId:req.body.singerId,
        topicId:req.body.topicId,
        // like: req.body.title,
        // lyris:req.body.lyris,
        audio:audio,
        status:req.body.status,
        // slug:req.body.slug,
       }
       const song = new Song(dataSong)
    //    console.log(song);
    await song.save()
       
       res.json({
        code:200,
        data:song
       })
        
    }catch(e){
        res.json({
            code:400,
            message:"Truy cập database thất bại"
        })
    }
}

//[GET] /api/admin/songs/detail/:id
export const getDetail = async(req: Request,res: Response)=>{
    try {
        const find = {
            deleted:false,
            _id:req.params.id
        }
        const song = await Song.findOne(find);
        const singer = await Singer.findOne({
            _id:song.singerId
        })
        const topic = await Topic.findOne({
            _id:song.topicId
        })

        const newData = {
            _id:song._id,
            infoSinger:singer,
            infoTopic:topic,
            title:song.title,
            avatar:song.avatar,
            description:song.description,
            singerId:song.singerId,
            topicId:song.topicId,
            like: song.like,
            listen:song.listen,
            lyrics:song.lyrics,
            audio:song.audio,
            status:song.status,
            slug:song.slug
        }
      
        

   

        res.json({
            code:200,
            data:newData
        });

    } catch (error) {
        res.json({
            code:400,
            message:"Truy cập database thất bại"
        })
    }
}