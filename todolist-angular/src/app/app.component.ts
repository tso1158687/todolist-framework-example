import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './type/todo.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  todoList: Todo[] = [];
  newTodo = '';

  get remainingTodo(): number {
    return this.todoList.filter((t) => !t.completed).length;
  }

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodoList();
  }

  getTodoList(): void {
    this.todoList = this.todoService.getTodoList();
  }

  addTodo(): void {
    if (this.newTodo.length === 0) {
      return;
    }

    const newTodo: Todo = {
      content: this.newTodo,
      completed: false,
      id: +new Date(),
    };

    this.todoList = [...this.todoList, newTodo];
    this.newTodo = '';
  }

  toggleCompleteStatus(todo: Todo): void {
    todo.completed = !todo.completed;
  }

  removeTodo(todo: Todo): void {
    this.todoList = this.todoList.filter((t) => t.id !== todo.id);
  }

  removeCompletedTodo(): void {
    this.todoList = this.todoList.filter((t) => !t.completed);
  }
}
