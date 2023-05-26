import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.scss']
})
export class ModificarUsuarioComponent implements  OnDestroy {

  private susbcription: Subscription;
  private lastID: number = 0;
  form = this.usuariosService.getForm();

  @Input()
  usuarios: Usuario[] = [];


  @Output()
  modificarUsuario = new EventEmitter<Usuario>();

  constructor(private usuariosService: UsuariosService) {
    this.susbcription = this.form.controls.id.valueChanges.subscribe( id => {
      // Este IF evita que se llame de modo recursivo el metodo cargarInfo ya que el propio metodo produce un valueChantes sobre id
      if(id != this.lastID){    
        this.lastID = id;
        this.cargarInfoUsuario(id); 
      } 
    })
  }

  cargarInfoUsuario(id: number): void {

    const usuario = this.usuarios[id - 1];
    console.log(usuario);
    if (usuario) {
      this.form.setValue(usuario);
    } else {
      this.form.reset();
    }
  }

  cancel(): void {
    this.form.reset();
  }

  save(): void {
    if (this.form.valid) {
      this.modificarUsuario.emit(this.form.getRawValue());
    } else {
      alert('Datos inválidos');
    }
  }

  ngOnDestroy(): void {
    this.susbcription.unsubscribe();
  }

}
