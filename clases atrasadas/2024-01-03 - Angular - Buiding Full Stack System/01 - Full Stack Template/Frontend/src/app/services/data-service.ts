import { HttpClient } from "@angular/common/http";
import { DataModel } from "../models/data-model";
import { appConfig } from "../utils/config";
import { firstValueFrom } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class DataService{

    // DI:
    public constructor( private httpClient: HttpClient ){}

    // Get All products:
    public async getAll____():Promise<DataModel[]>{

        // Create an observable that cen fetch products from the server:
        const observable = this.httpClient.get<DataModel[]>(appConfig.dataUrl);

        // Convert that Observable to an Promise that we can wait for it:
        const dataArr = await firstValueFrom(observable);

        // Return the products:
        return dataArr;
        
    }
    
    // Get One product:
    public async getOne_____(id:number):Promise<DataModel>{

        // Create an observable that cen fetch product from the server:
        const observable = this.httpClient.get<DataModel>(appConfig.dataUrl + id );

        // Convert that Observable to an Promise that we can wait for it:
        const data = await firstValueFrom(observable);

        // Return the product:
        return data;
        
    }
    
    // Add product:
    public async Add____(data:DataModel):Promise<void>{

        // Create an observable that cen send product to the server:
        const observable = this.httpClient.post<ProductModel>(appConfig.dataUrl, data );

        // Convert that Observable to an Promise that we can wait for it:
        await firstValueFrom(observable);
        
    }

}