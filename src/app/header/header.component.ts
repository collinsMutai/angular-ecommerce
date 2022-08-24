import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService:AuthService){

  }

  ngOnInit(): void {
  }
  prom = new Promise<string>((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Welcome to The Jitu')
    },3000)
  })

  onClick(){
    this.authService.login()
  }
  onLogout(){
    this.authService.logout()
  }
}
