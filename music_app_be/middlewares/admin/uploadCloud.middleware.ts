import {Request , Response,NextFunction} from "express";
import {v2 as cloudinary} from "cloudinary"
import streamifier from "streamifier"

import dotenv from "dotenv"
dotenv.config()


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});


// const uploadImageToCloudinary = async (req, res, next) => {
//     // console.log(req.file);
//     if (!req.file) {
//         // console.log('No file uploaded');
//         next(); 
//         return ; // Continue to next middleware without image
//     }
  
//     try {
        
//         const streamUpload = (file) => {
//             return new Promise((resolve, reject) => {
//               const stream = cloudinary.uploader.upload_stream((error, result) => {
//                 if (result) {
//                   resolve(result);
//                 } else {
//                   reject(error);
//                 }
//               });
//               streamifier.createReadStream(file.buffer).pipe(stream);
//             });
//           };
      
      
//       const result = await streamUpload(req.file);
      
//       req.body.thumbnail = result.secure_url;  // Set Cloudinary URL
//       next();
//     } catch (error) {
//     //   res.status(500).send({ message: 'Cloudinary Upload Error', error });
//         console.log(req.body,2);
//     }
//   };
const streamUpload = (buffer:any) => {
    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream({resource_type:"auto"},(error, result) => {
        if (result) {
          resolve(result);
        } else {
          reject(error);
        }
      });
// console.log(streamifier);

      streamifier.createReadStream(buffer).pipe(stream);
      
    //   streamifier.createReadStream
    });
  }; 
const uploadToCloudinary= async(buffer:any)=>{
    let res = await streamUpload(buffer)
    return res["url"];

}

export const uploadSingle =async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const res = await uploadToCloudinary(req["file"].buffer);
        req.body[req["file"].fieldname] = res
    } catch (error) {
        console.log(error);
        
    }
    next();
}

export const uploadFields = async (req:Request,res:Response,next:NextFunction)=>{
    for(const key in req["files"]){
        req.body[key] = [];
        const array =req["files"][key];
        for(const item of array){
            try {
                const res = await uploadToCloudinary(item.buffer);
                req.body[key].push(res)
            } catch (error) {
                console.log(error);
                
            }
        }
    }
    next();

}


// module.exports = ;
