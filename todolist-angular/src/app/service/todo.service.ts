import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Todo } from '../type/todo.type';
import { HttpClient } from '@angular/common/http';

import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  http = inject(HttpClient);
  url = 'http://localhost:3000/todo';
  todoList: WritableSignal<Todo[]> = signal([]);
  todoList2: any;
  constructor() {
    this.todoList2 = toSignal(this.http.get<Todo[]>(this.url), {
      initialValue: [],
    });
  }

  getTodoList(): any {
    return this.todoList2;
  }

  getTodoList2(): any {
    return this.http.get(this.url);
  }

  addTodo(newTodo: string): void {
    this.todoList.update((list) => [
      ...list,
      {
        content: newTodo,
        id: +new Date(),
        create: new Date(),
        completed: false,
      },
    ]);
  }

  toggleCompleteStatus(todo: Todo): void {
    todo.completed = !todo.completed;
  }

  removeTodo(todo: Todo): void {
    this.todoList.update((list) => list.filter((t) => t.id !== todo.id));
  }

  removeCompletedTodo(): void {
    this.todoList.update((list) => list.filter((t) => !t.completed));
  }
}
