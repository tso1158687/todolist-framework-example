import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { Todo } from 'src/types/todo.type';

@Injectable()
export class TodoService {
  todoList: Todo[] = [
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
  ];
  getTodoList(): Observable<Todo[]> {
    return of(this.todoList);
  }

  addTodo(newTodo: string): Observable<Todo[]> {
    this.todoList.push({
      content: newTodo,
      id: +new Date(),
      create: new Date(),
      completed: false,
    });
    return of(this.todoList);
  }

  toggleCompleteStatus(todo: Todo): Observable<Todo[]> {
    todo.completed = !todo.completed;
    return of(this.todoList);
  }

  removeTodo(todo: Todo): Observable<Todo[]> {
    this.todoList = this.todoList.filter((t) => t.id !== todo.id);
    return of(this.todoList);
  }

  removeCompletedTodo(): Observable<Todo[]> {
    this.todoList = this.todoList.filter((t) => !t.completed);
    return of(this.todoList);
  }
}
