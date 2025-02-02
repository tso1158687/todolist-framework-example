import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { newTodo, Todo } from '../type/todo.type';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  http = inject(HttpClient);
  url = 'http://localhost:3000/todo';

  todoList: WritableSignal<Todo[]> = signal([]);

  getTodoList(): WritableSignal<Todo[]> {
    return this.todoList;
  }

  getTodoListData(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }

  addTodo(todo: newTodo): Observable<Todo> {
    // console.log(content);
    return this.http
      .post<Todo>(this.url, {
        todo,
      })
      .pipe(
        tap((todo) => {
          this.todoList.update((list) => [...list, todo]);
        })
      );
  }

  toggleCompleteStatus(todo: Todo): Observable<Todo | null> {
    const newTodo = { ...todo, completed: !todo.completed };
    return this.http.post<Todo>(`${this.url}/update`, newTodo).pipe(
      tap((todo) => {
        this.todoList.update((list) =>
          list.map((t) => (t.id === todo.id ? todo : t))
        );
      })
    );
  }

  removeTodo(todo: Todo): Observable<boolean> {
    return this.http.post<boolean>(`${this.url}/removeTodo`, todo).pipe(
      tap((result) => {
        if (result) {
          console.log(result);
          this.todoList.update((list) => list.filter((t) => t.id !== todo.id));
        }
      })
    );
  }

  removeCompletedTodo(): Observable<number> {
    return this.http.post<number>(`${this.url}/removeCompletedTodo`, {}).pipe(
      tap((count) => {
        this.todoList.update((list) => list.filter((t) => !t.completed));
      })
    );
  }
}
