import { TestBed } from '@angular/core/testing';

import { ProductscrudService } from './productscrud.service';

describe('ProductscrudService', () => {
  let service: ProductscrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductscrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
