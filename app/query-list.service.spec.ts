import { TestBed, inject } from '@angular/core/testing';

import { QueryListService } from './query-list.service';

describe('QueryListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QueryListService]
    });
  });

  it('should be created', inject([QueryListService], (service: QueryListService) => {
    expect(service).toBeTruthy();
  }));
});
