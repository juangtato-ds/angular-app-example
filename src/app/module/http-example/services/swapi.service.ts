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
    return this.http.get<GenteBackend>(SwapiService.API_PEOPLE_GET + `${id}`).pipe(
      map(v => this.myAdaptor(v))
    );

  }


  // Ejemplo para recuperar datos empleando fetch (javascript puro)
  fetchData(id: number): Promise<Gente> {

    return new Promise<Gente>((resolve, reject) => {
      fetch(SwapiService.API_PEOPLE_GET + `${id}`)
        .then( response => {
          if(!response.ok)                          //Si la peticion falla
            throw new Error('Error en mi fetch');   //Lanzamos el error
          console.log('Repuesta de mi promesa');
          console.log(response);
          return (response.json() as Promise<GenteBackend>);
        })
        .then( data => {
          console.log('Mis datos');
          console.log(data);
          resolve(this.myAdaptor(data));           //Resolvemos al promesa
        })
        .catch( error => {                         //Capturamos el error
          reject(error);
        })
    })

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
