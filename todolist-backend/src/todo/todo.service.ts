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

  getTodo(id: number): Observable<Todo | undefined> {
    return of(this.todoList.find((t) => t.id === id));
  }

  addTodo(content: string): Observable<Todo> {
    console.log('addTodo', content);
    const newTodo: Todo = {
      content,
      id: +new Date(),
      create: new Date(),
      completed: false,
    };
    this.todoList.push(newTodo);
    return of(newTodo);
  }

  update(id: number, updateTodoDto: Todo): Observable<Todo | null> {
    const todoIndex = this.todoList.findIndex((todo) => todo.id === id);
    if (todoIndex > -1) {
      this.todoList[todoIndex] = {
        ...this.todoList[todoIndex],
        ...updateTodoDto,
      };
      return of(this.todoList[todoIndex]);
    }
    return of(null); // 或者拋出錯誤
  }

  toggleCompleteStatus(todo: Todo): Observable<Todo[]> {
    todo.completed = !todo.completed;
    return of(this.todoList);
  }

  removeTodo(todo: Todo): Observable<boolean> {
    const initialLength = this.todoList.length;
    this.todoList = this.todoList.filter((t) => t.id !== todo.id);
    const isRemoved = this.todoList.length !== initialLength;
    return of(isRemoved);
  }

  removeCompletedTodo(): Observable<number> {
    const initialLength = this.todoList.length;
    this.todoList = this.todoList.filter((t) => !t.completed);
    return of(initialLength - this.todoList.length);
  }
}
