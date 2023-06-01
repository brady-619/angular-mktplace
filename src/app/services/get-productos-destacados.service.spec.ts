import { TestBed } from '@angular/core/testing';

import { GetProductosDestacadosService } from './get-productos-destacados.service';

describe('GetProductosDestacadosService', () => {
  let service: GetProductosDestacadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProductosDestacadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
