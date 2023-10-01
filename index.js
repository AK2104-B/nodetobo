import express from "express";
import { config } from "dotenv";
import {Dbconnect} from "./Data/Dbconnect.js";
import { routes } from "./Route/user.js";
import taskroute from "./Route/task.js";
import cookieParser from "cookie-parser";
import { errorhandler } from "./utils/errorM.js";

config({
    path: "./Data/config.env"
});

const app=express()
app.use(express.json())
app.use(cookieParser());
app.use(routes)
app.use(taskroute)

app.listen(process.env.port,()=>{
    console.log(`listening on ${process.env.port} Port`);
})


Dbconnect()
app.use(errorhandler);