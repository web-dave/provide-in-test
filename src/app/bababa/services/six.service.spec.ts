import { TestBed, inject } from '@angular/core/testing';

import { SixService } from './six.service';

describe('SixService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SixService]
    });
  });

  it('should be created', inject([SixService], (service: SixService) => {
    expect(service).toBeTruthy();
  }));
});
