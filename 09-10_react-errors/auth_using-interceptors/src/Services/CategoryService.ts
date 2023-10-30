import axios from "axios";
import { CategoryModel } from "../Models/CategoryModel";
import appConfig from "../Config";
import { store } from "../Redux/Store";
import { updateCategories } from "../Redux/CategorySlice";

class Categorieservice {
    static async getCategories(): Promise<CategoryModel[]> {
        let categories = store.getState().category.categories;

        if (categories !== null) {
            return categories;
        }

        categories = (await axios.get<CategoryModel[]>(appConfig.categories)).data;
        console.log(categories);

        store.dispatch(updateCategories(categories));
        return categories;
    }
}

export default Categorieservice;