import { Schema, model } from "mongoose";
import { Iuser } from "../interfaces/user.interface";

const userSchema = new Schema<Iuser>({
    name: {
        type: String,
        required: [true, 'A user must have a name'],
    },
    age: {
        type: Number,
        required: [true, 'A user must have an age'],
    },
    email: {
        type: String,
        required: [true, 'A user must have an email'],
        unique: true,
        lowercase: true,
    },
    photo: String,
    role: {
        type: String,
        enum: ['user','admin'],
        default: 'user',
    },
    userStatus: {
        type: String,
        enum: ['active','inactive'],
        default: 'active',
    },
       
});

const User = model<Iuser>('User', userSchema);
export default User;