import express from "express";
import { autherization } from "../utils/featurs.js";
import { addtask, completed, deletetask, updateTask } from "../Controller/Taskcontroller.js";



const taskroute = express.Router();

taskroute.post('/addtask',autherization,addtask)

taskroute.get('/completed',autherization,completed)

taskroute.post('/update',autherization,updateTask)
taskroute.get('/delete',autherization,deletetask)

export default taskroute