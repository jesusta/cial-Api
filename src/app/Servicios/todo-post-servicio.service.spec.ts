import { TestBed } from '@angular/core/testing';

import { TodoPostServicioService } from './todo-post-servicio.service';

describe('TodoPostServicioService', () => {
  let service: TodoPostServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoPostServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
