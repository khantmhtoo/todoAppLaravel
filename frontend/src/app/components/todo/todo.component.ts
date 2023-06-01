import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonModule } from "primeng/button";
import { DividerModule } from "primeng/divider";
import { Todo } from "src/app/core/interfaces/todo";
@Component({
  selector: "app-todo",
  standalone: true,
  imports: [CommonModule, ButtonModule, DividerModule],
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"],
})
export class TodoComponent {
  @Input() todoData!: any;
  @Output() sendEmit = new EventEmitter<any>();


  editData() {
    this.sendEmit.emit(this.todoData);
    console.log("Edit Request");
  }

  completedRequest() {
    let sendData: Todo = {
      id: this.todoData.id,
      title: this.todoData.title,
      completed: !this.todoData.completed,
      userId: this.todoData.userId,
    };
    this.sendEmit.emit(sendData);
  }
}
