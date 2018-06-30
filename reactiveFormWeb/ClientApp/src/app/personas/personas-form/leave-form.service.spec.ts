import { TestBed, inject } from '@angular/core/testing';

import { LeaveFormService } from './leave-form.service';

describe('LeaveFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeaveFormService]
    });
  });

  it('should be created', inject([LeaveFormService], (service: LeaveFormService) => {
    expect(service).toBeTruthy();
  }));
});
