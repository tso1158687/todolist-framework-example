import { Controller, Get } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs';
import { Todo } from 'src/types/todo.type';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getTodoList(): Observable<Todo[]> {
    return this.todoService.getTodoList();
  }
}
