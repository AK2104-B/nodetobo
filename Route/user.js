import express from "express";
import { getall, login, logout, register } from "../Controller/usercontroller.js";
import { autherization } from "../utils/featurs.js";



export const routes = express.Router();

routes.post('/Register', register)

routes.post('/login',login)

routes.get('/getall',autherization,getall)

routes.get('/logout',logout)