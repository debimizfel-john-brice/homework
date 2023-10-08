import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./EmployeeSlice";


export const store = configureStore({
    reducer: {
        employee: employeeReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>
