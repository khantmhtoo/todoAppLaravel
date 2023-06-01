import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TodoService } from "src/app/core/services/todo.service";
import { TodoComponent } from "../todo/todo.component";
import { Todo } from "src/app/core/interfaces/todo";
import { TododetailComponent } from "../tododetail/tododetail.component";
import { ButtonModule } from "primeng/button";
import { TodoformComponent } from "../todoform/todoform.component";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: "app-todolist",
  standalone: true,
  imports: [
    CommonModule,
    TodoComponent,
    TododetailComponent,
    ButtonModule,
    TodoformComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: "./todolist.component.html",
  styleUrls: ["./todolist.component.scss"],
})
export class TodolistComponent {
  public todoList: any = this.todoService.todoList$;
  public selectedData!: any;
  public visible: boolean = false;
  public form: FormGroup;

  constructor(private readonly todoService: TodoService, private readonly _fb:FormBuilder) {
    this.todoService.fetchAll().subscribe();
    this.form = this._fb.group({
      title: ['', Validators.required]
    })
  }

  public selectData(data: Todo): void {
    if (data.completed) {
      this.todoService.completeRequest(data);
      if(data.id === this.selectedData.id) {
        this.closeDetail()
      }
    } else {
      this.selectedData = data;
    }
  }

  public closeDetail() {
    this.selectedData = !this.selectedData;
  }

  public addTodo(): void {
    this.visible = true;
  }

  public submitForm(e:any): void {
    this.todoService.addRequest(e.title)
    this.visible = false;
  }
}
