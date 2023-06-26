import { TestBed } from '@angular/core/testing';

import { UpdatePagadoCarritoService } from './update-pagado-carrito.service';

describe('UpdatePagadoCarritoService', () => {
  let service: UpdatePagadoCarritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatePagadoCarritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
