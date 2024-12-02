import { TestBed } from '@angular/core/testing';

import { AuthChildGuardService } from './auth-child-guard.service';

describe('AuthChildGuardService', () => {
  let service: AuthChildGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthChildGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
