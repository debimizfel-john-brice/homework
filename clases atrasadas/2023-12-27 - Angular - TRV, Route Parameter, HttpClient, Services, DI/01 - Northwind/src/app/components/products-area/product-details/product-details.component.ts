import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductsService } from '../../../services/products-service';
import { ProductModel } from '../../../models/product-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{

    public product:ProductModel;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private productsService: ProductsService
    ){}

    public async ngOnInit() {
        try {
            const id = +this.activatedRoute.snapshot.params["id"];
            this.product = await this.productsService.getOneProduct(id);
        } catch (error:any) {
            alert(error.message)
        }
    }



}
