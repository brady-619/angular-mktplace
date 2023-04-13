import { TestBed } from '@angular/core/testing';

import { GetMktProductosService } from './get-mkt-productos.service';

describe('GetMktProductosService', () => {
  let service: GetMktProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMktProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
