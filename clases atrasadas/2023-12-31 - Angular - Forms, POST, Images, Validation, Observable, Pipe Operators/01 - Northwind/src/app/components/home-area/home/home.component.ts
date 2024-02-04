import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { DiscountComponent } from "../discount/discount.component";
import { SpecialesComponent } from "../speciales/speciales.component";
import { LocationComponent } from '../location/location.component';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [SearchComponent, DiscountComponent, SpecialesComponent, LocationComponent]
})
export class HomeComponent {

    public constructor(title:Title){
        title.setTitle("Home Sweet Home");
    }

}
