import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild, CanLoad{

  constructor(private authservice:AuthService, private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
  boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    

   return  this.authservice.isauthenticated().then(
      (value:boolean)=>{
        if(value){
          return true
        }else{
          this.router.navigate(['/'])
          return false
        }
      }
    )
     }
     canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       return this.canActivate(childRoute,state)
     }
     canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      return  this.authservice.isauthenticated().then(
        (value:boolean)=>{
          if(value){
            return true
          }else{
            this.router.navigate(['/'])
            return false
          }
        }
      )
     }
}
