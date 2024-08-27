import mongoose from 'mongoose';

const songScheme = new mongoose.Schema({
    title:String,
    avatar:String,
    description:String,
    singerId:String,
    topicId:String,
    like:Number,
    lyris:String,
    audio:String,
    status:String,
    slug:String,
    deleted:{
        type:Boolean,
        default:false
    },
    deletedAt:Date
},{
    timestamps:true
    }
)
const Song = mongoose.model("Song",songScheme,"songs")
export default Song