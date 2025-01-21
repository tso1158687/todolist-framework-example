import { Injectable, signal, WritableSignal } from '@angular/core';
import { Todo } from '../type/todo.type';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoList = signal<Todo[]>([
    {
      content: '吃飯',
      id: 1,
      create: new Date(2021, 8, 1),
      completed: false,
    },
    {
      content: '睡覺',
      id: 2,
      create: new Date(2023, 8, 2),
      completed: false,
    },
  ]);

  getTodoList(): WritableSignal<Todo[]> {
    return this.todoList;
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
