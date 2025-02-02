import { Component, inject, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TodoService } from '../../service/todo.service';
import { switchMap } from 'rxjs/operators';
import { Todo } from '../../type/todo.type';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe, JsonPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-todo-detail',
  imports: [RouterModule,AsyncPipe,DatePipe],
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.scss',
})
export class TodoDetailComponent implements OnChanges, OnInit {
  activatedRoute = inject(ActivatedRoute);
  todoService = inject(TodoService);
  todo$:Observable<Todo|undefined>=this.activatedRoute.params
  .pipe(
    switchMap((params: any) => {
      return this.todoService.getTodo(params.id);
    })
  )

  todoS=toSignal(this.todo$);
  ngOnChanges(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params);
    });
  }

  ngOnInit(): void {
    console.log('init');

      // .subscribe();
  }
}
