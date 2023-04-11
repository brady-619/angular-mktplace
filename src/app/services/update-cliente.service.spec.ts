import { TestBed } from '@angular/core/testing';

import { UpdateClienteService } from './update-cliente.service';

describe('UpdateClienteService', () => {
  let service: UpdateClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
