import mongoose from "mongoose";
import * as dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve("../.env") });
import { Schema, Model } from "mongoose";
const databaseurl = process.env.DATABASE_URL
// console.log(databaseurl)
mongoose.connect(databaseurl)
.then(()=>{
     console.log("Database Connected !")
})
.catch((err)=>{
     console.log("Databse Not connected ", err)
     
})
const Scehma = mongoose.Schema;


const userSchema = new Scehma ({
     email:{type:String, unique:true},
     name:String,
     subject:String,
     message:String

},{ timestamps: true })
export const userModel = mongoose.model("user" ,userSchema);