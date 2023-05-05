import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbIdentityFormComponent } from './fb-identity-form.component';

describe('FbIdentityFormComponent', () => {
  let component: FbIdentityFormComponent;
  let fixture: ComponentFixture<FbIdentityFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbIdentityFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FbIdentityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
