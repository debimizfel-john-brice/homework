import axios from "axios";
import appConfig from "../Utils/Config";
import CategoryModel from "../Models/CategoryModel";
import ProductModel from "../Models/ProductModel";

class DataService{

    // Get all Categories:
    public async getAllCategories():Promise<CategoryModel[]>{
        const response = await axios.get<CategoryModel[]>( appConfig.categoriesUrl );
        const categories = response.data;
        return categories;
    }

    // Get Products By Category:
    public async getProductsByCategory(categoryId:number):Promise<ProductModel[]> {
        const response = await axios.get<ProductModel[]>( appConfig.productsByCategoryUrl + categoryId );
        const products = response.data;
        return products;
    }

    // Add one Product:
    public async addProducts( product:ProductModel ):Promise<ProductModel> {
        const response = await axios.post<ProductModel>( appConfig.productsUrl, product );
        const addedProduct = response.data;
        return addedProduct;
    }

    // Delete one product:
    public async deleteProduct(id:number):Promise<void> {
        await axios.delete( appConfig.productsUrl + id );
    }
    

}
const dataService = new DataService();
export default dataService;