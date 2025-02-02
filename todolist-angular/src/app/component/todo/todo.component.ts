import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todo',
  imports: [ReactiveFormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  todoService = inject(TodoService);
  todoForm = new FormGroup({
    title: new FormControl<string>('', {
      validators: [Validators.required, Validators.minLength(5)],
      nonNullable: true,

    }),
    content: new FormControl<string>(''),
    date: new FormControl<string | null>('', [Validators.required]),
  });
  addTodo(): void {
    console.log('addTodo', this.todoForm.value);
    if (this.todoForm.invalid) return;
    const { title, content, date } = this.todoForm.value;
    const data = {
      title: title as string,
      content : content as string,
      dueDate: date?new Date(date):null,
    };
    this.todoService.addTodo(data).subscribe(() => this.todoForm.reset());
  }
}
