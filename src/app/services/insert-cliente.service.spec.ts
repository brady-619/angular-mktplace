import { TestBed } from '@angular/core/testing';

import { InsertClienteService } from './insert-cliente.service';

describe('InsertClienteService', () => {
  let service: InsertClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsertClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
