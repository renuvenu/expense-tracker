import { TestBed } from '@angular/core/testing';

import { AddSavingsService } from './add-savings.service';

describe('AddSavingsService', () => {
  let service: AddSavingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddSavingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
