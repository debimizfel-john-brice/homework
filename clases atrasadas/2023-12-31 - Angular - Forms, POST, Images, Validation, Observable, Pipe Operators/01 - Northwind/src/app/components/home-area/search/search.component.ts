import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

    public titleText = "Please Search...";

    public textToSerach:string;

    public search():void{
        alert("User searched for: " + this.textToSerach);
        this.textToSerach = "";
    }

}
