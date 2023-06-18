import { TestBed } from '@angular/core/testing';

import { VerPostServicioService } from './ver-post-servicio.service';

describe('VerPostServicioService', () => {
  let service: VerPostServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerPostServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
