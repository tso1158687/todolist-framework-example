import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { newTodo, Todo } from 'src/types/todo.type';

@Injectable()
export class TodoService {
  todoList: Todo[] = [
    {
      title: '吃飯',
      content: '吃飯',
      id: 1,
      createDate: new Date(2021, 8, 1),
      dueDate: new Date(2021, 8, 1),
      completed: false,
    },
    {
      title: '睡覺',
      content: '睡覺??',
      id: 2,
      createDate: new Date(2023, 8, 2),
      dueDate: new Date(2023, 8, 2),
      completed: false,
    },
  ];
  getTodoList(): Observable<Todo[]> {
    return of(this.todoList);
  }

  getTodo(id: number): Observable<Todo | undefined> {
    return of(this.todoList.find((t) => t.id === id));
  }

  addTodo(newTodo: newTodo): Observable<Todo> {
    console.log('addTodo', newTodo);
    const { title, content, dueDate } = newTodo;
    const newTodo2: Todo = {
      title,
      content,
      id: +new Date(),
      dueDate,
      createDate: new Date(),
      completed: false,
    };
    this.todoList.push(newTodo2);
    return of(newTodo2);
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
