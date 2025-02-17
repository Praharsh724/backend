import dotenv from 'dotenv';
dotenv.config();  // This will load environment variables

import mongoose from "mongoose";

import connectDB from "./db/index.js";
import { DB_NAME } from './constats.js';
 



connectDB()