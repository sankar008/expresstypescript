import { mongoose } from "../../config/database";
import { Document, Model, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  emailId: string;
}

const UserSchema = new Schema({
    name: { type: String},
    emailId: { type: String},
});


export const User = mongoose.model<IUser>("User", UserSchema);