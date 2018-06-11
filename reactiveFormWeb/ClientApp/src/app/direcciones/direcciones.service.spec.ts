import { TestBed, inject } from '@angular/core/testing';

import { DireccionesService } from './direcciones.service';

describe('DireccionesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DireccionesService]
    });
  });

  it('should be created', inject([DireccionesService], (service: DireccionesService) => {
    expect(service).toBeTruthy();
  }));
});
