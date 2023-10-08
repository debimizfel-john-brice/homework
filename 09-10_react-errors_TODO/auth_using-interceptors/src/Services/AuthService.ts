import axios from "axios";
import { CredentialsModel, UserModel } from "../Models/UserModel";
import appConfig from "../Config";
import { store } from "../Redux/Store";
import { login, logout, signup } from "../Redux/AuthSlice";

class AuthService {

    static async signup(user: UserModel) {
        const token = (await axios.post<string>(appConfig.sigup, user)).data;
        store.dispatch(signup(token));
    }

    static async login(credentials: CredentialsModel) {
        const token = (await axios.post<string>(appConfig.login, credentials)).data;
        store.dispatch(login(token));
    }

    static async logout() {
        store.dispatch(logout());
    }

}

export default AuthService;

