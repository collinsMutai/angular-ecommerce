import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService implements PreloadingStrategy {

  constructor() { }
  preload(route: Route, fn: () => Observable<any>): Observable<boolean> {
    if(route.data && route.data['admin']){
      return fn()
    }else{
      return of(false)
    }
  }
}
