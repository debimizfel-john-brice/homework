import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-area/home/home.component';
import { ProductsComponent } from './components/products-area/products/products.component';
import { AboutComponent } from './components/about-area/about/about.component';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './components/products-area/product-details/product-details.component';
import { AddProductComponent } from './components/products-area/add-product/add-product.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent},
    { path: "products", component: ProductsComponent, title: "Products"},
    { path: "products/add", component: AddProductComponent, title: "Northwind | Add Product" },
    { path: "products/:id", component: ProductDetailsComponent },
    { path: "about", component: AboutComponent, title: "About" },
    { path: "", redirectTo: "home", pathMatch: "full"},
    { path: "**", component: PageNotFoundComponent }
];
