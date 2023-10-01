import { user } from "../Model/UserModel.js";
import { errorclass } from "../utils/errorM.js";
import { sendcookies } from "../utils/featurs.js";
import bcrypt from 'bcrypt';


export const register = async (req, res, next) => {
    const { name, email, password } = req.body;
    const users = await user.findOne({ email: email });

    if (users) return next(new errorclass(`User with email "${users.email}" is already registered.`, 409))
    const pass = await bcrypt.hash(password, 10)
    await user.create({
        name: name,
        email: email,
        password: pass
    })

    res.status(201).json({
        success: true,
        message: "User registered"
    })


}

export const login = async (req, res, next) => {
    const { email, password } = req.body;
    const users = await user.findOne({ email: email });
    if (!users)  return next(new errorclass(`User not found`, 401))
    const compare = await bcrypt.compare(password, users.password)
    if (!compare) return next(new errorclass('Password provided by the user does not match', 404))
    sendcookies(res, users, `welcome back to ${users.name}`, 200, true);
}

export const getall = async (req, res, next) => {
    const users = await user.find({});
    res.status(200).json({ users });
}

export const logout = async (req,res)=>{
    res.status(200).cookie("token",'',{
        expires: new Date(Date.now())
    }).json('logout')
}