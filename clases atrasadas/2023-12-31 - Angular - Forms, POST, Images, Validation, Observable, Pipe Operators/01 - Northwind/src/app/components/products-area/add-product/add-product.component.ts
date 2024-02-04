import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProductModel } from '../../../models/product-model';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../../services/products-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

    public product = new ProductModel();

    @ViewChild("imageBoxRef")
    public imageBoxRef:ElementRef<HTMLInputElement>;

    public constructor(
        private router: Router,
        private productsService: ProductsService
    ){}

    public send = async () => {
        try {
            this.product.image = this.imageBoxRef.nativeElement.files[0];
            await this.productsService.AddProduct(this.product);
            alert("Products has been Added...");
            // 1. Navigate to '/products'
            this.router.navigateByUrl("/products");
        } catch (error:any) {
            alert(error.message)
        }
    }

}
