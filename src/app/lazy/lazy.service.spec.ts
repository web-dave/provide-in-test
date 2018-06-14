import { TestBed, inject } from '@angular/core/testing';

import { LazyService } from './lazy.service';

describe('LazyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LazyService]
    });
  });

  it('should be created', inject([LazyService], (service: LazyService) => {
    expect(service).toBeTruthy();
  }));
});
