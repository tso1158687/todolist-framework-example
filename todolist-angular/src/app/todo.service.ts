import { Injectable } from '@angular/core';
import { Todo } from './type/todo.type';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  defaultTodoList: Todo[] = [
    {
      content: '吃飯',
      id: 1,
      completed: false,
    },
    {
      content: '睡覺',
      id: 2,
      completed: false,
    },
  ];

  getTodoList(): Todo[] {
    return this.defaultTodoList;
  }
}
