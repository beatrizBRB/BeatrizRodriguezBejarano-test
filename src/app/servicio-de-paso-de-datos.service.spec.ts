import { TestBed } from '@angular/core/testing';

import { ServicioDePasoDeDatosService } from './servicio-de-paso-de-datos.service';

describe('ServicioDePasoDeDatosService', () => {
  let service: ServicioDePasoDeDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioDePasoDeDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
