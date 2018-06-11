import { TestBed, inject } from '@angular/core/testing';

import { LogInterceptorService } from './log-interceptor.service';

describe('LogInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogInterceptorService]
    });
  });

  it('should be created', inject([LogInterceptorService], (service: LogInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
