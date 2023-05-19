import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosDeleteComponent } from './usuarios-delete.component';

describe('UsuariosDeleteComponent', () => {
  let component: UsuariosDeleteComponent;
  let fixture: ComponentFixture<UsuariosDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
