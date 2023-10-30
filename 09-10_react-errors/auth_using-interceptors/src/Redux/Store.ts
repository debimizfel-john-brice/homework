import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./EmployeeSlice";
import authReducer from "./AuthSlice";
import categoryReducer from "./CategorySlice";

export const store = configureStore({
    reducer: {
        employee: employeeReducer,
        auth: authReducer,
        category: categoryReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>
