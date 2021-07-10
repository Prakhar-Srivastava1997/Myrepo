import { TestBed } from '@angular/core/testing';

import { FlightviewService } from './flightview.service';

describe('FlightviewService', () => {
  let service: FlightviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
