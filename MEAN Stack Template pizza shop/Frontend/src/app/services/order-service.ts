import { HttpClient } from "@angular/common/http";
import { OrderModel } from "../models/order-model";
import { appConfig } from "../utils/config";
import { firstValueFrom } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class OrderService {

    // DI:
    public constructor(private httpClient: HttpClient) { }

    // Get All products:
    public async getOrdersByPhone(phone: string): Promise<OrderModel[]> {

        // Create an observable that cen fetch products from the server:
        const observable = this.httpClient.get<OrderModel[]>(appConfig.ordersByPhoneUrl + phone);

        // Convert that Observable to an Promise that we can wait for it:
        const orders = await firstValueFrom(observable);

        // Return the products:
        return orders;

    }
    // Add product:
    public async addOrder(order: OrderModel): Promise<void> {

        // Create an observable that cen send product to the server:
        const observable = this.httpClient.post<OrderModel>(appConfig.ordersUrl, order);

        // Convert that Observable to an Promise that we can wait for it:
        await firstValueFrom(observable);

    }

}