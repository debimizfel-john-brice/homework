import { Component } from '@angular/core';
import { GeneratorComponent } from "../generator/generator.component";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    imports: [GeneratorComponent]
})
export class AboutComponent {

}
