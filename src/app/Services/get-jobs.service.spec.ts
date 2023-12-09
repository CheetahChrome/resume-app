import { TestBed } from '@angular/core/testing';

import { GetJobsService } from './get-jobs.service';

describe('GetJobsService', () => {
  let service: GetJobsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetJobsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
