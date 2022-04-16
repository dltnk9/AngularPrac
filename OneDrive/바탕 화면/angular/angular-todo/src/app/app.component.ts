import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// export class AppComponent implements OnInit, OnDestroy {
//   intervalSub;

  
//   ngOnInit() {
//     this.intervalSub = setInterval(() => {
//       console.log('Hello from ngOnInit');

//     },1000);
//   }

//   ngOnDestroy(): void {
//     if(this.intervalSub) {
//       clearInterval(this.intervalSub);
//     }
//   }
// }

export class AppComponent {
  title = 'angular-todo';
  showText= false;
  constructor() {
    console.log('angular test');

  }
  
  getMin(a :number,b:number) {
    if (a <b) {
      return a;
    }
    return b;
  }
  toggleText(event:any):void {
    this.showText = !this.showText;
  console.log(event);
  }
}
