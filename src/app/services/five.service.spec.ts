import { TestBed, inject } from '@angular/core/testing';

import { FiveService } from './five.service';

describe('FiveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FiveService]
    });
  });

  it('should be created', inject([FiveService], (service: FiveService) => {
    expect(service).toBeTruthy();
  }));
});
