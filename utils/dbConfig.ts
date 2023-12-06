import mongoose from "mongoose";
import { connect } from "mongoose";

const URL: string | undefined = process.env.DATABASE_STRING;

export const mainConnection = async () => {
  try {
    connect(
      "mongodb+srv://elijahsamuel311:elijahsamuel311@cluster0.v4z9bmz.mongodb.net/authFlowDB?retryWrites=true&w=majority"
    ).then(() => {
      console.log("Database is now connected..🚀🚀🚀!");
    });
  } catch (error) {
    console.log(error);
  }
};
