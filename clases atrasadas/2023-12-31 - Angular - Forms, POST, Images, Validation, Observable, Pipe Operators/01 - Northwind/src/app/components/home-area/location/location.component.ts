import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent {

    public display(myLocation: HTMLSelectElement):void{
        alert("My Location: " + myLocation.value );
    }

    // Third way:
    @ViewChild("myLocation")
    public locationRef:ElementRef<HTMLSelectElement>
    public show(){        
        const location = this.locationRef.nativeElement;       
        alert("My Location: " + location.value );
    }

}
