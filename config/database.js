import mongoose from "mongoose";
import { config } from "dotenv";

config({
    path:"./config/config.env"
})

export const connectDB = async ()=>{
  const {connection} = await  mongoose.connect(process.env.MONGO_URI)

  console.log(`MongoDB connected to ${connection.host}`)

}