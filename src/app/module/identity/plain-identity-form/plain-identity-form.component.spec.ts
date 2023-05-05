import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlainIdentityFormComponent } from './plain-identity-form.component';

describe('PlainIdentityFormComponent', () => {
  let component: PlainIdentityFormComponent;
  let fixture: ComponentFixture<PlainIdentityFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlainIdentityFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlainIdentityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
