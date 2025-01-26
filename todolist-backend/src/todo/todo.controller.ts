import { Controller, Get, Post } from '@nestjs/common';
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

  @Post()
  addTodo(newTodo: string): Observable<Todo[]> {
    return this.todoService.addTodo(newTodo);
  }

  @Post('toggleCompleteStatus')
  toggleCompleteStatus(todo: Todo): Observable<Todo[]> {
    return this.todoService.toggleCompleteStatus(todo);
  }

  @Post('removeTodo')
  removeTodo(todo: Todo): Observable<Todo[]> {
    return this.todoService.removeTodo(todo);
  }

  @Post('removeCompletedTodo')
  removeCompletedTodo(): Observable<Todo[]> {
    return this.todoService.removeCompletedTodo();
  }
}
