import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario, UsuarioNuevo } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private static API_URL = 'http://localhost:4200/api';
  private static API_URL_USER= 'http://localhost:4200/api/user/';

  constructor(private http: HttpClient) { }

  getListado(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(UsuariosService.API_URL);
  }

  crearUsuario(data: UsuarioNuevo): Observable<Usuario> {
    return this.http.put<Usuario>(UsuariosService.API_URL_USER, data);
  }

  borrarUsuario(id: number): Observable<boolean> {
    return this.http.delete<boolean>(UsuariosService.API_URL_USER+id);
  }

  modificarusuario(data: Usuario): Observable<Usuario> {
    return this.http.patch<Usuario>(UsuariosService.API_URL_USER, data);
  }

  
}
