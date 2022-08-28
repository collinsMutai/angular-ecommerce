import {
  animate,
  group,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browseranimation',
  templateUrl: './browseranimation.component.html',
  styleUrls: ['./browseranimation.component.css'],
  animations: [
    trigger('div', [
      state(
        'state1',
        style({
          opacity: 1,
          backgroundColor: 'blue',
          color: 'white',
        })
      ),
      state(
        'state2',
        style({
          opacity: 0.5,
          transform: 'translateX(100px)',
          backgroundColor: 'red',
          color: 'white',
        })
      ),
      transition('void=>*', animate('2000ms 0s ease-in')),
      transition('state2=>state1', animate('2000ms 3s ease-out')),
    ]), 
    trigger('list', [
      state('',style({
        opacity:1,
        transform:'translateX(0)'
      })),
      transition('void =>*',[
        group([
          animate('2000ms', style({
            color:'red'
          })),
          animate('2000ms', style({
            backgroundColor:'black'
          })),
        ])
      ]),
      // transition('void =>*',[
      //   animate('2000ms', style({
      //     color:'red'
      //   })),
      //   animate('2000ms', style({
      //     backgroundColor:'black'
      //   })),
      // ]),
      // transition('void =>*',[
      //   animate('3s', keyframes([
      //     style({
      //       opacity:0,
      //       transform:'translateY(100px)'
      //     , color:'red',offset:0
      //     }),
      //     style({
      //       opacity:0.5,
      //       transform:'translateY(50px)'
      //     , color:'black',offset:0.4
      //     }),
      //     style({
      //       opacity:0.5,
      //       transform:'translateY(50px)'
      //     , color:'green',offset:0.8
      //     }),
      //     style({
      //       opacity:1,
      //       transform:'translateY(10px)'
      //     , color:'blue',offset:1
      //     })
      //   ]))
      // ]),
      transition('void =>*',[
        animate('2s'),
        style({
          opacity:0,
          transform:'translateY(-50px)'
        })
      ]),
      transition('*=>void',[
        animate('2000ms'),
        style({
          opacity:0,
          transform:'translateY(-50px)'
        })
      ])
    ])
  ],
})
export class BrowseranimationComponent implements OnInit {
  state = 'state1';
  name = '';
  names: string[] = [];
  constructor() {}

  ngOnInit(): void {}
  changeState() {
    this.state = this.state === 'state1' ? 'state2' : 'state1';
  }
  add() {
    this.names.push(this.name);
  }
  onDelete(i:number){
    this.names.splice(i,1)
  }
//   animStart(event:any){
// console.log(event);

//   }
//   onEnd(event:any){

//   }
}
