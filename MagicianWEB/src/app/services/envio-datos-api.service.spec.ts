import { TestBed } from '@angular/core/testing';

import { EnvioDatosApiService } from './envio-datos-api.service';

describe('EnvioDatosApiService', () => {
  let service: EnvioDatosApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvioDatosApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
