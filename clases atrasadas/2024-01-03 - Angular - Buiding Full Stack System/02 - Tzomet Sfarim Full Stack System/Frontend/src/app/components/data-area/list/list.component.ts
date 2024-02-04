import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data-service';
import { FormsModule } from '@angular/forms';
import { BookModel } from '../../../models/book-model';
import { BookCardComponent } from "../book-card/book-card.component";
import { NotifyService } from '../../../services/notify-service';

@Component({
    selector: 'app-list',
    standalone: true,
    templateUrl: './list.component.html',
    styleUrl: './list.component.css',
    imports: [FormsModule, BookCardComponent]
})
export class ListComponent {

    public searchText:string;
    public books: BookModel[];

    public constructor(
        private dataService: DataService,
        private notifyService: NotifyService
    ){}

    public async search(){
        if( !this.searchText ) return;
        try {
            this.books = await this.dataService.getBookBySearch(this.searchText);            
        } catch (error:any) {
            this.notifyService.error(error.message)
        }
    }


    public async deleteBook(id:number){
        try {
            await this.dataService.deleteBook(id);
            this.books = this.books.filter(b => b.id !== id );
            this.notifyService.success("Book has been deleted...")    
        } catch (error:any) {
            this.notifyService.error(error.message)
        }
    }

}
