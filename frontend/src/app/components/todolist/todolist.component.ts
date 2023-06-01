import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TodoService } from "src/app/core/services/todo.service";
import { TodoComponent } from "../todo/todo.component";
import { Todo } from "src/app/core/interfaces/todo";
import { TododetailComponent } from "../tododetail/tododetail.component";
import { ButtonModule } from "primeng/button";
import { DialogModule } from "primeng/dialog";

@Component({
  selector: "app-todolist",
  standalone: true,
  imports: [
    CommonModule,
    TodoComponent,
    TododetailComponent,
    ButtonModule,
    DialogModule,
  ],
  templateUrl: "./todolist.component.html",
  styleUrls: ["./todolist.component.scss"],
})
export class TodolistComponent {
  public todoList: any = this.todoService.todoList$;
  public selectedData!: any;
  public visible: boolean = false;

  constructor(private readonly todoService: TodoService) {
    this.todoService.fetchAll().subscribe();
  }

  selectData(data: Todo): void {
    if (data.completed) {
      this.todoService.completeRequest(data);
    } else {
      this.selectedData = data;
    }
  }

  public closeDetail() {
    this.selectedData = !this.selectedData;
  }

  addTodo(data: Todo): void {
    this.visible = true;
  }
}
