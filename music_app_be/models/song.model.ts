import mongoose from 'mongoose';
import slug from "mongoose-slug-updater"
// const slug = require("mongoose-slug-updater")
mongoose.plugin(slug) 
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
    lyrics:String,
    audio:String,
    status:String,
    slug:{
        type:String,
        slug:"title",
        unique:true
    },
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