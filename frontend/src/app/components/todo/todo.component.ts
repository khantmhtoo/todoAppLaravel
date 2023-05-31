import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  @Input() todoData!: any;
  @Output() sendEmit = new EventEmitter<any>()

  sendData() {
    this.sendEmit.emit(this.todoData)
    console.log(this.todoData)
    console.log('Send')
  }
}
