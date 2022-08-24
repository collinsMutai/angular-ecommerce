import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
export interface CanDeaactivateComponent{
  canDeactivate:()=>boolean
}
@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard  implements CanDeactivate<CanDeaactivateComponent>{
 canDeactivate(component: CanDeaactivateComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot | undefined): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   return component.canDeactivate()
 }
  
}
