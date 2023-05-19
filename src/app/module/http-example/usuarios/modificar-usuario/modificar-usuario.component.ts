import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.scss']
})
export class ModificarUsuarioComponent {

  @Input()
  usuarios: Usuario[] = [];
  // usuarios: Map<number,Usuario> = new Map();


  @Output()
  modificarUsuario = new EventEmitter<Usuario>();

  form = new FormGroup({
    id: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    nombre: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    apellidos: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });

  cargarInfoUsuario(): void {
    const id = Number(this.form.getRawValue().id);
    // let usuario = this.usuarios.get(id) ?? null;
    const usuario = this.usuarios[id-1];
    if(usuario){
      this.form.controls['nombre'].setValue(usuario.nombre);
      this.form.controls['apellidos'].setValue(usuario.apellidos);    
      this.form.controls['email'].setValue(usuario.email);
    }
  }

  cancel(): void {
    this.form.reset();
  }

  save(): void {
    if (this.form.valid) {
      const value = this.form.getRawValue();

      this.modificarUsuario.emit({
        id: Number(value.id),
        nombre: value.nombre,
        apellidos: value.apellidos,
        email: value.email
      });
    } else {
      alert('Datos inválidos');
    }
  }

}
