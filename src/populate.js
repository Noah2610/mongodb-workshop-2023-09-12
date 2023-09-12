import { connect, disconnect } from "mongoose";
import "dotenv/config";
import UserModel from "./UserModel.js";

const CONNECTION_STRING = process.env.CONNECTION_STRING;

async function main() {
    await connect(CONNECTION_STRING);

    await UserModel.deleteMany({});

    const user = new UserModel({
        username: "dev",
        email: "dev@codecool.at",
        password: "1234",
        isLoggedIn: false,
    });
    await user.save();

    await disconnect();
}

main();
