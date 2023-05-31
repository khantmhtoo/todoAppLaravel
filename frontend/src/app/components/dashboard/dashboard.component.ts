import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistComponent } from '../todolist/todolist.component';
import { TododetailComponent } from '../tododetail/tododetail.component';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, TododetailComponent, TodolistComponent, TodoComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
}
