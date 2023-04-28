import { TestBed } from '@angular/core/testing';

import { DeleteProductoCarritoService } from './delete-producto-carrito.service';

describe('DeleteProductoCarritoService', () => {
  let service: DeleteProductoCarritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteProductoCarritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
