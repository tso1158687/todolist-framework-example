import {
  Component,
  computed,
  inject,
  OnInit,
  Signal,

} from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { Todo } from '../../type/todo.type';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [DatePipe,RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  todoService = inject(TodoService);

  todoList = this.todoService.getTodoList();
  remainingTodo: Signal<number> = computed(
    () => this.todoList().filter((t) => !t.completed).length
  );

  ngOnInit(): void {
    this.getTodoList();
  }

  getTodoList(): void {
    this.todoService
      .getTodoListData()
      .subscribe((todoList) => this.todoService.todoList.set(todoList));
  }

  toggleCompleteStatus(todo: Todo): void {
    this.todoService.toggleCompleteStatus(todo).subscribe();
  }

  removeTodo(todo: Todo): void {
    this.todoService.removeTodo(todo).subscribe();
  }

  removeCompletedTodo(): void {
    this.todoService.removeCompletedTodo().subscribe();
  }
}
