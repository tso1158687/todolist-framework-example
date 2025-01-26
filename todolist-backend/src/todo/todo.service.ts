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
}
