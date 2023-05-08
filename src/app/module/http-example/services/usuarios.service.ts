import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private static API_URL = 'http://localhost:4200/api';

  constructor(private http: HttpClient) { }

  getListado(): Observable<Usuario> {
    return this.http.get<Usuario>(UsuariosService.API_URL);
  }

  
}
