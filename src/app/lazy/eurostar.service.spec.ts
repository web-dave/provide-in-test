import { TestBed, inject } from '@angular/core/testing';

import { EurostarService } from './eurostar.service';

describe('EurostarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EurostarService]
    });
  });

  it('should be created', inject([EurostarService], (service: EurostarService) => {
    expect(service).toBeTruthy();
  }));
});
