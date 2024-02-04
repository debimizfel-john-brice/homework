import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { DiscountComponent } from "../discount/discount.component";
import { SpecialesComponent } from "../speciales/speciales.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [SearchComponent, DiscountComponent, SpecialesComponent]
})
export class HomeComponent {

}
