import { TestBed } from '@angular/core/testing';

import { GetPreciosMenorMayorService } from './get-precios-menor-mayor.service';

describe('GetPreciosMenorMayorService', () => {
  let service: GetPreciosMenorMayorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPreciosMenorMayorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
