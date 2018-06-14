import { TestBed, inject } from '@angular/core/testing';

import { Lazy2Service } from './lazy2.service';

describe('Lazy2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Lazy2Service]
    });
  });

  it('should be created', inject([Lazy2Service], (service: Lazy2Service) => {
    expect(service).toBeTruthy();
  }));
});
