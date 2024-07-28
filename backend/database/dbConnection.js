import mongoose from "mongoose";

export const dbconnection  = ()=>{
    mongoose.connect(process.env.MONGO_URI, {
        dbname: "shoyaRestro"
       }).then(()=>{
        console.log("Database connected");
       }).catch((err)=>{
        console.log(`error occored by database ! ${err}`);
       });
    };
