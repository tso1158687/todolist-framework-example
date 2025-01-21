import { Component, inject, OnInit } from '@angular/core';
import { TodoService } from './service/todo.service';
import { Todo } from './type/todo.type';
import { PokemonService } from './service/pokemon.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports:[FormsModule,CommonModule],
    standalone: true
})
export class AppComponent implements OnInit {
  pokemonService=inject(PokemonService)
  todoList: Todo[] = [];
  newTodo = '';

  get remainingTodo(): number {
    return this.todoList.filter((t) => !t.completed).length;
  }

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodoList();
    this.pokemonService.getPokemonList().subscribe(e=>{
      console.log('pika')
      console.log(e)
    })
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
