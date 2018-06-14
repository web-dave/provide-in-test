import { TestBed, inject } from '@angular/core/testing';

import { FourService } from './four.service';

describe('FourService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FourService]
    });
  });

  it('should be created', inject([FourService], (service: FourService) => {
    expect(service).toBeTruthy();
  }));
});
