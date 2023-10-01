import mongoose, { connect } from "mongoose";


export const Dbconnect =()=>{
    mongoose.connect(process.env.M_URL, {
        dbName: "todo"
    }).then((c) => { console.log(`connect to database ${c}`); }).catch((e) => { console.log(`error come ${e}`); }) 
}