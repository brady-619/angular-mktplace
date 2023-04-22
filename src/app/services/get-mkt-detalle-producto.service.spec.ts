import { TestBed } from '@angular/core/testing';

import { GetMktDetalleProductoService } from './get-mkt-detalle-producto.service';

describe('GetMktDetalleProductoService', () => {
  let service: GetMktDetalleProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMktDetalleProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
