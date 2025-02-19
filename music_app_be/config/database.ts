import mongoose from "mongoose"

export const connect =async ():Promise<void> =>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        
        
        console.log("connect db success");
    } catch(e){
        console.log("connect db fail");
        console.log(e);
        
    }
}
