import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit, Input, Output,EventEmitter, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChildComponent implements OnInit {
  message='message from child!';
  @Input() childMessage: string | undefined;

  @Output() messageEvent = new EventEmitter<string>();
  constructor() { 

  }

  ngOnInit(): void {
  }
  sendMessage() {
    this.messageEvent.emit('Hello from child')
  }

}
