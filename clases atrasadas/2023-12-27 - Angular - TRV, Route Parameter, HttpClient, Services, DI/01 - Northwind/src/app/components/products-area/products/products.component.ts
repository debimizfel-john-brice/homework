import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products-service';
import { ProductModel } from '../../../models/product-model';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

    public products: ProductModel[] = [];

    public constructor( private productsService: ProductsService ){}

    async ngOnInit() { // useEffect -> componentDidMount
        try {
            this.products = await this.productsService.getAllProducts()
        } catch ( error:any ) {
            alert( error.message );
        }
    }


}
