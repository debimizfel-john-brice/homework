import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-area/home/home.component';
import { ProductsComponent } from './components/products-area/products/products.component';
import { AboutComponent } from './components/about-area/about/about.component';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "products", component: ProductsComponent },
    { path: "about", component: AboutComponent },
    { path: "", redirectTo: "home", pathMatch: "full"},
    { path: "**", component: PageNotFoundComponent }
];
