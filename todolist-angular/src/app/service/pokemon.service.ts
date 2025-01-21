import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  http=inject(HttpClient)
  pokemonApiUrl='https://pokeapi.co/api/v2/pokemon-color/8'
  constructor() { }

  getPokemonList(){
    return this.http.get(this.pokemonApiUrl)
  }
}
