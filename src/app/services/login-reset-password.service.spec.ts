import { TestBed } from '@angular/core/testing';

import { LoginResetPasswordService } from './login-reset-password.service';

describe('LoginResetPasswordService', () => {
  let service: LoginResetPasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginResetPasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
