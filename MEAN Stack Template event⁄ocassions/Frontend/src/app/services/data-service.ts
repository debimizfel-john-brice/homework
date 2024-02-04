import { HttpClient } from "@angular/common/http";
import { DataModel } from "../models/data-model";
import { appConfig } from "../config";
import { firstValueFrom } from "rxjs";
import { Injectable } from "@angular/core";

//TODO delete this file
@Injectable({
    providedIn: "root"
})
export class DataService {

    // DI:
    public constructor(private httpClient: HttpClient) { }

    // Get All products:
    public async getAll____(): Promise<DataModel[]> {

        // Create an observable that cen fetch products from the server:
        const observable = this.httpClient.get<DataModel[]>(appConfig.eventUrl);

        // Convert that Observable to an Promise that we can wait for it:
        const dataArr = await firstValueFrom(observable);

        // Return the products:
        return dataArr;

    }

    // Get One product:
    public async getOne_____(id: number): Promise<DataModel> {

        // Create an observable that cen fetch product from the server:
        const observable = this.httpClient.get<DataModel>(appConfig.eventUrl + id);

        // Convert that Observable to an Promise that we can wait for it:
        const data = await firstValueFrom(observable);

        // Return the product:
        return data;

    }

    // Add product:
    public async Add____(data: DataModel): Promise<void> {

        // Create an observable that cen send product to the server:
        const observable = this.httpClient.post<DataModel>(appConfig.eventUrl, data);

        // Convert that Observable to an Promise that we can wait for it:
        await firstValueFrom(observable);

    }

}