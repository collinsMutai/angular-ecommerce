import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { todo, TodoService } from '../todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
todos$!:Observable<todo[]>

  constructor(private todo:TodoService) { }

  ngOnInit(): void {
 this.todos$=this.todo.getTodo()
  }
  Activate(){
    this.todo.activate.next(true)
  }
}
