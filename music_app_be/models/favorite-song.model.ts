import mongoose from 'mongoose';

const favoriteSongSchema = new mongoose.Schema({
    userId:String,
    songsId:{
        type:[String],
        default:[]
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
const FavoriteSong = mongoose.model("FavoriteSong",favoriteSongSchema,"favorite-songs")
export default FavoriteSong