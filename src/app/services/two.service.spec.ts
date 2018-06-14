import { TestBed, inject } from '@angular/core/testing';

import { TwoService } from './two.service';

describe('TwoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TwoService]
    });
  });

  it('should be created', inject([TwoService], (service: TwoService) => {
    expect(service).toBeTruthy();
  }));
});
