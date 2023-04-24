import { TestBed } from '@angular/core/testing';

import { GetInfoClienteService } from './get-info-cliente.service';

describe('GetInfoClienteService', () => {
  let service: GetInfoClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetInfoClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
