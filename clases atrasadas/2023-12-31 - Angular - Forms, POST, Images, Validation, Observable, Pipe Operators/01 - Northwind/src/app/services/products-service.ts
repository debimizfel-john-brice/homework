import { HttpClient } from "@angular/common/http";
import { ProductModel } from "../models/product-model";
import { appConfig } from "../utils/config";
import { firstValueFrom } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class ProductsService{

    // DI:
    public constructor( private httpClient: HttpClient ){}

    // Get All products:
    public async getAllProducts():Promise<ProductModel[]>{

        // Create an observable that cen fetch products from the server:
        const observable = this.httpClient.get<ProductModel[]>(appConfig.productsUrl);

        // Convert that Observable to an Promise that we can wait for it:
        const products = await firstValueFrom(observable);

        // Return the products:
        return products;
        
    }
    
    // Get One product:
    public async getOneProduct(id:number):Promise<ProductModel>{

        // Create an observable that cen fetch product from the server:
        const observable = this.httpClient.get<ProductModel>(appConfig.productsUrl + id );

        // Convert that Observable to an Promise that we can wait for it:
        const product = await firstValueFrom(observable);

        // Return the product:
        return product;
        
    }
    
    // Add product:
    public async AddProduct(product:ProductModel):Promise<void>{

        const formData = new FormData();
        formData.append("name", product.name);
        formData.append("price", product.price.toString());
        formData.append("stock", product.stock.toString());
        formData.append("image", product.image);

        // Create an observable that cen send product to the server:
        const observable = this.httpClient.post<ProductModel>(appConfig.productsUrl, formData );

        // Convert that Observable to an Promise that we can wait for it:
        await firstValueFrom(observable);
        
    }

}