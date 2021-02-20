import { Injectable } from '@angular/core';
import { Film } from './modele/film';


@Injectable({
  providedIn: 'root'
})
export class FilmyService {

 private filmy: Film[] = [
{id:0, tytul:'Magister', opis: 'Słynny profesor Pajonsz zostaje pierwszym magistrem uniwersytetu Wenszorka', rok: 2016},
{id:1, tytul:'Wizard', opis: 'Wizard Pajonsz ratuje Hogwart', rok: 2018},
{id:2, tytul:'Wonsz', opis: 'Wonsz pełza gdzieś po Japonii', rok: 2018},
];

  constructor() { }

  wszystkieFilmy(): Film[] {
    return this.filmy;
  }
  getFilm(id: number): Film{
    return this.filmy[id];
  }
}
