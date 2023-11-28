import RoleModel from "./role_model";

class User {
    userId: number;
    username: string;
    password: string;
    roleId: RoleModel;

    constructor(user: { userId?: number, username: string, password: string, roleId?: RoleModel }) {
        this.userId = user.userId;
        this.username = user.username;
        this.password = user.password;
        this.roleId = user.roleId;
    }
}

export default User;