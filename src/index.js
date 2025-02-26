import dotenv from 'dotenv';
dotenv.config();  // This will load environment variables

import mongoose from "mongoose";

import connectDB from "./db/index.js";
import { DB_NAME } from './constats.js';
 



connectDB()
.then(()=>{
    app.listen(process.env.PORT|| 8000, () =>{
        console.log(`server running at port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("mongodb failed");

})