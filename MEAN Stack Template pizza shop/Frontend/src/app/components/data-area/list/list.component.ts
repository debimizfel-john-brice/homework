import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrderModel } from '../../../models/order-model';
import { NotifyService } from '../../../services/notify-service';
import { OrderService } from '../../../services/order-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public phoneToSearch: string;
  public orders: OrderModel[];

  public constructor(
    private orderService: OrderService,
    private notifyService: NotifyService) { }

  public async search() {
    try {
      this.orders = await this.orderService.getOrdersByPhone(this.phoneToSearch);
      console.log(this.orders[0]);
    } catch (error) {
      this.notifyService.error("Error while searching orders");
    }

  }
}
