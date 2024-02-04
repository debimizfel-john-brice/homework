import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../../../services/order-service';
import { NotifyService } from '../../../services/notify-service';
import { OrderModel, PizzaType } from '../../../models/order-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  public order = new OrderModel();

  public constructor(
    private orderService: OrderService,
    private notifyService: NotifyService,
    private router: Router
  ) { }

  public async save() {
    try {
      await this.orderService.addOrder(this.order);

      this.notifyService.success("Order saved successfully");
      this.router.navigate(['/list']);
    } catch (error) {
      this.notifyService.error("Error while saving order");
    }
  }

}
