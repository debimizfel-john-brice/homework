import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./EmployeeSlice";
import authReducer from "./AuthSlice";

export const store = configureStore({
    reducer: {
        employee: employeeReducer,
        auth: authReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
