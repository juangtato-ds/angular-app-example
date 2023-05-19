import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gente } from '../models/gente';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  private static API_PEOPLE_GET = 'https://swapi.dev/api/people/';

  constructor(private http: HttpClient) { }

  getData(id: number): Observable<Gente>{
    return this.http.get<Gente>(SwapiService.API_PEOPLE_GET+`${id}`);
  }
}
