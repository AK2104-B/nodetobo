import { user } from "../Model/UserModel.js";
import jwt from "jsonwebtoken";
import { task } from "../Model/Taskmodel.js";
import { errorclass } from "../utils/errorM.js";



export const addtask=async(req,res)=>{
    const {description} = req.body;
    const token= req.cookies.token;
    const convert=jwt.verify(token,process.env.JWT_SECRET);
    const users=await user.findOne({_id:convert._id})
    task.create({
      description,
      createdAt:new Date(Date.now()),
      userid:users._id
    })
    res.status(201).json({
      success:true,
      message:"Task created successfully"
    })
  }

  export const completed=async (req,res,next)=>{
    const {id} =req.query;
    const tasks=await task.findOne({_id:id})
    if(!tasks) return next(new errorclass("task not found",404))
    const result = await task.updateOne({ _id: id }, {completed:true});
    if(result) return res.json({
     success:true,
     message:'task updated successfully'
    })
    
  }

export const updateTask =  async (req,res,next)=>{
    const {id,description,date} =req.body;
    const tasks=await task.findOne({_id:id})
    if(!tasks) return next(new errorclass("task not found",404))
    const d= new Date(date)
  console.log(d)
    const result = await task.updateOne({ _id: id }, {description:description,createdAt:d});
    if(result) return res.json({
     success:true,
     message:'task updated successfully'
    })
    
  }


export const deletetask =async (req,res,next)=>{
    const {id} =req.query;
    const tasks=await task.findOne({_id:id})
    if(!tasks) return next(new errorclass("task not found",404))
    const result = await task.deleteOne({ _id: id });
    if(result) return res.json({
     success:true,
     message:'task deleted successfully'
    })
    
  }