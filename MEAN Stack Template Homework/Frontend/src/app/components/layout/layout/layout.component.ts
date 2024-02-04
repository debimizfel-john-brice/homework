import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MainComponent } from '../main/main.component';
import "@picocss/pico"
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, MainComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
