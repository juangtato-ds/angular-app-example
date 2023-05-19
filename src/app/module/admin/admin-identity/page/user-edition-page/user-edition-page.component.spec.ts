import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditionPageComponent } from './user-edition-page.component';

describe('UserEditionPageComponent', () => {
  let component: UserEditionPageComponent;
  let fixture: ComponentFixture<UserEditionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEditionPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserEditionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
