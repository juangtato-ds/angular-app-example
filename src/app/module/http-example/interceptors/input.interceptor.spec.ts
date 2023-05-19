import { TestBed } from '@angular/core/testing';

import { InputInterceptor } from './input.interceptor';

describe('InputInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InputInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InputInterceptor = TestBed.inject(InputInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
