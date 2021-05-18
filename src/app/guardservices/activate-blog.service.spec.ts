import { TestBed } from '@angular/core/testing';

import { ActivateBlogService } from './activate-blog.service';

describe('ActivateBlogService', () => {
  let service: ActivateBlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivateBlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
