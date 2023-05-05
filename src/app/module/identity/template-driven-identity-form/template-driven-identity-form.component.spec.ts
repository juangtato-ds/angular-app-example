import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenIdentityFormComponent } from './template-driven-identity-form.component';

describe('TemplateDrivenIdentityFormComponent', () => {
  let component: TemplateDrivenIdentityFormComponent;
  let fixture: ComponentFixture<TemplateDrivenIdentityFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDrivenIdentityFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenIdentityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
