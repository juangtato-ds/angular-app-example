import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlUtilsComponent } from './sql-utils.component';

describe('SqlUtilsComponent', () => {
  let component: SqlUtilsComponent;
  let fixture: ComponentFixture<SqlUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SqlUtilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
