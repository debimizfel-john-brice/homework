import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserModel } from "../Models/UserModel";
import jwtDecode from "jwt-decode";

// 1. interface:
interface AuthSlice {
    token: string | null;
    user: UserModel | null;
}

const token = localStorage.getItem("token");

// 2. initial object:
const initialState: AuthSlice = {
    token,
    user: token ? (jwtDecode(token) as { user: UserModel }).user : null,
}


// 3. create Slice:
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signup: (state, action: PayloadAction<string>) => {

            const container: { user: UserModel } = jwtDecode(action.payload);
            /* aca estamos decodificando el token que dentro de el hay una parte llamada
             "user" y le decimos que ese "user" es de tipo UserModel:

            Dentro del token:
            {
                "user": {
                    "firstName": "Deborah",
                    "lastName": "Mizrahi 3",
                    "email": "debimizfel@icloud.com",
                    "role": "User"
                },
                "iat": 1696773842,
                "exp": 1696791842
            }
            */

            localStorage.setItem('token', action.payload);  // save token to browser storage
            /* el action payload es lo que mande como parametro a la funcion que en este caso
            es el token*/

            state.token = action.payload; // action.payload => token
            state.user = container.user; // container.user => lo que esta dento del token que diga user, o sea todo el user de tipo UserModel.
            /* aca asignamos al global state el token y el usuario para que en toda la
            aplicacion sepan que user esta activo y con que token */
        },

        login: (state, action: PayloadAction<string>) => {
            const container: { user: UserModel } = jwtDecode(action.payload);
            localStorage.setItem('token', action.payload);
            state.token = action.payload;
            state.user = container.user;
        },

        logout: (state) => {
            localStorage.removeItem('token');
            state.token = null;
            state.user = null;
        }
    }
});


// 4. exports:
export const { signup, login, logout } = authSlice.actions;
export default authSlice.reducer;
