class Config{

    public categoriesUrl = "http://localhost:4000/api/categories/";
    public productsByCategoryUrl = "http://localhost:4000/api/products-by-category/";
    public productsUrl = "http://localhost:4000/api/products/";
    
}
const appConfig = new Config();
export default appConfig;