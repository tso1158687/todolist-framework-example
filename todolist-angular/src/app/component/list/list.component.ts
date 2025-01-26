import { Component, computed, inject, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { Todo } from '../../type/todo.type';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [DatePipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  todoService=inject(TodoService)
  todoList:WritableSignal<Todo[]> = signal([]);
  todoList2=signal<Todo[]>([]);
  remainingTodo: Signal<number> = computed(
    ()=>this.todoList().filter((t) => !t.completed).length
  )



  ngOnInit(): void {
    this.getTodoList();

  }

  getTodoList(): void {
    this.todoList2=this.todoService.getTodoList();
    // this.todoList2.

    // this.todoList = this.todoService.getTodoList();
    // this.todoList = this.todoService.getTodoList();
    // this.todoService.getTodoList().subscribe((data) => {
    //   this.todoList = data;
    // });
  }

  toggleCompleteStatus(todo: Todo): void {
    this.todoService.toggleCompleteStatus(todo);
  }

  removeTodo(todo: Todo): void {
    this.todoService.removeTodo(todo);
  }

  removeCompletedTodo(): void {
    this.todoService.removeCompletedTodo();
  }


}
