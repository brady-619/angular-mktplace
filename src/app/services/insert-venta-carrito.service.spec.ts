import { TestBed } from '@angular/core/testing';

import { InsertVentaCarritoService } from './insert-venta-carrito.service';

describe('InsertVentaCarritoService', () => {
  let service: InsertVentaCarritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsertVentaCarritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
