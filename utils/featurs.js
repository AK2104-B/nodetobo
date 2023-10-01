import jwt from "jsonwebtoken"

export const sendcookies = (res,user,message,status=200,s=true)=>{
  console.log(process.env.JWT_SECRET);
    const token =  jwt.sign({_id:user._id},process.env.JWT_SECRET)

    res.status(status).cookie("token",token,{
      httpOnly:true,
      maxAge:15*60*1000
    }).json({
      success: s,
      message: message
    })
}

export const autherization = (req,res,next)=>{
    const {token} = req.cookies
     if(!token) return res.json('login required')
     next();
  }