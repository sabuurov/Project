import { TestBed } from '@angular/core/testing';

import { BlogGuardServiceService } from './blog-guard-service.service';

describe('BlogGuardServiceService', () => {
  let service: BlogGuardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogGuardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
