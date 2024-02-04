import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-speciales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './speciales.component.html',
  styleUrl: './speciales.component.css'
})
export class SpecialesComponent {

    public style = {
        color: Math.random() > 0.5 ? "red" : "blue"
    }

    public isWeekend():boolean{
        const now = new Date();
        const day = now.getDay() + 1;
        return day >= 6;
    } 

    public desserts = [
        {id: 1, name: "Cake"},
        {id: 2, name: "Apple pie"},
        {id: 3, name: "Cookies"},
    ]

}
