import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs';
import { newTodo, Todo } from 'src/types/todo.type';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getTodoList(): Observable<Todo[]> {
    return this.todoService.getTodoList();
  }

  @Post()
  addTodo(@Body('content') newTodo: newTodo): Observable<Todo> {
    console.log('addTodo', newTodo);
    return this.todoService.addTodo(newTodo);
  }

  @Post('update')
  toggleCompleteStatus(@Body() todo: Todo): Observable<Todo | null> {
    return this.todoService.update(todo.id, todo);
  }

  @Post('removeTodo')
  removeTodo(@Body() todo: Todo): Observable<boolean> {
    console.log('removeTodo', todo);
    return this.todoService.removeTodo(todo);
  }

  @Post('removeCompletedTodo')
  removeCompletedTodo(): Observable<number> {
    return this.todoService.removeCompletedTodo();
  }
}
