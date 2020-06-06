import { TestBed } from '@angular/core/testing';

import { RoutrGaurdService } from './routr-gaurd.service';

describe('RoutrGaurdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoutrGaurdService = TestBed.get(RoutrGaurdService);
    expect(service).toBeTruthy();
  });
});
