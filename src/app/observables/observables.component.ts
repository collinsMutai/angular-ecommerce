import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  filter,
  interval,
  Observable,
  Subscriber,
  Subscription,
  pipe,
  map,
  tap,
  take
} from 'rxjs';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css'],
})
export class ObservablesComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  active=false
  constructor(private todo:TodoService) {}

  ngOnInit(): void {
    this.todo.activate.subscribe(val=>{
      console.log(val);
      
      this.active=val
    })
    const custom: Observable<number> = new Observable((subscriber) => {
      let count = 0;

      setTimeout(() => {
        subscriber.next(count);
        if (count === 10) {
          subscriber.complete();
        }
        if (count === 12) {
          subscriber.error('Belt malfunctioned');
        }
        count++;
      }, 1000);
    });

    this.sub = custom.pipe(
      filter(val=>val>1),
      tap(values=>console.log('After filter' + values)
      ),
      map((val:number)=>{
        return val * 10
      }),
      take(3)
    )
    .subscribe((count)=>{
      console.log(count);
      
    },
        (error) => {
          console.log(error);
        },
        () => {
          console.log('completed');
        }
      );
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
