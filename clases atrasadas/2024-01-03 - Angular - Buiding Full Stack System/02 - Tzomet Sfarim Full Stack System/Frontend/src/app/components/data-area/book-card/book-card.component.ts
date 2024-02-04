import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookModel } from '../../../models/book-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent {

    @Input()
    public book:BookModel

    @Output()
    public deleteMe = new EventEmitter<number>()

    public delBook(){
        this.deleteMe.emit(this.book.id);
    }

}
