import mongoose  from "mongoose";
import { DB_NAME } from "../constats.js";
import dotenv from 'dotenv';
dotenv.config();  // This will load environment variables

 

const connectDB = async() => {
  try {
   const connectionInstance =  await mongoose.connect (`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log (`mongodb connected DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("mongodb error",error);
    process.exit(1)
  }
  


}

export default connectDB