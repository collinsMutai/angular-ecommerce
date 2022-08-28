import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import {RoutingAnimation} from '../RoutingAnimations'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations:[RoutingAnimation]
})
export class HeaderComponent implements OnInit {

  constructor(public authService:AuthService, private contexts:ChildrenOutletContexts){

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
  getRouteAnimationData(){

    const context = this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation']
    console.log(context);
    
  }


}
