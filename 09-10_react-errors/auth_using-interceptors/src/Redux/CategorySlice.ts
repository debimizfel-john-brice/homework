import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { CategoryModel } from "../Models/CategoryModel";

interface Categorieslice {
    categories: CategoryModel[] | null;
}

const initialState: Categorieslice = {
    categories: null,
}

const categorieslice = createSlice({

    name: "categories",
    initialState,
    reducers: {
        updateCategories(state, action: PayloadAction<CategoryModel[]>) {
            state.categories = action.payload;
        }
    }
});

export const { updateCategories } = categorieslice.actions;
export default categorieslice.reducer;