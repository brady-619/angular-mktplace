import { TestBed } from '@angular/core/testing';

import { UpdateCantidadTotalService } from './update-cantidad-total.service';

describe('UpdateCantidadTotalService', () => {
  let service: UpdateCantidadTotalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateCantidadTotalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
