import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioNuevo } from '../../models/usuario';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.scss']
})
export class UsuariosFormComponent{

  form = new FormGroup({
    id: new FormControl(0, { nonNullable: true, validators: [Validators.required] }),
    nombre: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    apellidos: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });

  @Output()
  crearUsuario = new EventEmitter<UsuarioNuevo>();

  cancel(): void {
    this.form.reset();
  }

  save(): void {
    if (this.form.valid) {
      const value = this.form.getRawValue();

      this.crearUsuario.emit({
        nombre: value.nombre,
        apellidos: value.apellidos,
        email: value.email
      });
    } else {
      alert('Datos inválidos');
    }
  }
}
