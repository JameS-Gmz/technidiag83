import { TestBed } from '@angular/core/testing';

import { ClicService } from './clic.service';

describe('ClicService', () => {
  let service: ClicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
