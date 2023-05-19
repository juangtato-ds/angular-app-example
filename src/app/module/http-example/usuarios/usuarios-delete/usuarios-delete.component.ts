import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuarios-delete',
  templateUrl: './usuarios-delete.component.html',
  styleUrls: ['./usuarios-delete.component.scss']
})
export class UsuariosDeleteComponent {

  @Input()
  ids: number[] = [];

  @Output()
  borrarUsuario = new EventEmitter<number>();

  form= new FormGroup({
    ids: new FormControl('', { nonNullable: true, validators: [Validators.required] }),  
  })

  delete(){
    if (this.form.valid) {
      const value = this.form.getRawValue();
      console.log(Number(value.ids))
      this.borrarUsuario.emit(
        Number(value.ids)
      )
    }
  }

}
