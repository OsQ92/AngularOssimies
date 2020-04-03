import { TestBed } from '@angular/core/testing';

import { MemorydataService } from './memorydata.service';

describe('MemorydataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MemorydataService = TestBed.get(MemorydataService);
    expect(service).toBeTruthy();
  });
});
