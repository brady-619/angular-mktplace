import { TestBed } from '@angular/core/testing';

import { GetProductosCarritoService } from './get-productos-carrito.service';

describe('GetProductosCarritoService', () => {
  let service: GetProductosCarritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProductosCarritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
