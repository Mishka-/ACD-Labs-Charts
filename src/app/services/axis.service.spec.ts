import { TestBed } from '@angular/core/testing';

import { AxisService } from './axis.service';

describe('AxisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AxisService = TestBed.get(AxisService);
    expect(service).toBeTruthy();
  });
});
