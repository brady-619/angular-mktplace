import { TestBed } from '@angular/core/testing';

import { GetEditClienteService } from './get-edit-cliente.service';

describe('GetEditClienteService', () => {
  let service: GetEditClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetEditClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
