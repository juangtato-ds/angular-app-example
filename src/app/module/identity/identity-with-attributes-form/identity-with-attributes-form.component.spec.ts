import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityWithAttributesFormComponent } from './identity-with-attributes-form.component';

describe('IdentityWithAttributesFormComponent', () => {
  let component: IdentityWithAttributesFormComponent;
  let fixture: ComponentFixture<IdentityWithAttributesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentityWithAttributesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdentityWithAttributesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
