import { TestBed } from '@angular/core/testing';

import { UpdateSaldoPuntosService } from './update-saldo-puntos.service';

describe('UpdateSaldoPuntosService', () => {
  let service: UpdateSaldoPuntosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateSaldoPuntosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
