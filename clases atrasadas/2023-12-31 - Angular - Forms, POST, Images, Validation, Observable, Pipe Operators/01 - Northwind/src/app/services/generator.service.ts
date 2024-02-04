import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

    private timerId:number;

    public generate(count:number):Observable<number>{

        // Create Observable Object:
        return new Observable<number>((observer: Observer<number>) => {
            
            this.timerId = window.setInterval(() => {
                try {
                    const num = Math.floor( Math.random() * 100 ) + 1;
                    console.log(num);
                    
                    // Add number to the Observable:
                    observer.next(num);
                    if(--count === 0 ){
                        clearInterval(this.timerId);
                        observer.complete();
                    }

                } catch (error:any) {
                    clearInterval(this.timerId);
                    observer.error(error);
                }
            
            }, 1000)
            
            
        })
    }

    public close = () => window.clearInterval(this.timerId);

}
