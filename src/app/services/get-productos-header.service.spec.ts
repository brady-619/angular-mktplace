import { TestBed } from '@angular/core/testing';

import { GetProductosHeaderService } from './get-productos-header.service';

describe('GetProductosHeaderService', () => {
  let service: GetProductosHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProductosHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
