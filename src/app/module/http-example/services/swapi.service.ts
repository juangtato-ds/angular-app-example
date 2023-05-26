import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Gente, GenteBackend } from '../models/gente';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  static API_PEOPLE_GET = 'https://swapi.dev/api/people/';

  constructor(private http: HttpClient) { }

  getData(id: number): Observable<Gente> {
    // return this.http.get<Gente>(SwapiService.API_PEOPLE_GET+`${id}`);
    return this.http.get<GenteBackend>(SwapiService.API_PEOPLE_GET + `${id}`).pipe(
      map(v => this.myAdaptor(v))
    );

  }

  private myAdaptor(data: GenteBackend): Gente {
    return {
      name: data.name,
      gender: data.gender,
      height: data.height,
      mass: data.mass,
      homeworld: data.homeworld,
      species: data.species,
      born: data.birth_year
    }
  }

}
