import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config();
const MONGO_ATLAS_URLL= process.env.MONGO_ATLAS_URLL;
const connectDB = async()=>{
    try{
        const con = await mongoose.connect(MONGO_ATLAS_URLL,{
            dbName : 'Newsapp'
        });
        console.log(`Connection established ${con.connection.host}`);
    }
    catch(error){
        console.log("Error in db connection",error);
    }
}
export default connectDB;


