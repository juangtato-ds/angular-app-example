import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UsuarioNuevo } from '../../models/usuario';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.scss']
})
export class UsuariosFormComponent {

  form = this.usuariosService.getForm();
  
  @Output()
  crearUsuario = new EventEmitter<UsuarioNuevo>();
  
  constructor(private usuariosService: UsuariosService){}

  cancel(): void {
    this.form.reset();
  }

  save(): void {
    if (this.form.valid) {
      this.crearUsuario.emit(this.form.getRawValue());
    } else {
      alert('Datos inválidos');
    }
  }
}
