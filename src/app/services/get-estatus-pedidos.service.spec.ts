import { TestBed } from '@angular/core/testing';

import { GetEstatusPedidosService } from './get-estatus-pedidos.service';

describe('GetEstatusPedidosService', () => {
  let service: GetEstatusPedidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetEstatusPedidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
