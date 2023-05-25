import { TestBed } from '@angular/core/testing';

import { JgtLayoutService } from './jgt-layout.service';

describe('JgtLayoutService', () => {
  let service: JgtLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JgtLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
