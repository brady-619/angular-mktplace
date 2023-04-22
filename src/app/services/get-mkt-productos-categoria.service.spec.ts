import { TestBed } from '@angular/core/testing';

import { GetMktProductosCategoriaService } from './get-mkt-productos-categoria.service';

describe('GetMktProductosCategoriaService', () => {
  let service: GetMktProductosCategoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMktProductosCategoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
