import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JgtLayoutComponent } from './jgt-layout.component';

describe('JgtLayoutComponent', () => {
  let component: JgtLayoutComponent;
  let fixture: ComponentFixture<JgtLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JgtLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JgtLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
