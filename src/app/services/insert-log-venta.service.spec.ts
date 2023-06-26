import { TestBed } from '@angular/core/testing';

import { InsertLogVentaService } from './insert-log-venta.service';

describe('InsertLogVentaService', () => {
  let service: InsertLogVentaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsertLogVentaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
