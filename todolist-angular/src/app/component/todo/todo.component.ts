import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  todoService = inject(TodoService);

  newTodo = '';
  addTodo() {
    this.todoService.addTodo(this.newTodo);
    this.newTodo = '';
  }
}
