import { HttpClient } from "@angular/common/http";
import { Injectable, computed, signal } from "@angular/core";
import { Todo } from "../interfaces/todo";
import { BehaviorSubject, Observable, tap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  private baseUrl: string = "https://jsonplaceholder.typicode.com/todos";
  private todoList!: Todo[];
  private todoBS$ = new BehaviorSubject(this.todoList);
  todoList$ = this.todoBS$.asObservable();

  lastIndex!: number;

  constructor(private readonly _http: HttpClient) {
  }

  public fetchAll() {
    return this._http.get(this.baseUrl).pipe(
      tap((e: any) => {
        this.todoList = e.filter((e: any) => e.completed != true).reverse();
        this.lastIndex = e.length;
        this.todoBS$.next(this.todoList);
      })
    );
  }

  public completeRequest(data: Todo) {
    this.todoList = this.todoList.filter((e: any) => e.id !== data.id);
    return this.todoBS$.next(this.todoList);
  }

  public addRequest(data: string) {
    this.lastIndex++;
    let newTodo = {
      id: this.lastIndex,
      userId: this.lastIndex,
      title: data,
      completed: false
    }
    this.todoList = [newTodo, ...this.todoList];
    return this.todoBS$.next(this.todoList);
  }
}
