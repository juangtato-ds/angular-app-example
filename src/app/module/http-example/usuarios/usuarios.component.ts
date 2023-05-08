import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario, UsuarioNuevo } from '../models/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit{

  usuarios!: Usuario[];
  ids: number[] = [];

  constructor(private usuariosService: UsuariosService){}

  ngOnInit(): void {
    this.usuariosService.getListado().subscribe({
      next: (data) =>  this.actualizarListados(data),
      error: (e) => console.log(e),
      complete: () => console.info('complete')
    })

  }

  crearUsuario(usuario: UsuarioNuevo): void {
    console.log(usuario);
    this.usuariosService.crearUsuario(usuario).subscribe({
      next: (data) => this.usuarios.push(data),
      error: (e) => console.log(e),
      complete: () => console.info('complete')
    })
  }

  borrarUsuario(id: number): void {
    this.usuariosService.borrarUsuario(id).subscribe({
      next: () => {
        this.usuariosService.getListado().subscribe({
          next: (data) => this.actualizarListados(data),
          error: (e) => console.log(e)
        })
      },
      error: (e) => console.log(e),
      complete: () => console.info('complete')
    })
  }

  modificarUsuario(usuario: Usuario): void {
    this.usuariosService.modificarusuario(usuario).subscribe({
      next: ()=> {
        this.usuariosService.getListado().subscribe({
          next: (data) => this.actualizarListados(data),
          error: (e) => console.log(e)
        })
      },
      error: (e) => console.log(e),
      complete: () => console.info('complete')
    })
  }

  private actualizarListados(data: Usuario[]): void {
    console.log(data);
    this.usuarios = data;
    this.ids = data.map(usuario => usuario.id)
  }

}



// ...
