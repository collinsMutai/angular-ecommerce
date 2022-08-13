import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  prom = new Promise<string>((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Welcome to The Jitu')
    },3000)
  })

}
