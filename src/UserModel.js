import { Schema, model } from "mongoose";

const schema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: String,
    password: String,
    isLoggedIn: Boolean,
});

const UserModel = model("User", schema);

export default UserModel;
