import { OkPacket } from "mysql";
import Credentials from "../2-models/credentials_model";
import { UnauthorizedError } from "../2-models/error_status";
import User from "../2-models/user_model";
import dal from "../4-utils/dal";
import token from "../4-utils/token";
import RoleModel from "../2-models/role_model";

async function login(credentials: Credentials): Promise<string> {
    const sql = `SELECT * FROM users WHERE username = '${credentials.username}'`;
    const users = await dal.execute(sql);

    if (!users) throw new UnauthorizedError("Username does not exist");
    const user = new User(users[0]);

    if (user.password !== credentials.password) throw new UnauthorizedError("Password is incorrect");
    return token.createToken({ user });
}

async function register(user: User): Promise<string> {
    if (await isUsernameFree(user.username)) throw new UnauthorizedError(`Username ${user.username} is taken`);

    user.password = token.hashPassword(user.password);
    const sql = `INSERT INTO users (username, password) VALUES ('${user.username}', '${user.password}')`; //^ No need to insert RoldId because it has a default value of 1

    const info: OkPacket = await dal.execute(sql);
    user.userId = info.insertId;
    user.roleId = RoleModel.User;

    return token.createToken({ user });
}

async function isUsernameFree(username: string): Promise<boolean> {
    const sql = `SELECT EXISTS (SELECT * FROM users WHERE username = '${username}') AS isTaken`;
    const info = await dal.execute(sql);
    const isTaken = info[0].isTaken;
    return isTaken !== 0;
}

export default {
    login,
    register
}