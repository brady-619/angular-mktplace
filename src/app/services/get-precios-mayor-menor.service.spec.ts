import { TestBed } from '@angular/core/testing';

import { GetPreciosMayorMenorService } from './get-precios-mayor-menor.service';

describe('GetPreciosMayorMenorService', () => {
  let service: GetPreciosMayorMenorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPreciosMayorMenorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
