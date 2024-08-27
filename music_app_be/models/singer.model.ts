import mongoose from 'mongoose';

const singerScheme = new mongoose.Schema({
    fullname:String,
    avatar:String,
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
const Singer = mongoose.model("Singer",singerScheme,"singers")
export default Singer