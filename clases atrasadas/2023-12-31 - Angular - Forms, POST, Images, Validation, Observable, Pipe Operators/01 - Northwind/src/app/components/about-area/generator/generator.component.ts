import { Component, OnDestroy } from '@angular/core';
import { GeneratorService } from '../../../services/generator.service';
import { CommonModule } from '@angular/common';
import { Subscription, filter, map, take, takeLast } from 'rxjs';

@Component({
  selector: 'app-generator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generator.component.html',
  styleUrl: './generator.component.css'
})
export class GeneratorComponent implements OnDestroy {

    public numbersArr:number[] = [];
    public subscription: Subscription;

    public constructor (private generatorService:GeneratorService){}
    

    public start(){

        const observable = this.generatorService.generate(30);

        // this.subscription = observable.subscribe({
        //     next: num => this.numbersArr.push(num),
        //     error: err => alert(err),
        //     complete:() => document.title = "Done"
        // })
        
        // this.subscription = observable.pipe(filter(n => n % 2 === 0)).subscribe({
        //     next: num => this.numbersArr.push(num),
        //     error: err => alert(err),
        //     complete:() => document.title = "Done"
        // })
        
        // this.subscription = observable.pipe(map(n => n + 1)).subscribe({
        //     next: num => this.numbersArr.push(num),
        //     error: err => alert(err),
        //     complete:() => document.title = "Done"
        // })

        this.subscription = observable.pipe(takeLast(5)).subscribe({
            next: num => this.numbersArr.push(num),
            error: err => alert(err),
            complete:() => document.title = "Done"
        })

        // https://rxjs.dev/guide/operators
    }
    
    public stop(){
        if(this.subscription){
            this.subscription.unsubscribe();
            this.generatorService.close();
        }
    }


    ngOnDestroy(): void {
        this.stop();
    }

}
