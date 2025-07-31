import express from "express"
import { userModel } from "./db.js";
import cors from "cors"
const app = express();

app.use(cors())
app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.get("/" , (req,res)=>{
    res.json({
        message:"server is started"
    })
})

app.post("/portfolio" , async(req,res)=>{
    const {name , email, subject, message} = req.body
    try{
        const messages = await userModel.create({
            name,
            subject,
            email,
            message
        })
        console.log(messages)
        if(!messages){
            res.json({
                message:"Unable to create message",
                success:false
            })
        }
        else{
            res.status(200).json({
                message:"Recieved your message",
                success:true
            })
        }

    }catch(err){
        console.log(err)
        res.status(500).json({
            
            message:"Something went wrong",
            success:false
        })
    }
})

app.listen(3001, ()=>{
console.log("Server is running on port 3001")
})