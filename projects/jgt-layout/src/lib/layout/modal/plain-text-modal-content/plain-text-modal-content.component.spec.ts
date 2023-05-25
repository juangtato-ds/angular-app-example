import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlainTextModalContentComponent } from './plain-text-modal-content.component';

describe('PlainTextModalContentComponent', () => {
  let component: PlainTextModalContentComponent;
  let fixture: ComponentFixture<PlainTextModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlainTextModalContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlainTextModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
