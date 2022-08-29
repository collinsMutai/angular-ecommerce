import { EventEmitter, Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
export interface todo{
  userId:number
  id:number
  title:string
  completed:boolean
}
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  private todos: todo[]=[
    {
      'userId':1,
      "id":1,
      "title":'lorem',
      "completed":false
    },
    {
      'userId':2,
      "id":2,
      "title":'lorem',
      "completed":false
    },
    {
      'userId':3,
      "id":3,
      "title":'lorem',
      "completed":false
    },
    {
      'userId':4,
      "id":4,
      "title":'lorem',
      "completed":false
    },
  ]
activate= new Subject<boolean>()
onactivated$ = this.activate.asObservable()
  getTodo(): Observable<todo[]>{
    return of(this.todos)
  }
  // emitting(val:boolean){
  //   this.activate.emit(val)
  // }
}
