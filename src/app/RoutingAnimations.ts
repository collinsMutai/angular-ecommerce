import { trigger, state, style, transition, animate } from "@angular/animations";



export const RoutingAnimation = trigger('routeAnimations',[
    state('home', style({
        opacity:1
    })),
    state('add', style({
        opacity:1
    })),
    state('notfound', style({
        opacity:1
    })),
    transition('*<=>*', animate('500ms', style({
        opacity:0,
        transform:'translateX(-100px)'
    })))
  
])