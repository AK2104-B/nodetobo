import mongoose from "mongoose";


const userschema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        validate:{
            validator:function(value){
                const regex = /^[A-Za-z\s]+$/;
                return regex.test(value);
            },
            message:"Invalid username"
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:{
            validator:function(value){
                const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
                return regex.test(value);
            },
            message:"Invalid email"
        }
    },
    password:{
        type:String,
        required:true,
    }

})



export const user =new mongoose.model("user",userschema );

