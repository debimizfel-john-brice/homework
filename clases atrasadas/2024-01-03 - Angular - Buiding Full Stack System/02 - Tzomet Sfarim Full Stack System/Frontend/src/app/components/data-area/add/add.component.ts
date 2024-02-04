import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data-service';
import { AuthorModel } from '../../../models/author-model';
import { BookModel } from '../../../models/book-model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NotifyService } from '../../../services/notify-service';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit {

    public authors:AuthorModel[];
    public book = new BookModel();

    public constructor(
        private dataService:DataService,
        private router: Router,
        private notifyService: NotifyService
    ){}
    
    async ngOnInit() {
        try {
            this.authors = await this.dataService.getAllAuthors();
        } catch (error:any) {
            this.notifyService.error( error.message )  
        }
    }

    public async save(){
        try {
            await this.dataService.addBook(this.book);
            this.notifyService.success("Book has been added...");
            this.router.navigateByUrl("/list");
        } catch (error:any) {
            this.notifyService.error( error.message )  
        }
    }


}
