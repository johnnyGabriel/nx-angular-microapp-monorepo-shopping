import { TestBed } from '@angular/core/testing';

import { StoreWindowService } from './store-window.service';

describe('StoreWindowService', () => {
  let service: StoreWindowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreWindowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
