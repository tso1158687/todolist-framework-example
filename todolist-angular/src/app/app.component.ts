import { Component, inject, OnInit } from '@angular/core';
import { TodoService } from './service/todo.service';
import { Todo } from './type/todo.type';
import { PokemonService } from './service/pokemon.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [ RouterOutlet, RouterLink],
})
export class AppComponent implements OnInit {
  pokemonService = inject(PokemonService);



  ngOnInit(): void {

    this.pokemonService.getPokemonList().subscribe((e: any) => {
      console.log('pika');
      console.log(e);
    });
  }
}
