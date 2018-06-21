import { TestBed, inject } from '@angular/core/testing';

import { ModuleBasedServiceService } from './module-based-service.service';

describe('ModuleBasedServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModuleBasedServiceService]
    });
  });

  it('should be created', inject([ModuleBasedServiceService], (service: ModuleBasedServiceService) => {
    expect(service).toBeTruthy();
  }));
});
