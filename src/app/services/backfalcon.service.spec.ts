import { TestBed } from '@angular/core/testing';

import { BackfalconService } from './backfalcon.service';

describe('BackfalconService', () => {
  let service: BackfalconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackfalconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
