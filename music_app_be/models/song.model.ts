import mongoose from 'mongoose';

const songScheme = new mongoose.Schema({
    title:String,
    avatar:String,
    description:String,
    singerId:String,
    topicId:String,
    like: {
        type: [String],  // Mảng chứa các chuỗi
        default: [],     // Mặc định là một mảng rỗng
    },
    listen:{
        type:Number,
        default:0
    },
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