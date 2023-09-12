import { connect, disconnect } from "mongoose";
import "dotenv/config";
import UserModel from "./UserModel.js";

const CONNECTION_STRING = process.env.CONNECTION_STRING;

async function main() {
    await connect(CONNECTION_STRING);

    console.log("Connected.");

    // await createUser();

    await updateUser();

    await disconnect();
}

async function createUser() {
    const user = new UserModel({
        username: "dev2",
        email: "dev@codecool.at",
        password: "1234",
        isLoggedIn: false,
    });
    await user.save();
}

async function updateUser() {
    await UserModel.updateMany({ isLoggedIn: false }, { isLoggedIn: true });
}

main();
