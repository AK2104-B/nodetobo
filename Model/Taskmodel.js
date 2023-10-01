import mongoose from "mongoose";
import { user } from "./UserModel.js";


const taskschema = new mongoose.Schema({
    description:{
        type:String,
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    userid:{
       type:mongoose.Schema.ObjectId,
       ref:user,
    },
    completed:{
        type:Boolean,
        default:false
    }
})


export const task= new mongoose.model("Task",taskschema)