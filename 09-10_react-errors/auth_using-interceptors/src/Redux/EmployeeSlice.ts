import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EmployeeModel } from "../Models/EmployeeModel";

interface EmployeeSlice {
    employeesList: EmployeeModel[];
}


const initialState: EmployeeSlice = {
    employeesList: []
}


const employeeSlice = createSlice({
    name: "employee",
    initialState,
    reducers: {

        updateEmployeeSlice: (state, action: PayloadAction<EmployeeModel[]>) => {
            state.employeesList = action.payload;
        },

        addEmployee: (state, action: PayloadAction<EmployeeModel>) => {
            state.employeesList.push(action.payload);
        },

        updateEmployee: (state, action: PayloadAction<EmployeeModel>) => {
            const index = state.employeesList.findIndex(e => e.id === action.payload.id);
            if (index >= 0) {
                state.employeesList[index] = action.payload;
            }
        },

        deleteEmployee: (state, action: PayloadAction<string>) => {
            const index = state.employeesList.findIndex(e => e.id === action.payload);
            if (index >= 0) {
                state.employeesList.splice(index, 1);
            }
        }
    }
});

export const { updateEmployeeSlice, addEmployee, updateEmployee, deleteEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;