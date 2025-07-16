import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
{   username: {
        type:"String",
    },
    email : {
        type:"String",
        require: [true,"Email is required "]
    },
    password :{
        type:"String",
        require:  [true,"Password is required "]
    }

}
,{timestamps:true})

const User =mongoose.model("User",UserSchema)

export default User;
