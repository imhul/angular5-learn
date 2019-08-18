import { TestBed } from '@angular/core/testing';

import { UserMiddleware } from './user-middleware.service';

describe('UserMiddleware', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserMiddleware = TestBed.get(UserMiddleware);
    expect(service).toBeTruthy();
  });
});
