import { TestBed } from '@angular/core/testing';

import { AreaServicioService } from './area-servicio.service';

describe('AreaServicioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AreaServicioService = TestBed.get(AreaServicioService);
    expect(service).toBeTruthy();
  });
});
