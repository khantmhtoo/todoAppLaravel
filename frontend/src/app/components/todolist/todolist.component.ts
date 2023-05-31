import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from 'src/app/core/services/todo.service';
import { TodoComponent } from '../todo/todo.component';
import { Todo } from 'src/app/core/interfaces/todo';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [CommonModule, TodoComponent],
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent {
  public todoList: any = this.todoService.todoList$;
  public selectedData: any;

  constructor(private readonly todoService: TodoService) {
    this.todoService.fetchAll().subscribe()
  }
  
  selectData(data: any) {
    this.selectedData = data
  }
}
