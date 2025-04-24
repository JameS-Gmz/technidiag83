import { TestBed } from '@angular/core/testing';

import { ClicsService } from './clic.service';

describe('ClicsService', () => {
  let service: ClicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
