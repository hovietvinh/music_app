import mongoose from 'mongoose';

const topicScheme = new mongoose.Schema({
    title:String,
    avatar:String,
    description:String,
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
const Topic = mongoose.model("Topic",topicScheme,"topics")
export default Topic