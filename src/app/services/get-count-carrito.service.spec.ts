import { TestBed } from '@angular/core/testing';

import { GetCountCarritoService } from './get-count-carrito.service';

describe('GetCountCarritoService', () => {
  let service: GetCountCarritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCountCarritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
