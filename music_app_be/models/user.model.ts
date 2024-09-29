import mongoose from 'mongoose';

const userScheme = new mongoose.Schema({
    fullName:String,
    email:String,
    password:String,
    phone:String,
    avatar:String,
    status:{
        type:String,
        default:"active"
    },
    deleted: {
        type:Boolean,
        default:false
    },
    deletedAt:Date,
   
    
},{
    timestamps:true
    }
)
const User = mongoose.model("User",userScheme,"users")
export default User