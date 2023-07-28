import mongoose from "mongoose";
import { urldb } from './config.js';

export const connectDB = async () => {
  try {
    await mongoose.connect(urldb);
    console.log(">> DB Connect");
  } catch (error) {
    console.log(error);
  }
};
